console.log('Curso de Node.js');

const os =  require('node:os');

console.log('Información del Sistema: ');

console.log('Nombre del Sistema OP: ',os.platform());
console.log('Versión',os.release());
console.log('Es x32 o x64?: ',os.arch());

/*File system */
const fs =  require('node:fs');
//const stats = fs.statSync('./archivo.txt');

/*acabo de instalar Express con el comando: npm i express 
en la terminal. */
  





