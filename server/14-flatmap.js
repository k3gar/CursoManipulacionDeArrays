/* const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);

console.log('map-flat separado',rta);
console.log('MapFlat',rta2); */

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const rta3 = Object.values(calendars).flatMap(item => {
    return item.map( date => date.startDate)
});
console.log(rta3)

//1. Objects.values convierte el objeto 'calendars' en un array.
//2. El método flatmap solo nos aplana un array a 1 nivel.
//3. Al retornar un item nos regresa como un array, es por eso que debemos crear una
// función que use .map() y nos mapee la fecha dentro de cada elemento, y así el flatmap
// agrega cada elemento en un solo array.

const rta4 = Object.values(calendars).flat().flatMap(fecha => fecha.startDate)
console.log('rta4', rta4)