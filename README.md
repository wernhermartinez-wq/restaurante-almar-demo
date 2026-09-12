# Demo comercial · Restaurante Almar

Landing mobile-first para presentar un recorrido digital claro: descubrimiento → propuesta → carta → reserva/contacto.

## Ejecutar

```bash
npm run dev
```

Abre `http://localhost:4173`. No requiere instalar dependencias.

## Desplegar en Vercel

Vercel ejecuta `npm run build` y publica la carpeta estática `dist`. El servidor
de `server.js` se utiliza únicamente para desarrollo local.

## Adaptar a otro restaurante

Los datos variables están centralizados en `content.js`. Sustituye ese contenido y los tres archivos de `assets/`; la estructura y las interacciones pueden mantenerse.

## Datos y límites de la demo

- Nombre, ciudad, dirección, teléfono y clasificación como cocina mediterránea/europea se contrastaron en perfiles públicos de Restaurant Guru, Tripadvisor y el perfil de reserva de Kitking (consulta: 12 de septiembre de 2026).
- La reputación se expresa de forma genérica para evitar hardcodear una puntuación cambiante.
- No se ha localizado una carta oficial fiable. Los nombres de la carta son placeholders explícitos y no se atribuyen a Almar.
- Las imágenes fueron generadas específicamente como ambientación conceptual y no representan platos reales del restaurante.
- Llamar y Cómo llegar son acciones funcionales. WhatsApp queda marcado como demo hasta recibir un número oficial confirmado.
- Los eventos `click_reservar`, `click_carta`, `click_whatsapp`, `click_telefono` y `click_como_llegar` se envían a `window.dataLayer` solo si ya existe; no se añade infraestructura analítica.
