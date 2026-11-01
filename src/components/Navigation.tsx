import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#dashboard', label: 'Dashboard' },
    { href: '#about', label: 'Filosofía' },
    { href: '#services', label: 'Especialidades' },
    { href: '#terminal', label: 'Consola' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8 py-4 flex items-center justify-between">
      {/* Brand Identity */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 rounded-2xl bg-[#111827]/90 backdrop-blur-xl border border-[#F3F4F6]/15 text-[#A3E635] flex items-center justify-center shadow-lg hover:border-[#A3E635] transition-all"
          aria-label="Abrir navegación"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <a href="#hero" className="px-4 py-2.5 rounded-2xl bg-[#0B0F19]/85 backdrop-blur-2xl border border-[#F3F4F6]/10 flex items-center gap-3 hover:border-[#A3E635]/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div className="w-8 h-8 brand-logo-orb rounded-lg overflow-hidden">
            <img src="/tridentops-logo.jpg" alt="TRIDENTOPS Logo" class="w-full h-full object-cover" />
          </div>
          <span className="text-sm tracking-[0.2em] text-[#F3F4F6] font-semibold uppercase">TRIDENTOPS</span>
        </a>
      </div>

      {/* Center Quick Links */}
      <nav className="hidden xl:flex items-center gap-7 px-6 py-2.5 rounded-full bg-[#0B0F19]/80 backdrop-blur-xl border border-[#F3F4F6]/10 pointer-events-auto text-xs font-medium tracking-wider shadow-[0_0_30px_rgba(0,0,0,0.4)]">
        {navLinks.map((link, idx) => (
          <a key={link.href} href={link.href} className={`${idx === 0 ? 'text-[#A3E635]' : 'text-[#F3F4F6]/75'} hover:text-[#A3E635] transition-colors`}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Controls & CTA */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-lime text-[11px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transition-all">
          <span>Iniciar Proyecto</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40 pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-[#0B0F19]/95 backdrop-blur-2xl border-r border-white/10 z-50 p-6 pointer-events-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 brand-logo-orb rounded-xl overflow-hidden">
                      <img src="/tridentops-logo.jpg" alt="TRIDENTOPS" class="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-bold tracking-widest">TRIDENTOPS</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-[#A3E635]/15 border border-white/10 hover:border-[#A3E635]/40 text-sm font-medium tracking-wide transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Illumination · Wisdom · Peace</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
