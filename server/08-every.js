/* Se busca validar que todos los elementos del array sean menores de 40 */
const numbers = [1,30,39,29,10,13];
let rta = true;
/* Con el for nos preguntamos si hay algún elemento mayor a 40. Si lo hay, retorna un false */
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        rta = false
    }
}
console.log('rta con for', rta);

/* Con every corroboramos que cada elemento del array es menor de 40 */
const rta2 = numbers.every(item => item <= 40);
console.log('rta2', rta2);

/* Desafío */
const team = [
    {name: "Nicolas",age: 12,},
    {name: "Andrea",age: 8,},
    {name: "Zulema",age: 2,},
    {name: "Santiago",age: 16,},
];

const solucion = team.every(member => member.age <= 15)
console.log(solucion ? 'Todos son menores de 15' : 'Un jugador o más es mayor de 15');
