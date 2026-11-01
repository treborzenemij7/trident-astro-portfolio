import type { APIRoute } from 'astro';
import { astraDB } from '../../lib/astra';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return new Response(JSON.stringify({ success: false, message: 'Faltan campos requeridos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const success = await astraDB.insertContact({
      name,
      email,
      service,
      message,
    });

    if (success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'Error al guardar en la base de datos' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
