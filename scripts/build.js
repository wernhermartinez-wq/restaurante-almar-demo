const fs = require('fs');
const path = require('path');

require('./check-build');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const publicFiles = ['index.html', 'styles.css', 'content.js', 'app.js'];

if (!output.startsWith(root + path.sep)) {
  throw new Error('La carpeta de salida debe permanecer dentro del proyecto.');
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of publicFiles) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}

fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Build estático generado en dist/.');
