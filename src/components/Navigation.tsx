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

  const toggleTheme = () => {
    // Theme toggle removed - using system preference only
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#stack', label: 'Stack' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-zinc-950/80 backdrop-blur border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold h-11 w-11 flex items-center">TRIDENT</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 hover:text-blue-500 h-11 flex items-center transition-colors duration-150 tracking-wide text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Hamburger Button - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 w-11 h-11 flex items-center justify-center"
              aria-label="Menú móvil"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              className="md:hidden fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold tracking-tight">Menú</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-lg hover:bg-zinc-900 w-11 h-11 flex items-center justify-center transition-colors duration-150"
                    aria-label="Cerrar menú"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.15 }}
                      className="block px-4 py-3 rounded-lg hover:bg-zinc-900 h-11 flex items-center transition-all duration-150 text-base font-medium"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
