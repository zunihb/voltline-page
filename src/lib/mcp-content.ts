import type { McpLang } from './mcp';

export interface GuideSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
}

export interface Guide {
  slug: string;
  alternateSlug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: GuideSection[];
}

export const guides: Record<McpLang, Guide[]> = {
  es: [
    {
      slug: 'autenticacion', alternateSlug: 'authentication', eyebrow: 'OAuth 2.1',
      title: 'Conecta tu cuenta sin compartir credenciales',
      description: 'Voltline usa el mismo inicio de sesión de la plataforma. El cliente MCP nunca recibe tu contraseña.',
      sections: [
        { title: 'Cómo funciona', bullets: ['Agrega https://mcp.voltline.cl/mcp en tu cliente.', 'Inicia sesión en Voltline y revisa la empresa, el cliente y las categorías solicitadas.', 'Autoriza sólo lo necesario. Puedes revocar la conexión desde Voltline cuando quieras.'] },
        { title: 'Piloto gradual', paragraphs: ['Durante el piloto, un administrador de Voltline activa cada cliente y empresa. Una autorización correcta puede quedar “en revisión” hasta que termine esa activación.'] },
        { title: 'Permisos', paragraphs: ['Los permisos efectivos cruzan tu membresía vigente, tu rol, la empresa elegida, las categorías aprobadas y el estado del cliente. Un token por sí solo no concede acceso.'] },
        { title: 'Nunca compartas', bullets: ['Contraseñas o códigos de recuperación.', 'Tokens OAuth en chats, correos o tickets.', 'Enlaces firmados para subir archivos.'] },
      ],
    },
    {
      slug: 'seguridad', alternateSlug: 'security', eyebrow: 'Seguridad por diseño',
      title: 'Acceso mínimo y acciones confirmadas',
      description: 'Las lecturas y escrituras se separan. Las operaciones sensibles se confirman fuera de la conversación.',
      sections: [
        { title: 'Controles principales', bullets: ['OAuth con permisos por empresa y categoría.', 'Confirmación de un solo uso para publicar, archivar, restaurar o cambiar accesos.', 'Archivos mediante una página directa de Voltline, sin entregar el contenido al modelo.', 'Límites de tasa, validación de origen y aislamiento entre empresas.'] },
        { title: 'Qué se registra', paragraphs: ['Voltline conserva el request ID, usuario, cliente OAuth, empresa, herramienta, resultado, duración y un hash de argumentos para soporte y auditoría.'] },
        { title: 'Qué no se registra', bullets: ['El prompt completo.', 'Contraseñas o tokens.', 'El archivo subido o su enlace firmado.'] },
        { title: 'Respuesta ante incidentes', paragraphs: ['Revoca la conexión desde Voltline y entrega el request ID a soporte. No copies secretos ni archivos en el ticket.'] },
      ],
    },
    {
      slug: 'solucion-de-problemas', alternateSlug: 'troubleshooting', eyebrow: 'Ayuda rápida',
      title: 'Resuelve una conexión en pocos pasos',
      description: 'Cada error entrega una causa estable, una recuperación clara y un request ID.',
      sections: [
        { title: 'No aparece Voltline', bullets: ['Confirma que la URL termine en /mcp.', 'Revisa que el cliente admita Streamable HTTP y OAuth.', 'En ChatGPT, habilita primero el modo desarrollador si estás probando una conexión privada.'] },
        { title: 'La conexión está en revisión', paragraphs: ['Es el comportamiento esperado del piloto. El administrador debe activar el cliente y tu empresa antes de exponer herramientas.'] },
        { title: 'Falta permiso', bullets: ['Confirma que elegiste la empresa correcta.', 'Solicita la categoría necesaria al administrador.', 'Reconecta si cambiaron tus permisos.'] },
        { title: 'Una escritura no avanza', paragraphs: ['Abre el enlace de confirmación, revisa el resumen y aprueba una sola vez. Si venció, solicita una confirmación nueva; no reutilices la anterior.'] },
        { title: 'Soporte', paragraphs: ['Envía el request ID y la hora aproximada a contacto@voltline.cl. Eso basta para investigar sin exponer datos sensibles.'] },
      ],
    },
    {
      slug: 'privacidad', alternateSlug: 'privacy', eyebrow: 'Privacidad',
      title: 'Tus datos siguen dentro de los límites de Voltline',
      description: 'El MCP aplica las mismas reglas de empresa, rol y auditoría que la plataforma y la API.',
      sections: [
        { title: 'Uso de datos', paragraphs: ['Voltline procesa sólo los datos necesarios para ejecutar la herramienta solicitada y devolver un resultado estructurado.'] },
        { title: 'Archivos', paragraphs: ['Las cargas sensibles se realizan directamente en Voltline mediante sesiones breves y de un solo uso. El modelo recibe un identificador, no el archivo.'] },
        { title: 'Control del usuario', bullets: ['Revisa los permisos antes de autorizar.', 'Revoca conexiones activas desde tu cuenta.', 'Solicita soporte usando sólo el request ID.'] },
        { title: 'Política completa', paragraphs: ['Consulta la Política de privacidad de Voltline para conocer finalidades, conservación y derechos aplicables.'] },
      ],
    },
    {
      slug: 'soporte', alternateSlug: 'support', eyebrow: 'Soporte humano',
      title: 'Te ayudamos a poner el piloto en marcha',
      description: 'Cuéntanos qué cliente usarás, qué empresa participará y qué flujo quieres probar primero.',
      sections: [
        { title: 'Para activar el piloto', bullets: ['Nombre de la empresa.', 'Cliente MCP: ChatGPT, Codex, Claude u otro.', 'Categorías necesarias: procedimientos, faenas, normas, informes o administración.', 'Responsable interno del piloto.'] },
        { title: 'Para reportar un problema', bullets: ['Request ID.', 'Hora aproximada.', 'Nombre de la herramienta.', 'Resultado esperado, sin adjuntar tokens ni archivos sensibles.'] },
        { title: 'Contacto', paragraphs: ['Escríbenos a contacto@voltline.cl. Responderemos con los próximos pasos y el alcance inicial recomendado.'] },
      ],
    },
  ],
  en: [
    {
      slug: 'authentication', alternateSlug: 'autenticacion', eyebrow: 'OAuth 2.1',
      title: 'Connect your account without sharing credentials',
      description: 'Voltline uses the platform’s existing sign-in. The MCP client never receives your password.',
      sections: [
        { title: 'How it works', bullets: ['Add https://mcp.voltline.cl/mcp to your client.', 'Sign in to Voltline and review the organization, client, and requested categories.', 'Authorize only what you need. You can revoke the connection from Voltline at any time.'] },
        { title: 'Gradual pilot', paragraphs: ['During the pilot, a Voltline administrator activates each client and organization. A valid authorization may remain under review until activation is complete.'] },
        { title: 'Effective access', paragraphs: ['Access combines active membership, role, selected organization, approved categories, and client status. A token alone does not grant access.'] },
        { title: 'Never share', bullets: ['Passwords or recovery codes.', 'OAuth tokens in chats, email, or tickets.', 'Signed file-upload links.'] },
      ],
    },
    {
      slug: 'security', alternateSlug: 'seguridad', eyebrow: 'Secure by design',
      title: 'Least privilege and confirmed actions',
      description: 'Read and write tools are separate. Sensitive operations are confirmed outside the conversation.',
      sections: [
        { title: 'Core controls', bullets: ['OAuth grants by organization and category.', 'One-time confirmations for publishing, archiving, restoring, or changing access.', 'Direct Voltline upload pages so the model never handles file contents.', 'Rate limits, origin validation, and tenant isolation.'] },
        { title: 'Recorded for audit', paragraphs: ['Voltline records the request ID, user, OAuth client, organization, tool, result, duration, and an argument hash.'] },
        { title: 'Never recorded', bullets: ['Full prompts.', 'Passwords or tokens.', 'Uploaded files or signed upload URLs.'] },
        { title: 'Incident response', paragraphs: ['Revoke the connection in Voltline and send the request ID to support. Do not copy secrets or files into the ticket.'] },
      ],
    },
    {
      slug: 'troubleshooting', alternateSlug: 'solucion-de-problemas', eyebrow: 'Quick help',
      title: 'Fix a connection in a few steps',
      description: 'Errors include a stable cause, a clear recovery action, and a request ID.',
      sections: [
        { title: 'Voltline is not listed', bullets: ['Make sure the URL ends in /mcp.', 'Confirm the client supports Streamable HTTP and OAuth.', 'In ChatGPT, enable developer mode before testing a private connection.'] },
        { title: 'The connection is under review', paragraphs: ['This is expected during the pilot. An administrator must activate the client and organization before tools are exposed.'] },
        { title: 'Permission missing', bullets: ['Check the selected organization.', 'Ask an administrator for the required category.', 'Reconnect after permissions change.'] },
        { title: 'A write cannot continue', paragraphs: ['Open the confirmation link, review the summary, and approve once. If it expired, request a new confirmation.'] },
        { title: 'Support', paragraphs: ['Send the request ID and approximate time to contacto@voltline.cl. That is enough to investigate without exposing sensitive data.'] },
      ],
    },
    {
      slug: 'privacy', alternateSlug: 'privacidad', eyebrow: 'Privacy',
      title: 'Your data stays within Voltline boundaries',
      description: 'The MCP applies the same organization, role, and audit rules as the platform and API.',
      sections: [
        { title: 'Data use', paragraphs: ['Voltline processes only the data needed to execute the requested tool and return a structured result.'] },
        { title: 'Files', paragraphs: ['Sensitive uploads use short-lived, one-time Voltline sessions. The model receives an identifier, not the file.'] },
        { title: 'Your control', bullets: ['Review permissions before authorizing.', 'Revoke active connections from your account.', 'Use only the request ID when contacting support.'] },
        { title: 'Full policy', paragraphs: ['See the Voltline Privacy Policy for purposes, retention, and applicable rights.'] },
      ],
    },
    {
      slug: 'support', alternateSlug: 'soporte', eyebrow: 'Human support',
      title: 'We will help you start the pilot',
      description: 'Tell us which client, organization, and first workflow you want to test.',
      sections: [
        { title: 'Pilot activation', bullets: ['Organization name.', 'MCP client: ChatGPT, Codex, Claude, or another client.', 'Required categories: procedures, field work, standards, reports, or administration.', 'Internal pilot owner.'] },
        { title: 'Problem reports', bullets: ['Request ID.', 'Approximate time.', 'Tool name.', 'Expected result, without tokens or sensitive files.'] },
        { title: 'Contact', paragraphs: ['Email contacto@voltline.cl. We will reply with next steps and a recommended initial scope.'] },
      ],
    },
  ],
};
