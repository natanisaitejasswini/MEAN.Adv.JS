// Uncurried
function ninjaBelt(ninja, beltcolor){
  console.log("Ninja" + ninja + " has earned a" + beltcolor+ "belt.");
}
ninjaBelt('Teju','black');

// Curried
function ninjaBelt2(ninja){
  return function belt(beltcolor){
    console.log("Ninja" + ninja + "has earned a" + beltcolor + "belt.");
  }
}
ninjaBelt2('Teju')('Black');