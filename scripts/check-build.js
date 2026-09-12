const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = path.resolve(__dirname, '..');
const required = ['index.html', 'styles.css', 'content.js', 'app.js', 'assets/almar-hero.webp', 'assets/almar-table.webp', 'assets/almar-dessert.webp'];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Falta el archivo requerido: ${file}`);
}
for (const file of ['content.js', 'app.js', 'server.js']) {
  new vm.Script(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file });
}
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const id of ['inicio', 'propuesta', 'carta', 'reservar']) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Falta la sección #${id}`);
}
console.log('Validación completada: estructura, recursos y JavaScript correctos.');
