const fs = require('fs');

module.exports = {
  archivo: 'tareas.json',

  leerArchivo: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
  },

  // Micro desafío 1:
  listarTareas: function (arrayDeTareas) {
    if (arrayDeTareas === undefined) {
      arrayDeTareas = this.leerArchivo();
    }
    arrayDeTareas.forEach((tarea, indice) => {
      console.log((indice + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
    })
  },

  // Micro desafío 2a:
  escribirJson: function (arrayDeTareas) {
    let deArrayAJSON = JSON.stringify(arrayDeTareas, null, ' ');
    fs.writeFileSync(this.archivo, deArrayAJSON);
  },

  // Micro desafío 2b:
  guardaTarea: function (unaTarea) {
    let tareasActuales = this.leerArchivo();
    tareasActuales.push(unaTarea);
    this.escribirJson(tareasActuales);
  },

  // Micro desafío 3:
  filtrarPorEstado: function (estado) {
    let tareasActuales = this.leerArchivo();
    const tareasFiltradas = tareasActuales.filter(unaTarea => estado === unaTarea.estado);
    return tareasFiltradas
  }
}