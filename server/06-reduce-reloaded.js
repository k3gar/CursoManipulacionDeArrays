/* const items = [1, 3, 2, 3];

const rta = items.reduce((objeto, item) => {
    if(!objeto[item]) {
        objeto[item] = 1;
    }else {
        objeto[item] = objeto[item] + 1;
    }
    return objeto;
}, {})
console.log(rta); */
//* Output
/* {
    1:1,
    3:2,
    2:1
} */
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "low",
    },
  ];

const rta2 = data.map(item => item.level)
.reduce((objeto, item) => {
    if(!objeto[item]) {
        objeto[item] = 1;
    }else {
        objeto[item] = objeto[item] + 1;
    }
    return objeto;
}, {})
console.log(rta2);

/* Desafío --- Entendiendo Reduce*/
/* const numbers = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9];

const rta3 = numbers.reduce((acumulador, elementos) => {
  console.log('------------------------------------------')
  console.log('acumulador',acumulador, 'elemento', elementos);
  if(!acumulador[elementos]) {
    acumulador[elementos] = 1;
  }else {
    acumulador[elementos] = acumulador[elementos] + 1;
    console.log('Elementos del acumulador',acumulador[elementos])
  }
  return acumulador;
} ,{}) */
//console.log(rta3);

/* Desafío */
const numbers = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9,9,9,9,9,9,9,9,9];

const rta4 = numbers.reduce((acum, elementos) => {
  console.log('Acum1',acum)
  if(elementos <= 5){
    acum['1-5']+=1
  }
  else if(elementos <= 8){
    acum['6-8']+=1
  }
  else if(elementos <= 10){
    acum['9-10']+=1
  }
  return acum;
},{'1-5':0, '6-8':0, '9-10':0})

console.log(rta4)
