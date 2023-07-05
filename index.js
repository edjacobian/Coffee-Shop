// Connect data js file to here
const coffeeMenu = require(`./coffee_data.js`);
// Print array of drinks on menu
const drinks = coffeeMenu.map ((item) => {
  return item.name;
})
console.log(drinks);
// Print array of drinks $5 and under
const underFive = coffeeMenu.filter ((item) => {
  return item.price <= 5
})
console.table(underFive);
// Print array of drinks priced at an even number
const evenPrices = coffeeMenu.filter ((item) =>{
  return item.price % 2 === 0
})
console.table(evenPrices);
// Print array with all seasonal drinks
const seasonalDrinks = coffeeMenu.filter ((item) => {
  return item.seasonal === true
})
console.table(seasonalDrinks);
// Add "with imported beans" at the end of each seasonal drink
console.log (seasonalDrinks[0].name+` with imported beans`)
console.log (seasonalDrinks [1].name+` with imported beans`)