// Es necesario crear el archivo autos.json

const autos = require('./autos')

const concesionaria = {
  autos,
  buscarAuto: function (patente) {
    for (let i = 0; i < this.autos.length; i++) {
      if (patente === this.autos[i].patente) {
        return this.autos[i];
      }
    }
    return null;
  },
  venderAuto: function (patente) {
    const auto = this.buscarAuto(patente)
    if (!auto) {
      return
    }

    auto.vendido = true;
  },
  autosParaLaVenta: function () {
    return this.autos.filter(auto => !auto.vendido);
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter(auto => auto.km < 100);
  },
  listaDeVentas: function () {
    return this.autos.filter(a => a.vendido).map((auto) => auto.precio);
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce((acum, valor) => acum + valor, 0);
  },
  puedeComprar: function (auto, persona) {
    return persona.capacidadDePagoTotal > auto.precio &&
      persona.capacidadDePagoEnCuotas > auto.precio / auto.cuotas
  },
  autosQuePuedeComprar: function (persona) {
    return this.autos.filter(a => this.puedeComprar(a, persona))
  }
};
