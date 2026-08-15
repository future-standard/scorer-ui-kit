#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TEMPLATE_DIR = fileURLToPath(new URL('../template', import.meta.url));
const PLACEHOLDER = '__PROJECT_NAME__';
const TEXT_EXTENSIONS = new Set(['.json', '.ts', '.tsx', '.html', '.md']);
const RENAMES = new Map([
  ['_gitignore', '.gitignore'],
  ['_biome.json', 'biome.json'],
]);
const VALID_NAME = /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?$/;

const fail = (message) => {
  console.error(`create-fs-app: ${message}`);
  process.exit(1);
};

const projectName = process.argv[2];

if (!projectName) {
  fail('missing project name.\n\nUsage: npx create-fs-app <project-name>');
}
if (projectName.length > 214 || !VALID_NAME.test(projectName)) {
  fail(
    `invalid project name "${projectName}". Use lowercase letters, digits, and . _ - (must start and end with a letter or digit).`
  );
}
if (existsSync(projectName)) {
  fail(`directory "${projectName}" already exists. Choose another name or remove it first.`);
}
if (!existsSync(TEMPLATE_DIR)) {
  fail(
    'template files are missing from this installation. Re-pack the CLI (npm pack runs the prepack step that bundles the template).'
  );
}

const materialize = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    let entryPath = join(dir, entry.name);
    const newName = RENAMES.get(entry.name);
    if (newName) {
      const renamedPath = join(dir, newName);
      renameSync(entryPath, renamedPath);
      entryPath = renamedPath;
    }
    if (entry.isDirectory()) {
      materialize(entryPath);
    } else if (TEXT_EXTENSIONS.has(extname(entryPath))) {
      const content = readFileSync(entryPath, 'utf8');
      if (content.includes(PLACEHOLDER)) {
        writeFileSync(entryPath, content.replaceAll(PLACEHOLDER, projectName));
      }
    }
  }
};

console.info(`Scaffolding ${projectName} ...`);
cpSync(TEMPLATE_DIR, projectName, { recursive: true });
materialize(projectName);

console.info(`Installing dependencies in ./${projectName} ...`);
const install = spawnSync('npm', ['install'], {
  cwd: projectName,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
if (install.status !== 0) {
  console.error(
    `create-fs-app: npm install failed. The project files are in ./${projectName} — run "npm install" there manually.`
  );
  process.exit(install.status ?? 1);
}

console.info(`\nDone. Next steps:\n\n  cd ${projectName}\n  npm start\n`);
