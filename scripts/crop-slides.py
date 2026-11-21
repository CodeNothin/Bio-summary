# =====================================================================
# Cuts the slide figures listed in src/data/figures.json out of the
# lecture PDFs and saves them as WebP images in src/assets/slides/.
#
# The PDFs are not in git. Put them in Source/pdf/ named by deck id:
#   p1 = Unit_5_1_tissue        p3 = Unit_5_3_nutrition
#   p4 = Unit_5.4Transport      p5 = Unit_5.5_Responses
#   a5 = Gen_bio_107_Unit_5     a5x = slide_เพิ่มเติม_28_ตค_69
#   e1 = 2303107_General_Biology_lect1   e2..e5 = Unit 6-2 .. 6-5
#   c7 = Unit 7 Conclusion
#
# Run from the project folder (needs Python with PyMuPDF and Pillow):
#   python scripts/crop-slides.py            # every figure
#   python scripts/crop-slides.py a5-92      # just one
# It also writes the pixel size of each image into figures.json
# ("sizes"), which the site uses to reserve space before images load.
# =====================================================================
import json
import os
import sys

import fitz  # PyMuPDF
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPEC = os.path.join(ROOT, 'src', 'data', 'figures.json')
OUT = os.path.join(ROOT, 'src', 'assets', 'slides')
PDF = os.path.join(ROOT, 'Source', 'pdf')
TARGET_W = 820  # output width in px for a full-width crop

spec = json.load(open(SPEC, encoding='utf-8'))
only = set(sys.argv[1:])
os.makedirs(OUT, exist_ok=True)
sizes = spec.get('sizes', {})
docs = {}
for fid, (x0, y0, x1, y1) in spec['figures'].items():
    if only and fid not in only:
        continue
    deck, page = fid.rsplit('-', 1)
    doc = docs.setdefault(deck, fitz.open(os.path.join(PDF, deck + '.pdf')))
    p = doc[int(page) - 1]
    r = p.rect
    clip = fitz.Rect(r.x0 + x0 * r.width, r.y0 + y0 * r.height, r.x0 + x1 * r.width, r.y0 + y1 * r.height)
    zoom = min(4.0, TARGET_W / clip.width)
    pix = p.get_pixmap(matrix=fitz.Matrix(zoom, zoom), clip=clip)
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    im.save(os.path.join(OUT, fid + '.webp'), 'WEBP', quality=58, method=6)
    sizes[fid] = [im.width, im.height]
    print(fid, im.size)
spec['sizes'] = dict(sorted(sizes.items()))
with open(SPEC, 'w', encoding='utf-8') as f:
    json.dump(spec, f, ensure_ascii=False, indent=2)
    f.write('\n')
