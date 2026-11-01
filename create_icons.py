#!/usr/bin/env python3
"""Generate proper PWA icons with trident design for TridentOps."""
from PIL import Image, ImageDraw
import os
import sys

# Change to script directory
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# TridentOps brand colors
BG_COLOR = (9, 9, 11, 255)  # #09090b (rich dark)
ACCENT_COLOR = (59, 130, 246, 255)  # #3b82f6 (blue accent)

# Ensure icons directory exists
icons_dir = os.path.join('public', 'icons')
os.makedirs(icons_dir, exist_ok=True)

def create_trident_icon(size):
    """Create a minimalist trident icon following design principles."""
    # Create image with rich dark background
    img = Image.new('RGBA', (size, size), BG_COLOR)
    draw = ImageDraw.Draw(img)

    center_x = size // 2
    center_y = size // 2

    # Dimensions based on 4px/8px grid system for proper spacing
    shaft_width = max(2, round(size * 0.06))
    prong_length = round(size * 0.35)
    prong_width = max(2, round(size * 0.05))

    # Trident shaft - centered vertically
    shaft_top = round(size * 0.18)
    shaft_bottom = round(size * 0.72)
    shaft_left = center_x - shaft_width // 2
    shaft_right = center_x + shaft_width // 2

    # Draw shaft with blue accent
    draw.rectangle([shaft_left, shaft_top, shaft_right, shaft_bottom], fill=ACCENT_COLOR)

    # Draw three prongs (centered and flanking)
    prong_offsets = [-round(size * 0.12), 0, round(size * 0.12)]

    for offset in prong_offsets:
        prong_x = center_x + offset
        prong_left = prong_x - prong_width // 2
        prong_right = prong_x + prong_width // 2
        prong_top = shaft_top - prong_length
        prong_bottom = shaft_top

        draw.rectangle([prong_left, prong_top, prong_right, prong_bottom], fill=ACCENT_COLOR)

    return img

print("Generating PWA icons for TridentOps...")

# Generate 192x192 icon
try:
    icon_192 = create_trident_icon(192)
    icon_192_path = os.path.join(icons_dir, 'icon-192x192.png')
    icon_192.save(icon_192_path, 'PNG', optimize=True)
    print(f"✓ Created: {icon_192_path} (192x192)")
except Exception as e:
    print(f"✗ Failed to create 192x192 icon: {e}")
    sys.exit(1)

# Generate 512x512 icon
try:
    icon_512 = create_trident_icon(512)
    icon_512_path = os.path.join(icons_dir, 'icon-512x512.png')
    icon_512.save(icon_512_path, 'PNG', optimize=True)
    print(f"✓ Created: {icon_512_path} (512x512)")
except Exception as e:
    print(f"✗ Failed to create 512x512 icon: {e}")
    sys.exit(1)

# Verify files exist
print("\nVerifying created icons...")
for path in [icon_192_path, icon_512_path]:
    if os.path.exists(path):
        size = os.path.getsize(path)
        print(f"  ✓ {os.path.basename(path)}: {size} bytes")
    else:
        print(f"  ✗ {os.path.basename(path)}: NOT FOUND")

print("\n✓ PWA icons generated successfully!")
print("  - Dark background (#09090b)")
print("  - Blue accent (#3b82f6)")
print("  - Minimalist trident design")