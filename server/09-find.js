const numbers = [1,30,49,29,10,13];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break
    }
}
console.log('for', rta);

const rta2 = numbers.find(item => item === 3066)
console.log('find', rta2);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const busqueda = products.find(element => element.id === '🍔');
console.log(busqueda.name)
console.log(busqueda ? `Se encontró ${busqueda.name} ${busqueda.id}` : 'No encontré nada');

const busquedaIndex = products.findIndex(element => element.id === '🍔');
console.log('FindIndex', busquedaIndex);