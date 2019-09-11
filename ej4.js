const alumnos= [{
    nombre: "joel",
    presente : true
}, {nombre: "santiago",
    presente: false
}]
for (let index=0 ; index< alumnos.length; index++ ) {
    if (!alumnos[index].presente){
        console.log (alumnos[index].nombre)
    }}