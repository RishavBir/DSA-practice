
/* ====>>> A process that calls itself is called reccursion.
   ====>>> When we write reccursive functions, we keep pushing new functions onto the call stacks.

   >>>> Invove the same function with a different input until you reach your base case!

*/

// EXAMPLE

function takeShower (){
    return "Showering"
}

function eatBreakfast (){
    let Meal = cookFood
    return `Eating ${Meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Egg Toast", "Sandwitch", "Chocokes"]
    return items [ Math.floor(Math.random() * items.length )]
}

function wakeUp(){
    takeShower()
    eatBreakfast()
    cookFood()
}

console.log("Ok you are good to go")
wakeUp()