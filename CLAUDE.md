## 4. Motion Graphics & Micro-interactions (Santa IA Library)
When the user requests to "aplica un motion", "añade movimiento", or enhance interactivity, you MUST autonomously select the most appropriate motion technique from the following 16 principles based on the UI context. Do not ask for permission; choose the best fit and implement it using Framer Motion or optimized CSS.

**Core Rules for Motion:**
- One distinct movement per animation. Avoid generic "make it look nice".
- Define the start, middle, and end states clearly in your code logic.
- Always use the user's brand colors, typography, and data.
- Respect `prefers-reduced-motion` for accessibility.

**The 16 Motion Techniques (Select based on context):**
1. **Morph**: A shape seamlessly transforming into another (e.g., CTA button expanding into a contact form).
2. **Stagger**: Cascading entrance with slight delays between items (e.g., service cards or portfolio grid items appearing sequentially).
3. **Spring**: Bouncy, weighty physics for arrivals (e.g., notification toasts, modal pop-ups).
4. **Easing**: Fast start, smooth stop (ease-out). Never use linear movement for spatial transitions.
5. **Crossfade**: Smooth opacity transition between states (e.g., tab switching, rotating testimonials).
6. **Shared Element**: An element visually traveling between two views (e.g., portfolio thumbnail expanding into a full case study).
7. **Magnification**: Proximity-based scaling (e.g., dock-style icon menus or client logo rows).
8. **Blur**: Dynamic focus shifts, blurring background elements to highlight the active item (e.g., pricing table focus).
9. **Mask**: Text or shapes acting as a window for color/image reveals (e.g., hero headline text fill animation).
10. **Variable Font**: Animating font weight/width axes for dynamic typography (e.g., hero title emphasis).
11. **Layout Animation**: Smooth repositioning of elements when the layout changes (e.g., filtering a portfolio grid).
12. **Clip Path**: Elements revealing through an expanding shape (e.g., image reveals).
13. **Path Morph**: Data visualization transitions (e.g., bar charts transforming into line graphs).
14. **Stroke Draw**: SVG lines drawing themselves with a traveling light point (e.g., process diagrams, workflow automations).
15. **Perspective**: 3D depth rotation for layered elements (e.g., showcasing multiple app screens).
16. **Particles**: Dispersed points converging to form a shape (e.g., logo reveals, loading states).

**Execution Rule:** Default to `framer-motion` for complex sequences (stagger, spring, layout) and native CSS transitions (`transition-all duration-200 ease-out`) for simple hovers.