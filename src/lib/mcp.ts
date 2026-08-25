import { readFileSync } from 'node:fs';

export type McpLang = 'es' | 'en';

export interface JsonSchema {
  type?: string;
  format?: string;
  description?: string;
  default?: unknown;
  enum?: unknown[];
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  required?: string[];
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema;
  additionalProperties?: boolean | JsonSchema;
  [key: string]: unknown;
}

export interface McpTool {
  name: string;
  legacyName?: string;
  title: string;
  description: string;
  category: string;
  access: 'read' | 'write';
  roles: string[];
  platformOnly: boolean;
  permissionGroup: string;
  confirmation: { required: boolean; action: string | null; mode: string };
  annotations: Record<string, boolean>;
  inputSchema: JsonSchema;
  outputSchema: JsonSchema;
  api: { method: string; path: string; remoteFlow: string | null };
  examples: { input: Record<string, unknown>; output: Record<string, unknown> };
  documentation: {
    purpose: string;
    whenToUse: string;
    whenNotToUse: string;
    requiredRoles: string[];
    scope: string;
    idempotency: string;
    errors: Array<{ code: string; recovery: string }>;
    records: string[];
    neverRecords: string[];
    apiEquivalent: string;
    catalogVersion: string;
  };
}

export interface McpCatalog {
  schemaVersion: string;
  catalogVersion: string;
  counts: { total: number; read: number; write: number; confirmed: number };
  server: Record<string, unknown>;
  tools: McpTool[];
}

export const mcpCatalog = JSON.parse(
  readFileSync(new URL('../../data/mcp-catalog.json', import.meta.url), 'utf8'),
) as McpCatalog;

export const categoryLabels: Record<McpLang, Record<string, string>> = {
  es: {
    audit: 'Auditoría', confirmations: 'Confirmaciones', faenas: 'Faenas', norms: 'Normas',
    organizations: 'Empresas', platform: 'Plataforma', procedures: 'Procedimientos', reports: 'Informes',
    sites: 'Instalaciones', users: 'Usuarios', uploads: 'Archivos', settings: 'Configuración',
    checklist: 'Checklist', evidence: 'Evidencias', files: 'Archivos', members: 'Miembros',
  },
  en: {
    audit: 'Audit', confirmations: 'Confirmations', faenas: 'Field work', norms: 'Standards',
    organizations: 'Organizations', platform: 'Platform', procedures: 'Procedures', reports: 'Reports',
    sites: 'Sites', users: 'Users', uploads: 'Files', settings: 'Settings',
    checklist: 'Checklist', evidence: 'Evidence', files: 'Files', members: 'Members',
  },
};

export const roleLabels: Record<McpLang, Record<string, string>> = {
  es: { member: 'Miembro', supervisor: 'Supervisor', org_admin: 'Administrador de empresa', platform_admin: 'Administrador de plataforma' },
  en: { member: 'Member', supervisor: 'Supervisor', org_admin: 'Organization admin', platform_admin: 'Platform admin' },
};

// The remote catalog is authored in Spanish, while the English site needs copy
// that reads like product documentation rather than a translated function name.
// Keep these short: they are used in cards, metadata, and the mobile view.
const englishToolDescriptions: Record<string, string> = {
  audit_list_events: 'Review administrative audit events by organization, actor, or request ID.',
  checklist_update_step: 'Update a live field-work step as pending, complete, or blocked, with notes.',
  evidence_archive: 'Archive field-work evidence while keeping its audit history.',
  evidence_attach_upload: 'Attach a validated PDF or image to a step in an open field job.',
  evidence_restore: 'Restore archived evidence while the field job is still open.',
  faenas_activate: 'Move a draft or paused field job into active checklist execution.',
  faenas_cancel: 'Cancel a field job through its audited state history.',
  faenas_close: 'Close a field job through its audited state history.',
  faenas_create: 'Create a field job from a published procedure and assign inspectors.',
  faenas_get: 'View a field job, its checklist, evidence, assignments, and audit timeline.',
  faenas_list: 'List field jobs and the published procedure version each one uses.',
  faenas_pause: 'Pause a field job through its audited state history.',
  faenas_resume: 'Resume a paused field job through its audited state history.',
  faenas_update: 'Update an open field job and replace its inspector list atomically.',
  files_attach_norm_pdf: 'Attach a validated private PDF to an active standard.',
  files_attach_procedure_pdf: 'Attach a local PDF to a draft procedure version.',
  files_prepare_upload: 'Create a short-lived session for a person to upload a file directly to Voltline.',
  files_remove_norm_pdf: 'Remove a standard PDF while keeping the structured standard intact.',
  files_remove_procedure_pdf: 'Remove a PDF from a draft procedure version.',
  members_invite: 'Invite a person to an organization without exposing credentials to the model.',
  members_list: 'List organization members, roles, profiles, and suspension status.',
  members_list_invitations: 'Review pending, accepted, expired, or revoked invitations.',
  members_revoke_invitation: 'Revoke a pending invitation while keeping its audit record.',
  members_update_access: 'Change a member role or suspend and restore their access.',
  norms_archive: 'Archive a standard reversibly and keep its audit trail.',
  norms_create: 'Create a global standard from validated local JSON content.',
  norms_get: 'Read a standard with its structured sections and content.',
  norms_grant_access: 'Grant an organization read-only access to a global standard.',
  norms_list: 'List the global library or the standards enabled for an organization.',
  norms_restore: 'Restore an archived standard while keeping its audit trail.',
  norms_revoke_access: 'Remove future access to a standard without deleting its content.',
  norms_update: 'Replace standard metadata and, when supplied, its validated sections.',
  organizations_archive: 'Archive an organization unless it still has open field jobs.',
  organizations_create: 'Create an organization and invite its first administrator.',
  organizations_get: 'Read organization details, settings, and archive status.',
  organizations_list: 'List isolated organizations and their operating settings.',
  organizations_restore: 'Restore an archived organization with its history intact.',
  organizations_update: 'Update an organization name or base language without changing history.',
  organizations_update_settings: 'Update an organization language, timezone, brand, or feature flags.',
  platform_invite_user: 'Invite or reuse a platform account without exposing the email link to the model.',
  platform_list_users: 'List global administrators and editors, including suspension status.',
  platform_update_user_access: 'Change a platform operator role or suspend and restore access.',
  procedures_archive: 'Archive a procedure without changing versions or historical field jobs.',
  procedures_assign: 'Enable a procedure for an organization and optionally pin a published version.',
  procedures_correct_draft: 'Replace the latest draft or create a derived version for review.',
  procedures_create_draft: 'Create a draft procedure from validated local JSON for human review.',
  procedures_get_version: 'Read one historical procedure version with its content hashes.',
  procedures_list: 'List master or organization procedures and their versions.',
  procedures_publish: 'Approve and lock a procedure version after human review.',
  procedures_restore: 'Restore an archived procedure without changing historical versions or jobs.',
  procedures_unassign: 'Disable a procedure for new field jobs without deleting history.',
  reports_get_faena: 'Get a frozen procedure, progress, blockers, evidence, and timeline for review.',
  sites_archive: 'Archive a site for new field jobs while preserving historical references.',
  sites_create: 'Create an operating site inside an organization.',
  sites_list: 'List active sites and, when requested, archived sites for an organization.',
  sites_update: 'Update the name or location of an active site.',
};

const englishToolTitles: Record<string, string> = {
  audit_list_events: 'Review audit events',
  checklist_update_step: 'Update checklist step',
  evidence_archive: 'Archive evidence',
  evidence_attach_upload: 'Attach evidence',
  evidence_restore: 'Restore evidence',
  faenas_activate: 'Activate field job',
  faenas_cancel: 'Cancel field job',
  faenas_close: 'Close field job',
  faenas_create: 'Create field job',
  faenas_get: 'View field job',
  faenas_list: 'List field jobs',
  faenas_pause: 'Pause field job',
  faenas_resume: 'Resume field job',
  faenas_update: 'Update field job',
  files_attach_norm_pdf: 'Attach standard PDF',
  files_attach_procedure_pdf: 'Attach procedure PDF',
  files_prepare_upload: 'Prepare file upload',
  files_remove_norm_pdf: 'Remove standard PDF',
  files_remove_procedure_pdf: 'Remove procedure PDF',
  members_invite: 'Invite organization member',
  members_list: 'List organization members',
  members_list_invitations: 'List invitations',
  members_revoke_invitation: 'Revoke invitation',
  members_update_access: 'Update member access',
  norms_archive: 'Archive standard',
  norms_create: 'Create standard',
  norms_get: 'View standard',
  norms_grant_access: 'Grant standard access',
  norms_list: 'List standards',
  norms_restore: 'Restore standard',
  norms_revoke_access: 'Revoke standard access',
  norms_update: 'Update standard',
  organizations_archive: 'Archive organization',
  organizations_create: 'Create organization',
  organizations_get: 'View organization',
  organizations_list: 'List organizations',
  organizations_restore: 'Restore organization',
  organizations_update: 'Update organization',
  organizations_update_settings: 'Update organization settings',
  platform_invite_user: 'Invite platform user',
  platform_list_users: 'List platform users',
  platform_update_user_access: 'Update platform access',
  procedures_archive: 'Archive procedure',
  procedures_assign: 'Assign procedure',
  procedures_correct_draft: 'Correct procedure draft',
  procedures_create_draft: 'Create procedure draft',
  procedures_get_version: 'View procedure version',
  procedures_list: 'List procedures',
  procedures_publish: 'Publish procedure',
  procedures_restore: 'Restore procedure',
  procedures_unassign: 'Unassign procedure',
  reports_get_faena: 'Review field-job report',
  sites_archive: 'Archive site',
  sites_create: 'Create site',
  sites_list: 'List sites',
  sites_update: 'Update site',
};

export function toolShortDescription(tool: McpTool, lang: McpLang) {
  if (lang === 'es') return tool.documentation.purpose;
  return englishToolDescriptions[tool.name] ?? tool.description;
}

export function toolWhenToUse(tool: McpTool, lang: McpLang) {
  if (lang === 'es') return tool.documentation.whenToUse;
  return `${toolShortDescription(tool, lang)} Use it only within the authorized organization.`;
}

export function toolWhenNotToUse(tool: McpTool, lang: McpLang) {
  if (lang === 'es') return tool.documentation.whenNotToUse;
  return 'Do not use it for another organization, a different action, or to bypass a confirmation.';
}

export function toolIdempotency(tool: McpTool, lang: McpLang) {
  if (lang === 'es') return tool.documentation.idempotency;
  return tool.access === 'read'
    ? 'Safe to repeat; it does not change Voltline data.'
    : 'Use the same client-scoped idempotency key when retrying a write.';
}

export function categoryLabel(category: string, lang: McpLang) {
  return categoryLabels[lang][category] ?? category.replaceAll('_', ' ');
}

export function roleLabel(role: string, lang: McpLang) {
  return roleLabels[lang][role] ?? role.replaceAll('_', ' ');
}

export function toolDisplayTitle(tool: McpTool, lang: McpLang) {
  if (lang === 'es') return tool.title;
  return englishToolTitles[tool.name] ?? tool.name
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function schemaType(schema: JsonSchema) {
  if (schema.enum) return schema.enum.map(String).join(' | ');
  if (schema.type === 'array') return `${schema.items?.type ?? 'item'}[]`;
  return schema.format ? `${schema.type ?? 'string'} (${schema.format})` : (schema.type ?? 'any');
}

export function formatJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}

export function docsBase(lang: McpLang) {
  return lang === 'es' ? '/mcp/docs' : '/en/mcp/docs';
}

export function mcpBase(lang: McpLang) {
  return lang === 'es' ? '/mcp' : '/en/mcp';
}
