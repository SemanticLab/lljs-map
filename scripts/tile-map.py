"""Regenerate the atlas tile pyramid from the supplied scan (requires Pillow and jpegtran)."""

from pathlib import Path
from subprocess import run
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TILE_SIZE = 512
MAX_LEVEL = 3

with Image.open(ROOT / "data/default.jpg") as scan:
    for level in range(MAX_LEVEL + 1):
        divisor = 2 ** (MAX_LEVEL - level)
        size = tuple((n + divisor - 1) // divisor for n in scan.size)
        layer = scan.resize(size, Image.Resampling.LANCZOS) if divisor > 1 else scan
        directory = ROOT / "atlas/map" / str(level)
        directory.mkdir(parents=True, exist_ok=True)
        for x in range(0, layer.width, TILE_SIZE):
            for y in range(0, layer.height, TILE_SIZE):
                bounds = (x, y, min(x + TILE_SIZE, layer.width), min(y + TILE_SIZE, layer.height))
                output = directory / f"{x // TILE_SIZE}-{y // TILE_SIZE}.jpg"
                if divisor == 1:
                    # Tile boundaries align with JPEG coding blocks. Copy their
                    # coefficients directly so fine lettering suffers no re-encoding.
                    region = f"{bounds[2]-x}x{bounds[3]-y}+{x}+{y}"
                    run(["jpegtran", "-copy", "none", "-crop", region, "-outfile",
                         str(output), str(ROOT / "data/default.jpg")], check=True)
                else:
                    layer.crop(bounds).save(output, quality=87, optimize=True)
