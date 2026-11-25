"""Refresh the static portrait index from Semantic Lab P3/P8, then Wikidata P18."""
import json
from pathlib import Path
from urllib.parse import quote, unquote, urlencode, urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data/people_portraits.json"
SEM = "https://query.semlab.io/proxy/wdqs/bigdata/namespace/wdq/sparql"
WD = "https://query.wikidata.org/sparql"


def rows(endpoint, user_agent, ids, pattern):
    for start in range(0, len(ids), 65):
        values = " ".join("wd:" + qid for qid in ids[start:start+65])
        query = "SELECT * WHERE { VALUES ?p { " + values + " } " + pattern + " }"
        url = endpoint + "?" + urlencode({"format": "json", "query": query})
        req = Request(url, headers={"User-Agent": user_agent, "Accept": "application/sparql-results+json"})
        with urlopen(req, timeout=50) as response:
            for row in json.load(response)["results"]["bindings"]:
                yield {key: data["value"] for key, data in row.items()}


def main():
    sites = json.loads((ROOT / "data/brooklyn_jazz_sites.json").read_text())["sites"]
    ids = sorted({p["qid"] for site in sites for p in site["people"]})
    old = json.loads(OUT.read_text()) if OUT.exists() else {}
    result = {}
    for row in rows(SEM, "semlab-data-process", ids, "OPTIONAL { ?p wdt:P3 ?thumb } OPTIONAL { ?p wdt:P8 ?wd }"):
        qid = row["p"].rsplit("/", 1)[-1]
        item = result.setdefault(qid, {})
        if "thumb" in row:
            item.setdefault("url", row["thumb"].replace("http://", "https://", 1))
        if "wd" in row:
            item.setdefault("wikidata", row["wd"].rsplit("/", 1)[-1])
    missing = sorted({p["wikidata"] for p in result.values() if "wikidata" in p and "url" not in p})
    filenames = {}
    for row in rows(WD, "BrooklynJazzAtlas/1.0 (Linking Lost Jazz Shrines portrait index)", missing, "?p wdt:P18 ?img"):
        wd = row["p"].rsplit("/", 1)[-1]
        filenames.setdefault(wd, unquote(urlparse(row["img"]).path.split("/Special:FilePath/")[-1]))
    for qid, p in result.items():
        filename = filenames.get(p.get("wikidata"))
        if "url" not in p and filename:
            p.update(commonsFile=filename,url="https://commons.wikimedia.org/wiki/Special:FilePath/"+quote(filename,safe="")+"?width=300")
        previous = old.get(qid, {})
        if previous.get("local") and previous.get("url") == p.get("url") and (ROOT / previous["local"]).is_file():
            p["local"] = previous["local"]
    tmp = OUT.with_suffix(".json.tmp")
    tmp.write_text(json.dumps({i:p for i,p in sorted(result.items()) if p}, ensure_ascii=False,indent=2)+"\n")
    tmp.replace(OUT)


if __name__ == "__main__":
    main()
