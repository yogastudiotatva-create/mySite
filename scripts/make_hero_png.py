from PIL import Image, ImageDraw, ImageFont
import os

width, height = 1200, 800
img = Image.new('RGB', (width, height), '#f7f1e7')
d = ImageDraw.Draw(img)

for y in range(height):
    ratio = y / (height - 1)
    r = int(247 + (255 - 247) * ratio)
    g = int(241 + (255 - 241) * ratio)
    b = int(231 + (255 - 231) * ratio)
    d.line([(0, y), (width, y)], fill=(r, g, b))

ellipse_bbox = [width * 0.1, height * 0.78, width * 0.9, height * 0.9]
d.ellipse(ellipse_bbox, fill=(233, 226, 215, 255))

try:
    font_large = ImageFont.truetype('arial.ttf', 92)
    font_sm = ImageFont.truetype('arial.ttf', 34)
except Exception:
    font_large = ImageFont.load_default()
    font_sm = ImageFont.load_default()

text = 'TATVA'
w, h = d.textsize(text, font=font_large)
d.text(((width - w) / 2, 120), text, fill='#103a31', font=font_large)
text2 = 'Yoga & nutrition for real results'
w2, h2 = d.textsize(text2, font=font_sm)
d.text(((width - w2) / 2, 180), text2, fill='#103a31', font=font_sm)

shape_color = (58, 104, 87)
for offset in range(5):
    points = [
        (width * 0.55 - offset * 3, height * 0.45 + offset * 2),
        (width * 0.41 + offset * 3, height * 0.45 - offset * 2),
        (width * 0.35 + offset * 2, height * 0.68 - offset * 3),
        (width * 0.49 + offset * 4, height * 0.76 + offset * 2),
    ]
    d.polygon(points, fill=(shape_color[0] + offset * 5, shape_color[1] + offset * 5, shape_color[2] + offset * 5))

panel_bbox = [width * 0.15, height * 0.26, width * 0.85, height * 0.78]
overlay = Image.new('RGBA', img.size, (255, 255, 255, 0))
ld = ImageDraw.Draw(overlay)
ld.rounded_rectangle(panel_bbox, radius=40, fill=(255, 255, 255, 220), outline=(162, 163, 143), width=2)
img = Image.alpha_composite(img.convert('RGBA'), overlay)
img = img.convert('RGB')

out_path = os.path.join('public', 'hero.png')
img.save(out_path, 'PNG')
print('saved', out_path)
