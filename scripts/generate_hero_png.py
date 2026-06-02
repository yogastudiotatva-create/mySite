from PIL import Image, ImageDraw, ImageFont
import os

width, height = 1200, 800
img = Image.new('RGB', (width, height), '#f5efe1')
d = ImageDraw.Draw(img)

# soft gradient
for y in range(height):
    t = y / (height - 1)
    r = int(245 + (255 - 245) * t)
    g = int(239 + (245 - 239) * t)
    b = int(225 + (237 - 225) * t)
    d.line([(0, y), (width, y)], fill=(r, g, b))

# subtle background shape
shape = [(120, 130), (1080, 680)]
d.ellipse(shape, fill=(245, 238, 230), outline=None)

# yoga mat
mat = [(250, 620), (950, 740)]
d.rounded_rectangle(mat, radius=70, fill='#e4d6c1')

# simplified figure
body = Image.new('RGBA', (width, height), (0, 0, 0, 0))
fd = ImageDraw.Draw(body)
head = (520, 220, 620, 320)
fd.ellipse(head, fill='#294b43')
# torso
fd.polygon([(570, 320), (510, 430), (520, 520), (580, 530), (620, 420)], fill='#294b43')
# left leg
fd.polygon([(520, 520), (440, 620), (470, 640), (540, 530)], fill='#294b43')
# right leg
fd.polygon([(580, 530), (690, 640), (720, 620), (650, 520)], fill='#294b43')
# left arm
fd.polygon([(520, 360), (420, 420), (430, 445), (540, 380)], fill='#294b43')
# right arm
fd.polygon([(620, 360), (720, 430), (700, 455), (590, 385)], fill='#294b43')
# hands
fd.ellipse((410, 418, 438, 446), fill='#294b43')
fd.ellipse((690, 428, 718, 456), fill='#294b43')

# shadow under figure
d.ellipse((430, 650, 730, 690), fill=(196, 175, 150, 180))

img = Image.alpha_composite(img.convert('RGBA'), body)
img = img.convert('RGB')

# add text label
try:
    font_title = ImageFont.truetype('arial.ttf', 78)
    font_sub = ImageFont.truetype('arial.ttf', 32)
except Exception:
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
text = 'Tatva Yoga'
bbox = d.textbbox((0, 0), text, font=font_title)
w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
d.text(((width - w) / 2, 50), text, fill='#163d35', font=font_title)
subtext = 'Balanced movement & nutrition'
bbox2 = d.textbbox((0, 0), subtext, font=font_sub)
w2, h2 = bbox2[2] - bbox2[0], bbox2[3] - bbox2[1]
d.text(((width - w2) / 2, 145), subtext, fill='#3b5a52', font=font_sub)

out_path = os.path.join('public', 'hero.png')
img.save(out_path, 'PNG')
print('saved', out_path)
