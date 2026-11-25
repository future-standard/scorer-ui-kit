import { cpSync, rmSync } from 'node:fs';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const sourceDir = fileURLToPath(new URL('../../fs-app-template', import.meta.url));
const targetDir = `${packageRoot}template`;

const EXCLUDED = new Set(['node_modules', 'package-lock.json', 'build']);

rmSync(targetDir, { recursive: true, force: true });
cpSync(sourceDir, targetDir, {
  recursive: true,
  filter: (src) => !EXCLUDED.has(basename(src)),
});

console.info(`Copied fs-app-template into ${targetDir}`);
