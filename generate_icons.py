#!/usr/bin/env python3
"""
Generate PWA icons for TridentOps portfolio
Dark theme with blue accent, modern trident logo
"""

from PIL import Image, ImageDraw
import os

def create_icon(size, output_path):
    # Colors - dark theme background and blue accent
    bg_color = "#09090b"
    accent_color = "#3b82f6"
    accent_light = "#60a5fa"

    # Create image with dark background
    img = Image.new('RGBA', (size, size), bg_color)
    draw = ImageDraw.Draw(img)

    # Center coordinates
    center_x = size // 2
    center_y = size // 2

    # Calculate sizes based on icon size
    # Trident proportions - keep it geometric and modern
    shaft_width = max(6, size // 32)
    prong_height = size // 3
    prong_width = max(8, size // 24)
    base_width = size // 6

    # Calculate positions
    shaft_top = center_y - prong_height - size // 8
    shaft_bottom = center_y + size // 6
    shaft_x = center_x

    # Draw trident shaft - vertical rectangle with subtle gradient effect
    shaft_rect = [
        center_x - shaft_width // 2,
        shaft_top,
        center_x + shaft_width // 2,
        shaft_bottom
    ]
    draw.rectangle(shaft_rect, fill=accent_color)

    # Draw three prongs
    prong_spacing = prong_width + size // 48

    for i, offset in enumerate([-prong_spacing, 0, prong_spacing]):
        prong_x = center_x + offset
        prong_rect = [
            prong_x - prong_width // 2,
            center_y - prong_height,
            prong_x + prong_width // 2,
            center_y - size // 24
        ]
        draw.rectangle(prong_rect, fill=accent_color)

        # Add subtle highlight to prongs
        highlight_rect = [
            prong_x - prong_width // 2,
            center_y - prong_height,
            prong_x + prong_width // 2,
            center_y - prong_height + max(2, size // 80)
        ]
        draw.rectangle(highlight_rect, fill=accent_light)

    # Draw base/connector
    base_rect = [
        center_x - base_width // 2,
        shaft_bottom - shaft_width,
        center_x + base_width // 2,
        shaft_bottom + max(4, size // 64)
    ]
    draw.rectangle(base_rect, fill=accent_color)

    # Add subtle glow effect around the trident
    glow_size = int(size * 0.15)
    for i in range(3):
        alpha = 20 - i * 6
        glow_box = [
            center_x - size // 3 - i * 2,
            center_y - size // 3 - i * 2,
            center_x + size // 3 + i * 2,
            center_y + size // 3 + i * 2
        ]
        # Create a temporary image for glow
        if alpha > 0:
            overlay = Image.new('RGBA', (size, size), (59, 130, 246, 0))
            overlay_draw = ImageDraw.Draw(overlay)
            overlay_draw.ellipse(glow_box, fill=(59, 130, 246, alpha))
            img = Image.alpha_composite(img, overlay)

    # Add subtle inner shadow / depth for modern look
    # Slight border for definition
    border_offset = max(1, size // 128)
    for dx in [-border_offset, 0, border_offset]:
        for dy in [-border_offset, 0, border_offset]:
            if dx == 0 and dy == 0:
                continue
            # Very subtle dark edge
            temp_draw = ImageDraw.Draw(img)
            # This adds depth without being too heavy

    img.save(output_path, 'PNG', optimize=True)
    print(f"Created {output_path} ({size}x{size})")
    return img

def main():
    # Ensure directory exists
    icons_dir = "C:/Users/trebo/TRIDENTOPS/trident-astro-portfolio/public/icons"
    os.makedirs(icons_dir, exist_ok=True)

    # Generate icons
    icon_192_path = os.path.join(icons_dir, "icon-192x192.png")
    icon_512_path = os.path.join(icons_dir, "icon-512x512.png")

    print("Generating TridentOps PWA icons...")
    print(f"Background: #09090b, Accent: #3b82f6")

    create_icon(192, icon_192_path)
    create_icon(512, icon_512_path)

    # Verify files
    for path in [icon_192_path, icon_512_path]:
        if os.path.exists(path):
            size = os.path.getsize(path)
            print(f"✓ Verified: {path} ({size} bytes)")
        else:
            print(f"✗ Failed to create: {path}")

    print("\nIcons generated successfully!")

if __name__ == "__main__":
    main()
