import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desarrollo de Software',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Desarrollo de Software', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Error al enviar la comunicación. Por favor intenta de nuevo.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error de conexión con el servidor. Intenta nuevamente.');
    }
  };

  return (
    <section id="contact" className="hud-lamina min-h-screen flex items-center py-28 px-6 relative border-t border-[#F3F4F6]/10">
      <div className="lamina-bg-stage">
        <div className="lamina-hud-sublayer bg-ships-db" style={{ backgroundPosition: 'center bottom' }}></div>
        <div className="lamina-logo-base"></div>
        <div className="lamina-logo-spotlight"></div>
        <div className="lamina-vignette"></div>
      </div>

      <div className="lamina-content-wrap max-w-3xl mx-auto w-full text-center relative z-10">
        <span className="box-tag block mb-3">Canal Directo</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#F3F4F6] mb-6 tracking-tight">
          Contacto <span className="text-[#A3E635]">Institucional</span>
        </h2>
        <div className="unified-banner-box py-5 px-8 mb-10">
          <p className="box-body">
            Para consultas de alto nivel, desarrollo de arquitecturas a medida o consultoría cuantitativa, establezca comunicación directa con nuestro equipo de ingeniería.
          </p>
        </div>

        <div className="hud-card p-8 sm:p-12 text-left">
          <div className="card-highlight"></div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="https://wa.me/34634890458" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19]/90 border border-[#25D366]/30 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/15 transition-all text-sm">
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="https://instagram.com/tridente7fx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19]/90 border border-[#E4405F]/30 text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/15 transition-all text-sm">
              <i className="fa-brands fa-instagram text-lg"></i>
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://linkedin.com/in/robert-jimenez-ops" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19]/90 border border-[#0A66C2]/30 text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 transition-all text-sm">
              <i className="fa-brands fa-linkedin-in text-lg"></i>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://facebook.com/profile.php?id=61590627096526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19]/90 border border-[#1877F2]/30 text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/15 transition-all text-sm">
              <i className="fa-brands fa-facebook-f text-lg"></i>
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="mailto:treborzenemij7@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19]/90 border border-[#A3E635]/30 text-[#A3E635] hover:border-[#A3E635] hover:bg-[#A3E635]/15 transition-all text-sm">
              <i className="fa-solid fa-envelope text-lg"></i>
              <span className="hidden sm:inline">treborzenemij7@gmail.com</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block box-tag mb-2.5">Nombre / Organización</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nombre completo o entidad"
                  className="w-full rounded-xl bg-[#0B0F19]/90 border border-[#F3F4F6]/15 p-4 text-[#F3F4F6] focus:outline-none focus:border-[#A3E635] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block box-tag mb-2.5">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="treborzenemij7@gmail.com"
                  className="w-full rounded-xl bg-[#0B0F19]/90 border border-[#F3F4F6]/15 p-4 text-[#F3F4F6] focus:outline-none focus:border-[#A3E635] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block box-tag mb-2.5">Especialidad Requerida</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-xl bg-[#0B0F19]/90 border border-[#F3F4F6]/15 p-4 text-[#F3F4F6] focus:outline-none focus:border-[#A3E635] transition-all text-sm"
              >
                <option value="Desarrollo de Software">Desarrollo de Software Avanzado</option>
                <option value="Automatización">Automatización Logística y Administrativa</option>
                <option value="Finanzas Cuantitativas">Finanzas Cuantitativas & Modelado</option>
                <option value="Marketing de Precisión">Marketing de Precisión B2B</option>
              </select>
            </div>

            <div>
              <label className="block box-tag mb-2.5">Mensaje / Requerimiento</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describa los parámetros de su proyecto o consulta estratégica..."
                className="w-full rounded-xl bg-[#0B0F19]/90 border border-[#F3F4F6]/15 p-4 text-[#F3F4F6] focus:outline-none focus:border-[#A3E635] transition-all text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl btn-lime text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <i className="fa-solid fa-circle-notch animate-spin"></i>
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <span>Enviar Comunicación</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-6 p-4 rounded-xl bg-[#0B0F19]/95 border border-[#A3E635] text-[#A3E635] text-xs tracking-[0.14em] uppercase text-center font-semibold animate-fade-in">
              ● Comunicación recibida correctamente. Nos pondremos en contacto a la brevedad.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs tracking-[0.14em] uppercase text-center font-semibold">
              ● {errorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
