/* const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6){
        newArray.push(item)
    }
}
console.log('newArray',newArray)
console.log('Original',words)

const rta = words.filter( word => word.length > 6)
console.log('Con Filter', rta) */

/*------------*/
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Santiago",
        total: 2080,
        delivered: true,
    }
  ];
/*   const rta3 = orders.filter(order => order.delivered === true && order.total >= 200);
  console.log('Ordenes Entregadas', rta3); */

  /*Este Filtro funciona bien 👇*/
/*   const search = (query) => {
      return orders.filter(item => {
          return item.customerName.includes(query)
      })
  } 
  console.log(search('Sdfh')); */

  const search = (query) => {
    return orders.filter(item => {
        if (item.customerName.includes(query)){
            return console.log(item)
        }
        if (item.customerName.includes(query) === false){
            console.log('Item not found')
        }
    })
} 
search('Sant');