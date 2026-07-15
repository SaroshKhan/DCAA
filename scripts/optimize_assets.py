from pathlib import Path
from PIL import Image


source = Path("/home/ubuntu/webdev-static-assets/dcaa-hero-evidence-cartography.png")
destination = Path("/home/ubuntu/webdev-static-assets/dcaa-hero-evidence-cartography-optimized.webp")

with Image.open(source) as image:
    image = image.convert("RGB")
    image.thumbnail((1600, 900), Image.Resampling.LANCZOS)
    image.save(destination, "WEBP", quality=78, method=6)

print(destination)
print(destination.stat().st_size)
