import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Simulación de datos, en producción se obtendrían mediante /api/portfolio
    const mockProjects = [
      {
        id: '1',
        title: 'Plataforma de Automatización Financiera',
        description: 'Sistema completo de automatización para análisis y reporting financiero.',
        category: 'Automatización',
        tags: ['Python', 'Node.js', 'Astra DB'],
      },
      {
        id: '2',
        title: 'E-commerce B2B',
        description: 'Desarrollo de plataforma e-commerce con integración de pagos y CRM.',
        category: 'Desarrollo Software',
        tags: ['React', 'Next.js', 'PostgreSQL'],
      },
    ];
    setProjects(mockProjects);
  }, []);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Portfolio Destacado</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Proyectos recientes que demuestran arquitectura robusta y entrega de valor.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.2, ease: 'easeOut' }}
              className="bg-zinc-900/80 border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-150 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 font-medium">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
