#!/usr/bin/env python3
"""Generate proper PWA icons with trident design."""
from PIL import Image, ImageDraw
import os

# Change to script directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# TridentOps brand colors
BG_COLOR = '#09090b'  # Rich dark from CLAUDE.md
ACCENT_COLOR = '#3b82f6'  # Blue accent

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

    # Dimensions based on 4px/8px grid system
    shaft_width = max(2, int(size * 0.06))
    prong_length = int(size * 0.35)
    prong_width = max(2, int(size * 0.05))

    # Trident shaft
    shaft_top = int(size * 0.18)
    shaft_bottom = int(size * 0.72)
    shaft_left = center_x - shaft_width // 2
    shaft_right = center_x + shaft_width // 2

    # Draw shaft with subtle gradient
    draw.rectangle([shaft_left, shaft_top, shaft_right, shaft_bottom], fill=ACCENT_COLOR)

    # Draw three prongs (following minimalist design)
    prong_offsets = [-int(size * 0.12), 0, int(size * 0.12)]

    for offset in prong_offsets:
        prong_x = center_x + offset
        prong_left = prong_x - prong_width // 2
        prong_right = prong_x + prong_width // 2
        prong_top = shaft_top - prong_length
        prong_bottom = shaft_top

        draw.rectangle([prong_left, prong_top, prong_right, prong_bottom], fill=ACCENT_COLOR)

    # Add subtle border for definition
    border_width = max(1, int(size * 0.01))
    # Create a subtle outer glow
    for i in range(border_width):
        alpha = int(30 * (1 - i / border_width))
        if alpha > 0:
            draw.rectangle(
                [shaft_left - i, shaft_top - i, shaft_right + i, shaft_bottom + i],
                outline=ACCENT_COLOR,
                width=1
            )

    return img

# Generate 192x192 icon
print("Generating 192x192 icon...")
icon_192 = create_trident_icon(192)
icon_192_path = os.path.join(icons_dir, 'icon-192x192.png')
icon_192.save(icon_192_path, 'PNG', optimize=True)
print(f"✓ Saved: {icon_192_path}")

# Generate 512x512 icon
print("Generating 512x512 icon...")
icon_512 = create_trident_icon(512)
icon_512_path = os.path.join(icons_dir, 'icon-512x512.png')
icon_512.save(icon_512_path, 'PNG', optimize=True)
print(f"✓ Saved: {icon_512_path}")

print("\n✓ PWA icons generated successfully!")
print(f"  - {icon_192_path} (192x192)")
print(f"  - {icon_512_path} (512x512)")
