from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def build():
    index_html = (ROOT / "index.html").read_text(encoding="utf-8")
    pillars_js = (ROOT / "data" / "pillars.js").read_text(encoding="utf-8")
    series_js = (ROOT / "data" / "series.js").read_text(encoding="utf-8")
    states_js = (ROOT / "data" / "states.js").read_text(encoding="utf-8")
    deep_js = (ROOT / "data" / "deep_brazil.js").read_text(encoding="utf-8")
    app_js = (ROOT / "js" / "app.js").read_text(encoding="utf-8")

    target_block = """  <script src="data/pillars.js?v=20261112f"></script>
  <script src="data/series.js?v=20261112f"></script>
  <script src="data/states.js?v=20261112f"></script>
  <script src="data/deep_brazil.js?v=20261112f"></script>
  <script src="js/app.js?v=20261112f"></script>"""

    inline_block = f"""  <script>
{pillars_js}
{series_js}
{states_js}
{deep_js}
{app_js}
  </script>"""

    assert target_block in index_html, "Target script tags not found in index.html"
    standalone = index_html.replace(target_block, inline_block)
    for name in ("standalone.html", "standalone_portal_github_pages_google_sites_ready.html"):
        out_path = ROOT / name
        out_path.write_text(standalone, encoding="utf-8", newline="\n")
        print(f"Built {name} ({out_path.stat().st_size:,} bytes)")

if __name__ == "__main__":
    build()
