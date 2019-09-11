const asistencias = [ true, true, false, true, true]
let sumaasistencias = 0
for (let index = 0; index < asistencias.length; index++) {
    if(asistencias[index])
    sumaasistencias += asistencias[index];
    console.log(sumaasistencias)
}
const porcentajedeasistencias = (sumaasistencias * 100)/ asistencias.length

    console.log (porcentajedeasistencias)
    
