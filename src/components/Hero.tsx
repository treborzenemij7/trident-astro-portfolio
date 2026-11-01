import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="hud-lamina min-h-screen flex flex-col justify-between pt-28 pb-16 px-6 relative overflow-hidden">
      <div className="lamina-bg-stage">
        <div className="lamina-hud-sublayer bg-kylo-system"></div>
        <div className="lamina-logo-base"></div>
        <div className="lamina-logo-spotlight"></div>
        <div className="lamina-vignette"></div>
      </div>

      <div className="lamina-content-wrap max-w-6xl mx-auto w-full relative z-10 my-auto">
        {/* Top Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-[#0B0F19]/85 border border-[#A3E635]/35 backdrop-blur-md shadow-[0_0_15px_rgba(163,230,53,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-ping"></span>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#F3F4F6]">TRIDENTOPS · Ecosistema FULL STACK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#F3F4F6] mb-6 leading-[1.08] tracking-tight font-sans"
          >
            EVOLUCIONA AL FUTURO CON<br />
            <span className="text-[#A3E635] drop-shadow-[0_0_25px_rgba(163,230,53,0.3)]">ARQUITECTURA IA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="unified-banner-box max-w-2xl mx-auto mb-8 py-5 px-7"
          >
            <p className="box-body text-xs sm:text-sm tracking-wide font-medium">
              INGENIERÍA DE SOFTWARE, AUTOMATIZACIÓN DE LOGÍSTICA Y ADMINISTRACIÓN, MARKETING DE PRECISIÓN Y ANÁLISIS FINANCIEROS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#dashboard" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full btn-lime text-xs font-bold uppercase tracking-[0.18em] shadow-[0_0_25px_rgba(163,230,53,0.35)] hover:shadow-[0_0_40px_rgba(163,230,53,0.6)]">
              <span>Explorar Dashboard</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
            <a href="#services" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0B0F19]/80 border border-[#F3F4F6]/20 text-[#F3F4F6] hover:border-[#A3E635] hover:text-[#A3E635] transition-all text-xs font-semibold uppercase tracking-[0.18em]">
              <span>Explorar Especialidades</span>
            </a>
          </motion.div>
        </div>

        {/* Central 3D Orbital Sphere + Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-6">
          {/* Left Column: 2 Floating Feature Cards */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="hud-card p-6 hover:border-[#A3E635]/50 transition-all group">
              <div className="card-highlight"></div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-[#A3E635]/15 border border-[#A3E635]/40 flex items-center justify-center text-[#A3E635]">
                  <i className="fa-solid fa-layer-group text-sm"></i>
                </div>
                <a href="#services" className="w-7 h-7 rounded-full bg-[#F3F4F6]/5 border border-[#F3F4F6]/15 flex items-center justify-center text-[#F3F4F6]/70 hover:border-[#A3E635] hover:text-[#A3E635] transition-all">
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
              <h3 className="box-title text-base mb-1.5">Modelos Cuantitativos</h3>
              <p class="box-body text-xs">Acceso a motores algorítmicos y análisis de series temporales en una sola arquitectura.</p>
            </div>

            <div className="hud-card p-6 hover:border-[#A3E635]/50 transition-all group">
              <div className="card-highlight"></div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-[#A3E635]/15 border border-[#A3E635]/40 flex items-center justify-center text-[#A3E635]">
                  <i className="fa-solid fa-robot text-sm"></i>
                </div>
                <a href="#services" className="w-7 h-7 rounded-full bg-[#F3F4F6]/5 border border-[#F3F4F6]/15 flex items-center justify-center text-[#F3F4F6]/70 hover:border-[#A3E635] hover:text-[#A3E635] transition-all">
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
              <h3 className="box-title text-base mb-1.5">Automatización Autónoma</h3>
              <p class="box-body text-xs">Orquestación inteligente de flujos operativos y administrativos con cero fricción.</p>
            </div>
          </div>

          {/* Center Column: Golden Ratio Logo Emblem */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 my-8 lg:my-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#A3E635]/20 animate-spin" style={{ animationDuration: '26s' }}></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-[#A3E635]/30 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-8 rounded-full border border-[#F3F4F6]/10"></div>
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-[#0B0F19] border-2 border-[#A3E635] p-3 shadow-[0_0_50px_rgba(163,230,53,0.3)] flex items-center justify-center overflow-hidden z-10">
                <img src="/tridentops-logo.jpg" alt="TRIDENTOPS Core" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>

          {/* Right Column: 2 Floating Feature Cards */}
          <div className="lg:col-span-4 space-y-6 order-3">
            <div className="hud-card p-6 hover:border-[#A3E635]/50 transition-all group">
              <div className="card-highlight"></div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-[#A3E635]/15 border border-[#A3E635]/40 flex items-center justify-center text-[#A3E635]">
                  <i className="fa-solid fa-chart-simple text-sm"></i>
                </div>
                <a href="#dashboard" className="w-7 h-7 rounded-full bg-[#F3F4F6]/5 border border-[#F3F4F6]/15 flex items-center justify-center text-[#F3F4F6]/70 hover:border-[#A3E635] hover:text-[#A3E635] transition-all">
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
              <h3 className="box-title text-base mb-1.5">Analítica Predictiva</h3>
              <p class="box-body text-xs">Métricas accionables y control de riesgo en tiempo real desde datos complejos.</p>
            </div>

            <div className="hud-card p-6 hover:border-[#A3E635]/50 transition-all group">
              <div className="card-highlight"></div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-[#A3E635]/15 border border-[#A3E635]/40 flex items-center justify-center text-[#A3E635]">
                  <i className="fa-solid fa-puzzle-piece text-sm"></i>
                </div>
                <a href="#services" className="w-7 h-7 rounded-full bg-[#F3F4F6]/5 border border-[#F3F4F6]/15 flex items-center justify-center text-[#F3F4F6]/70 hover:border-[#A3E635] hover:text-[#A3E635] transition-all">
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
              <h3 className="box-title text-base mb-1.5">Integración de Sistemas</h3>
              <p class="box-body text-xs">Conexión directa con plataformas ERP, CRM y APIs de misión crítica.</p>
            </div>
          </div>
        </div>

        {/* Bottom Glass Metrics Bar */}
        <div className="hud-card max-w-4xl mx-auto px-8 py-5 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 brand-logo-orb rounded-xl overflow-hidden">
              <img src="/tridentops-logo.jpg" alt="TRIDENTOPS" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F3F4F6]">Arquitectura Institucional Verificada</div>
              <div className="text-[11px] text-[#F3F4F6]/60">Illumination · Wisdom · Peace · ∞</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="text-xl font-bold text-[#A3E635]">99.9%</div>
              <div className="text-[11px] text-[#F3F4F6]/65">Uptime Core</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#A3E635]">10K+</div>
              <div className="text-[11px] text-[#F3F4F6]/65">Flujos Activos</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#A3E635]">50+</div>
              <div className="text-[11px] text-[#F3F4F6]/65">Integraciones</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#A3E635]">24/7</div>
              <div className="text-[11px] text-[#F3F4F6]/65">Monitoreo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
