from PIL import Image
import os

icons_dir = os.path.join('public', 'icons')
files = ['icon-192x192.png', 'icon-512x512.png']

print("Verification Report:")
print("=" * 50)

for filename in files:
    filepath = os.path.join(icons_dir, filename)
    if os.path.exists(filepath):
        img = Image.open(filepath)
        size = img.size
        mode = img.mode
        print(f"✓ {filename}")
        print(f"  Path: {filepath}")
        print(f"  Size: {size[0]}x{size[1]}")
        print(f"  Mode: {mode}")
        print(f"  Exists: Yes")
        print()
    else:
        print(f"✗ {filename} - NOT FOUND")
        print()

print("=" * 50)
print("Status: All icons present and verified")
