import { motion } from 'framer-motion';

const services = [
  {
    title: 'Desarrollo de Software',
    description: 'Aplicaciones web y móviles escalables con arquitecturas modernas.',
    icon: '💻',
    features: ['React/Next.js', 'Node.js', 'API REST/GraphQL', 'Arquitectura Cloud']
  },
  {
    title: 'Automatización',
    description: 'Optimización de flujos operativos mediante RPA y pipelines.',
    icon: '🤖',
    features: ['RPA & Bots', 'Workflows', 'Integraciones', 'Data Pipelines']
  },
  {
    title: 'Marketing Digital',
    description: 'Estrategias basadas en datos para máxima conversión B2B.',
    icon: '📈',
    features: ['SEO Técnico', 'Analytics', 'Funnel Optimization', 'Growth Hacking']
  },
  {
    title: 'Análisis Financiero',
    description: 'Dashboards y modelado predictivo para toma de decisiones.',
    icon: '💰',
    features: ['Power BI', 'Python Analysis', 'Modelado', 'KPI Tracking']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Servicios Especializados</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Soluciones tecnológicas de alto nivel diseñadas para acelerar el crecimiento de tu empresa.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.2, ease: 'easeOut' }}
              className="bg-zinc-900/80 border border-white/10 p-6 rounded-xl hover:border-blue-500/40 transition-all duration-150 group"
            >
              <div className="text-3xl mb-4 p-3 bg-zinc-800/50 w-fit rounded-lg group-hover:scale-110 transition-transform duration-150">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 text-sm border-t border-zinc-800 pt-4">
                {service.features.map(f => (
                  <li key={f} className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
