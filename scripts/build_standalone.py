from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def build():
    index_html = (ROOT / "index.html").read_text(encoding="utf-8")
    pillars_js = (ROOT / "data" / "pillars.js").read_text(encoding="utf-8")
    series_js = (ROOT / "data" / "series.js").read_text(encoding="utf-8")
    states_js = (ROOT / "data" / "states.js").read_text(encoding="utf-8")
    app_js = (ROOT / "js" / "app.js").read_text(encoding="utf-8")

    target_block = """  <script src="data/pillars.js"></script>
  <script src="data/series.js"></script>
  <script src="data/states.js"></script>
  <script src="js/app.js"></script>"""

    inline_block = f"""  <script>
{pillars_js}
{series_js}
{states_js}
{app_js}
  </script>"""

    assert target_block in index_html, "Target script tags not found in index.html"
    standalone = index_html.replace(target_block, inline_block)
    out_path = ROOT / "standalone.html"
    out_path.write_text(standalone, encoding="utf-8", newline="\n")
    print(f"Built standalone.html ({out_path.stat().st_size:,} bytes)")

if __name__ == "__main__":
    build()
