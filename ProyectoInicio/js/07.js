let reserva = {
    nombre: "Brais",
    apellido: "Vila",
    total: 1000,
    pagado: false
}

console.log(reserva.nombre)

reserva.informacion = function () {
    if (reserva.pagado) {
        console.log(`El cliente ${this.nombre} ${this.apellido} ha pagado la reserva de ${this.total}€`)
    }
    else {
        console.log(`El cliente ${this.nombre} ${this.apellido} no ha pagado la reserva de ${this.total}€`)
    }
}

reserva.informacion()

let fecha = {
    año: 2023,
    mes: "junio",
    dia: 1,
    faltantes: function () {
        let dias_restantes = 0;
        switch (this.mes) {
            case "enero":
                dias_restantes = 11 * 31
                break;
            case "febrero":
                dias_restantes = 10 * 28
                break;
            case "marzo":
                dias_restantes = 9 * 31
                break;
            case "abril":
                dias_restantes = 8 * 30
                break;
            case "mayo":
                dias_restantes = 7 * 31
                break;
            case "junio":
                dias_restantes = 6 * 30
                break;
            case "julio":
                dias_restantes = 5 * 31
                break;
            case "agosto":
                dias_restantes = 4 * 31
                break;
            case "septiembre":
                dias_restantes = 3 * 30
                break;
            case "octubre":
                dias_restantes = 2 * 31
                break;
            case "noviembre":
                dias_restantes = 1 * 30
                break;
            case "diciembre":
                dias_restantes = 0 * 31
                break;
        }
        dias_restantes = dias_restantes + (31 - this.dia)
        console.log(`Quedan ${dias_restantes} días para que acabe el año`)
    }
}

fecha.faltantes()