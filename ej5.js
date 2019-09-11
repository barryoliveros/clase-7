const alumnos= [{
    nombre: "joel",
    calificaciones : [7, 9]
}, {nombre: "santiago",
    calificaciones: [5, 6] },
    {nombre: "sara",
    calificaciones: [10, 9]
}]

for (let index=0 ; index< alumnos.length; index++ ) {
    if (alumnos[index].calificaciones){
        
       const prom = (alumnos[index].calificaciones[0]+ alumnos[index].calificaciones[1])/2
        if(prom <=6) {
            console.log(alumnos[index].nombre)
        }
    }
}


