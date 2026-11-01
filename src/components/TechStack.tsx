import { motion } from 'framer-motion';

const stacks = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Astra DB'] },
  { category: 'DevOps', techs: ['Docker', 'AWS', 'CI/CD', 'Git'] },
  { category: 'Analytics', techs: ['Python', 'Power BI', 'SQL', 'Excel'] },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Stack Tecnológico</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Herramientas y tecnologías de vanguardia seleccionadas para rendimiento y eficiencia.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.2, ease: 'easeOut' }}
              className="bg-zinc-900/80 border border-white/10 p-6 rounded-xl hover:border-blue-500/40 transition-all duration-150"
            >
              <h3 className="text-xl font-semibold mb-4 tracking-tight text-blue-400">{stack.category}</h3>
              <div className="space-y-2">
                {stack.techs.map(tech => (
                  <div key={tech} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
