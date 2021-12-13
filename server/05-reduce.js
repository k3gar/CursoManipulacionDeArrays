const totals = [1,2,3,4];
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum)

const rta = totals.reduce((sum, element) => sum + element, 5)
console.log('rta',rta)


/* const totals = [1,2,3,4]

const suma = totals.reduce((acumulador, item, indice) => {
    console.log(acumulador, item, indice)
    return acumulador + item
}, 0)

console.log('suma total:',suma) */