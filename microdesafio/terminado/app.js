let tareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        tareas.listarTareas();
        break;

    // Micro desafío 2c:
    case 'crear':
        console.log('=== Creando la tarea ===');
        const nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        tareas.guardaTarea(nuevaTarea);
        console.log('¡Tarea creada!');
        break;
   
    // Micro desafío 3:
    case 'filtrar':
        const estado = process.argv[3];
        const tareasFiltradas = tareas.filtrarPorEstado(estado);
        console.log(`=== Filtrando tareas con el estado: ${estado} ===`);
        tareas.listarTareas(tareasFiltradas);
        break;
    
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
