#!/usr/bin/env python3
"""Generate PNG from SVG using cairosvg or basic PIL conversion."""
import os
import sys

# Try different approaches
try:
    from PIL import Image
    import xml.etree.ElementTree as ET

    def svg_to_png(svg_path, png_path, size):
        """Convert SVG to PNG using PIL (basic)."""
        # Read SVG
        with open(svg_path, 'r') as f:
            svg_content = f.read()

        # Create blank image
        img = Image.new('RGBA', (size, size), '#09090b')
        # For now, just save it - SVG conversion requires cairosvg

        # Try to parse simple SVG rectangles
        try:
            # Simple parser for rect elements
            import re
            rect_pattern = r'<rect[^>]*fill="([^"]+)"[^>]*x="([^"]+)"[^>]*y="([^"]+)"[^>]*width="([^"]+)"[^>]*height="([^"]+)"'
            matches = re.findall(rect_pattern, svg_content)

            from PIL import ImageDraw
            draw = ImageDraw.Draw(img)

            for fill, x, y, w, h in matches:
                if fill == '#09090b':
                    continue
                draw.rectangle([int(x), int(y), int(x)+int(w), int(y)+int(h)], fill=tuple(int(fill[i:i+2], 16) for i in [1, 3, 5]))

            img.save(png_path, 'PNG', optimize=True)
            return True
        except Exception as e:
            print(f"Error processing {svg_path}: {e}")
            return False

    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)

    # Generate PNGs from SVGs
    for size in [192, 512]:
        svg_path = f'public/icons/icon-{size}x{size}.svg'
        png_path = f'public/icons/icon-{size}x{size}.png'
        if os.path.exists(svg_path):
            if svg_to_png(svg_path, png_path, size):
                print(f"✓ Created {png_path}")
            else:
                print(f"✗ Failed to create {png_path}")

except ImportError as e:
    print(f"Missing dependency: {e}")
    sys.exit(1)
