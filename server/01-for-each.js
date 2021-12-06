const letter = ['a', 'b', 'c'];
//Con un ciclo For
for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log('For', element);
}

//Con Métodos de un array
const animals = ['🐱', '🦄', '🐑', '🐶']
animals.forEach(item => console.log('forEach', item))