const fs = require('fs');

function leerArchivo() {
  const archivo = fs.readFileSync('./tareas.json', 'utf8');
  return JSON.parse(archivo);
}

function guardarArchivo(tareas) {
  let tareasJSON = JSON.stringify(tareas); // [{"titulo"}]
  fs.writeFileSync('tareas.json', tareasJSON);
}

function guardarTarea(tarea) {
  let tareasActuales = leerArchivo();
  tareasActuales.push(tarea);
  guardarArchivo(tareasActuales);
}


module.exports = {
  guardarTarea,
  leerArchivo
};