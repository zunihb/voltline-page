import type { APIRoute } from 'astro';
import { mcpCatalog } from '../../lib/mcp';

export const GET: APIRoute = () => new Response(JSON.stringify({
  name: 'Voltline MCP',
  version: mcpCatalog.catalogVersion,
  description: 'Secure electrical operations for authorized Voltline organizations.',
  transport: { type: 'streamable-http', url: 'https://mcp.voltline.cl/mcp' },
  authentication: { type: 'oauth2', discovery: 'https://mcp.voltline.cl/.well-known/oauth-protected-resource' },
  documentation: 'https://voltline.cl/mcp/docs',
  privacy: 'https://voltline.cl/politica-de-privacidad',
  support: 'mailto:contacto@voltline.cl',
  pilot: 'invitation_only',
  tools: mcpCatalog.tools.map((tool) => ({
    name: tool.name,
    title: tool.title,
    description: tool.description,
    access: tool.access,
    category: tool.category,
    confirmationRequired: tool.confirmation.required,
    documentation: `https://voltline.cl/mcp/docs/${tool.name}`,
  })),
}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=300' } });
