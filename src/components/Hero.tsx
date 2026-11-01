import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Desarrollador Senior
            <span className="text-blue-500 block mt-2">Full-Stack</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformo ideas en soluciones digitales escalables. Experto en desarrollo, automatización y análisis financiero para impulsar tu negocio B2B.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              href="#contacto"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-150 shadow-lg shadow-blue-500/20 font-medium"
            >
              Hablemos de tu proyecto
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              href="#portfolio"
              className="px-8 py-3 border border-white/10 rounded-lg hover:bg-zinc-900 hover:border-white/20 transition-colors duration-150 font-medium"
            >
              Ver Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
