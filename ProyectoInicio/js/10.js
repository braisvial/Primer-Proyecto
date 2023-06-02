//-----FETCH API-----

function obtenerEmpleados() {

    fetch("empleados.json")
        .then(resultado => {
            return resultado.json()
        })
        .then(datos => {
            const { empleados } = datos
            console.log(empleados)

            empleados.forEach(empleado => {
                console.log(empleado.nombre)
                console.log(empleado.puesto)
                console.log(empleado.id)
            });
        })

}

obtenerEmpleados()

async function obtenerEmpleados2(){
    const resultado = await fetch("empleados.json")
    const datos = await resultado.json()
    console.log(datos)
}

obtenerEmpleados2()