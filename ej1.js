const calificaciones = [7, 10, 8, 10, 9]
let sumacalificaciones = 0

for (let index = 0; index < calificaciones.length; index++) {
     sumacalificaciones += calificaciones[index];
}
const promedio = sumacalificaciones / calificaciones.length
console.log(promedio);
if (promedio >=8) {
    console.log ("beca")
} else { console.log ("no se arma")}
    
