from PIL import Image, ImageDraw, ImageFont
import os

# Create image
width, height = 1200, 800
img = Image.new('RGB', (width, height), '#3a6b6b')
d = ImageDraw.Draw(img)

# Add subtle dot pattern
dot_color = (58, 107, 107)
for x in range(100, width, 120):
    for y in range(100, height, 120):
        d.ellipse((x-4, y-4, x+4, y+4), fill=dot_color, outline=None)

# Create yoga figure on transparent layer
body = Image.new('RGBA', (width, height), (0, 0, 0, 0))
bd = ImageDraw.Draw(body)

# Head
head_x, head_y = 850, 180
bd.ellipse((head_x-40, head_y-40, head_x+40, head_y+40), fill=(212, 165, 116, 255))

# Neck
bd.rectangle((head_x-15, head_y+35, head_x+15, head_y+60), fill=(212, 165, 116, 255))

# Torso (yoga top)
bd.polygon([
    (head_x-35, head_y+60),
    (head_x-45, head_y+280),
    (head_x+10, head_y+300),
    (head_x+45, head_y+85)
], fill=(184, 184, 184, 255))

# Left arm stretched up and back
bd.polygon([
    (head_x-35, head_y+80),
    (head_x-200, head_y-80),
    (head_x-220, head_y-50),
    (head_x-50, head_y+100)
], fill=(212, 165, 116, 255))

# Right arm extended
bd.polygon([
    (head_x+45, head_y+85),
    (head_x+220, head_y-20),
    (head_x+240, head_y+10),
    (head_x+60, head_y+110)
], fill=(212, 165, 116, 255))

# Left leg (bent, pointing down/side)
bd.polygon([
    (head_x-45, head_y+280),
    (head_x-150, head_y+420),
    (head_x-130, head_y+450),
    (head_x-30, head_y+310)
], fill=(26, 26, 26, 255))

# Right leg (extended forward)
bd.polygon([
    (head_x+10, head_y+300),
    (head_x+200, head_y+320),
    (head_x+220, head_y+350),
    (head_x+30, head_y+330)
], fill=(42, 42, 42, 255))

# Hands
bd.ellipse((head_x-230, head_y-60, head_x-190, head_y-20), fill=(212, 165, 116, 255))
bd.ellipse((head_x+220, head_y-10, head_x+260, head_y+30), fill=(212, 165, 116, 255))

# Feet
bd.ellipse((head_x-160, head_y+435, head_x-120, head_y+465), fill=(42, 42, 42, 255))
bd.ellipse((head_x+190, head_y+340, head_x+240, head_y+370), fill=(42, 42, 42, 255))

# Composite body onto background
img = Image.alpha_composite(img.convert('RGBA'), body)
img = img.convert('RGB')

out_path = os.path.join('public', 'hero-yoga-pose.png')
img.save(out_path, 'PNG')
print('saved', out_path)
