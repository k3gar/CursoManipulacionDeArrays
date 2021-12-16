const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

const rta = elements.join('--')
console.log('rta', rta);

/* SPLIT */
const tittle = 'Curso de Manipulación de Arrays';

console.log(tittle.split(' ').join('-').toLowerCase())