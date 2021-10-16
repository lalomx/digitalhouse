// Leer parametro de consola nodejs
const tar = require('./tareas')
let accion = process.argv[2];

let tareas = tar.leerArchivo()
switch (accion) {
  case 'listar':
    console.log('Listado de tareas');
    console.log('---------------------');

    // Ciclo para listar las tareas

    for (let i = 0; i < tareas.length; i++) {
      console.log(`${i + 1} - ${tareas[i].titulo} - ${tareas[i].estado}`);
    }
    

    break;

  case 'crear':
    const nuevaTarea = {
      titulo: process.argv[3],
      estado: 'pendiente'
    };

    guardarTarea(nuevaTarea);
    console.log('tarea creada');
    break;
  default:
    console.log('No entiendo qué me estás pidiendo');
    break;
}