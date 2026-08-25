import type { APIRoute } from 'astro';
import { mcpCatalog } from '../../lib/mcp';

export const GET: APIRoute = () => {
  const tools = mcpCatalog.tools.map((tool) => `- ${tool.name}: ${tool.description} Docs: https://voltline.cl/mcp/docs/${tool.name}`).join('\n');
  const body = `# Voltline MCP\n\nRemote MCP endpoint: https://mcp.voltline.cl/mcp\nAuthentication: OAuth 2.1\nPilot: invitation only\nDocumentation: https://voltline.cl/mcp/docs\nSecurity: https://voltline.cl/mcp/seguridad\nPrivacy: https://voltline.cl/politica-de-privacidad\nSupport: contacto@voltline.cl\n\nRules:\n- Respect organization and role boundaries.\n- Never request or expose passwords, OAuth tokens, signed upload URLs, or file contents.\n- Sensitive writes require an out-of-band one-time confirmation.\n- Use the returned request ID for support and audit.\n\n## Tools\n${tools}\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=300' } });
};
