const calificaciones = [6, 8, 5, 10, 7]
let sumaexamenesreprobados = 0;
for (let index=0; index<calificaciones.length; index++) {
    if (calificaciones[index] <=6)
    sumaexamenesreprobados +=1 
}
console.log (sumaexamenesreprobados)