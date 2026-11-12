import urllib.request
import gzip
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STATES_JS = ROOT / "data" / "states.js"

CODAREA_TO_UF = {
    "11": "RO", "12": "AC", "13": "AM", "14": "RR", "15": "PA", "16": "AP", "17": "TO",
    "21": "MA", "22": "PI", "23": "CE", "24": "RN", "25": "PB", "26": "PE", "27": "AL", "28": "SE", "29": "BA",
    "31": "MG", "32": "ES", "33": "RJ", "35": "SP",
    "41": "PR", "42": "SC", "43": "RS",
    "50": "MS", "51": "MT", "52": "GO", "53": "DF"
}

# Fine-tuned label offsets (dx, dy) from polygon centroid so coastal/small states are 100% readable
LABEL_OFFSETS = {
    "DF": (0, -2),
    "GO": (-6, 10),
    "RJ": (14, 8),
    "ES": (14, 2),
    "SE": (15, 5),
    "AL": (16, 2),
    "PE": (0, 2),
    "PB": (16, -2),
    "RN": (10, -6),
    "CE": (-2, 0),
    "PI": (2, 6),
    "MA": (-4, 0),
    "PA": (0, 8),
    "AM": (-6, 4),
    "AC": (0, 2),
    "RO": (0, 4),
    "RR": (0, 4),
    "AP": (0, 4),
    "SC": (4, 0),
    "RS": (-4, -4),
}

def polygon_centroid(ring):
    """Compute area and centroid (cx, cy) of a closed 2D ring."""
    n = len(ring)
    if n < 3:
        xs = [p[0] for p in ring]
        ys = [p[1] for p in ring]
        return 0.0, sum(xs) / max(1, len(xs)), sum(ys) / max(1, len(ys))
    area2 = 0.0
    cx = 0.0
    cy = 0.0
    for i in range(n - 1):
        x0, y0 = ring[i]
        x1, y1 = ring[i + 1]
        cross = x0 * y1 - x1 * y0
        area2 += cross
        cx += (x0 + x1) * cross
        cy += (y0 + y1) * cross
    if abs(area2) < 1e-9:
        xs = [p[0] for p in ring]
        ys = [p[1] for p in ring]
        return 0.0, sum(xs) / len(xs), sum(ys) / len(ys)
    area = area2 / 2.0
    return abs(area), cx / (3.0 * area2), cy / (3.0 * area2)

def main():
    url = "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?intrarregiao=UF&qualidade=minima&formato=application/vnd.geo+json"
    raw = urllib.request.urlopen(url, timeout=20).read()
    data = json.loads(gzip.decompress(raw).decode("utf-8")) if raw[:2] == b"\x1f\x8b" else json.loads(raw.decode("utf-8"))

    # Mainland bounds
    min_lon, max_lon = -73.99, -34.79
    min_lat, max_lat = -33.75, 5.28
    pad = 22.0
    width = 600.0 - 2 * pad
    height = 600.0 - 2 * pad

    def proj(lon, lat):
        x = pad + ((lon - min_lon) / (max_lon - min_lon)) * width
        y = pad + ((max_lat - lat) / (max_lat - min_lat)) * height
        return round(x, 1), round(y, 1)

    uf_paths = {}
    uf_labels = {}

    for feat in data["features"]:
        cod = str(feat["properties"]["codarea"])
        uf = CODAREA_TO_UF.get(cod)
        if not uf:
            continue
        geom = feat["geometry"]
        polys = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]

        path_parts = []
        best_area = -1.0
        best_centroid = (300, 300)

        for poly in polys:
            outer = poly[0]
            # Filter out tiny far-offshore oceanic rocks (> -34.5 lon)
            if any(pt[0] > -34.4 for pt in outer):
                continue

            pts = [proj(lon, lat) for lon, lat in outer]
            # Deduplicate consecutive identical rounded points
            dedup = [pts[0]]
            for p in pts[1:]:
                if p != dedup[-1]:
                    dedup.append(p)
            if len(dedup) < 3:
                continue

            area, cx, cy = polygon_centroid(dedup)
            if area > best_area:
                best_area = area
                best_centroid = (cx, cy)

            cmds = [f"M{dedup[0][0]},{dedup[0][1]}"]
            cmds.extend(f"L{p[0]},{p[1]}" for p in dedup[1:])
            cmds.append("Z")
            path_parts.append(" ".join(cmds))

        uf_paths[uf] = " ".join(path_parts)
        dx, dy = LABEL_OFFSETS.get(uf, (0, 0))
        uf_labels[uf] = (round(best_centroid[0] + dx, 1), round(best_centroid[1] + dy, 1))

    print(f"Generated IBGE SVG paths for {len(uf_paths)} UFs")

    text = STATES_JS.read_text(encoding="utf-8")
    for uf, svg_path in uf_paths.items():
        lx, ly = uf_labels[uf]
        # Replace lx, ly, geo for each UF entry
        pattern = rf"(uf:\s*'{uf}'[^\n]*?lx:\s*)([0-9.]+)(,\s*ly:\s*)([0-9.]+)(,\s*geo:\s*')([^']*)(')"
        replacement = rf"\g<1>{lx}\g<3>{ly}\g<5>{svg_path}\g<7>"
        new_text, count = re.subn(pattern, replacement, text, count=1, flags=re.DOTALL)
        assert count == 1, f"Failed to update {uf} in states.js"
        text = new_text

    STATES_JS.write_text(text, encoding="utf-8", newline="\n")
    print(f"Updated {STATES_JS} ({STATES_JS.stat().st_size:,} bytes)")

if __name__ == "__main__":
    main()
