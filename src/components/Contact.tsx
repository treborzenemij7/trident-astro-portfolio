import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactResponse {
  success: boolean;
  message?: string;
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ContactResponse = await res.json();
      setStatus(result.success ? 'success' : 'error');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contacto</h2>
          <p className="text-gray-400">¿Tienes un proyecto en mente? Hablemos.</p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 bg-zinc-900/80 border border-white/10 p-8 rounded-xl"
        >
          <input name="name" required placeholder="Tu nombre" className="w-full p-3 bg-zinc-950 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-150" />
          <input name="email" type="email" required placeholder="Email" className="w-full p-3 bg-zinc-950 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-150" />
          <select name="service" className="w-full p-3 bg-zinc-950 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-150">
            <option>Desarrollo de Software</option>
            <option>Automatización</option>
            <option>Marketing</option>
            <option>Análisis Financiero</option>
          </select>
          <textarea name="message" required placeholder="Mensaje" rows={4} className="w-full p-3 bg-zinc-950 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-150 resize-none"></textarea>
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-150"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: status !== 'idle' ? 1 : 0 }}
          >
            {status === 'success' && <p className="text-green-500 text-center text-sm">¡Mensaje enviado con éxito!</p>}
            {status === 'error' && <p className="text-red-500 text-center text-sm">Error al enviar, intenta de nuevo.</p>}
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
