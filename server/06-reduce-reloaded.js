const items = [1, 3, 2, 3];

const rta = items.reduce((objeto, item) => {
    if(!objeto[item]) {
        objeto[item] = 1;
    }else {
        objeto[item] = objeto[item] + 1;
    }
    return objeto;
}, {})
console.log(rta);
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