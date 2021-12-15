const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

const rta = pets.includes('dog');
//Includes solo recibe el elemento que queremos encontrar, no un Arrow Function
console.log('Includes', rta)