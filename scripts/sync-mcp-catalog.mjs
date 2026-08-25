import { access, copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const candidates = [
  resolve(root, 'data/mcp-catalog.remote.generated.json'),
];
const target = resolve(root, 'data/mcp-catalog.json');

let source;
for (const candidate of candidates) {
  try {
    await access(candidate);
    source = candidate;
    break;
  } catch {
    // Try the next supported platform checkout.
  }
}

if (!source) {
  throw new Error('No se encontró el catálogo remoto generado de Voltline.');
}

const catalog = JSON.parse(await readFile(source, 'utf8'));
const excluded = new Set(['evidence_get_link', 'files_get_norm_pdf', 'files_get_procedure_pdf']);
const names = new Set(catalog.tools?.map((tool) => tool.name) ?? []);
if (catalog.tools?.length !== 56 || catalog.counts?.total !== 56 || catalog.counts?.read !== 14 || catalog.counts?.write !== 42) {
  throw new Error('El catálogo MCP debe contener 56 herramientas: 14 de lectura y 42 de escritura.');
}
if ([...excluded].some((name) => names.has(name))) {
  throw new Error('El catálogo MCP no debe exponer herramientas de enlaces firmados.');
}

await mkdir(dirname(target), { recursive: true });
await copyFile(source, target);
console.log(`Catálogo MCP sincronizado: ${source} -> ${target}`);
