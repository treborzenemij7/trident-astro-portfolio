# Despliegue de TridentOps Portfolio

Este proyecto está construido con Astro, React y Tailwind CSS, y utiliza DataStax Astra DB para el almacenamiento de contactos.

## Requisitos Previos

Para desplegar este proyecto, asegúrate de tener:

1. Una cuenta de [DataStax Astra DB](https://astra.datastax.com/).
2. Una base de datos creada en Astra DB.
3. El Token de Aplicación y el Endpoint REST de tu base de datos.

## Variables de Entorno para Producción (Vercel / Netlify)

Debes configurar las siguientes variables en el panel de control de tu proveedor de hosting:

| Variable | Descripción |
| :--- | :--- |
| `PUBLIC_ASTRA_DB_APPLICATION_TOKEN` | Tu Token de Aplicación de Astra DB |
| `PUBLIC_ASTRA_DB_REST_URL` | El Endpoint REST de tu base de datos |

*Nota: Al usar el prefijo `PUBLIC_`, Astro las inyecta automáticamente en el build del cliente.*

## Pasos para el Despliegue

### En Vercel
1. Conecta tu repositorio de GitHub a Vercel.
2. En la configuración del proyecto, añade las variables de entorno listadas arriba.
3. Haz clic en **Deploy**. Astro detectará automáticamente el entorno y configurará el build.

### En Netlify
1. Conecta tu repositorio a Netlify.
2. En **Site configuration > Environment variables**, añade las variables de entorno.
3. Haz clic en **Deploy site**.

## Configuración Técnica
El proyecto utiliza `@datastax/astra-db-ts` para la conexión. El formulario de contacto interactúa directamente con la API de Astra mediante el cliente configurado en `src/lib/astra.ts`.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
