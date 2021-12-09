const letters = ['a', 'b', 'c', 'd'];
const newArray = letters.map(item => item + '**')

/* const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
} */
console.log('Original', letters)
console.log('Array Nuevo', newArray)


const objetos = [
    {nombre: 'Kevin', estado: true},
    {nombre: 'Juan', estado: false},
    {nombre: 'Luis', estado: true}
]
const nuevosObjetos = objetos.map(item => {
    if(item.estado === true){
        return item.nombre
    }
})

console.log('Nuevo Objeto',nuevosObjetos)