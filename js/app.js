console.log('working');

//1. Write a for loop that will log the numbers 1 through 20.

// for (i = 1; i <= 20; i++){
// 	console.log(i);
//}

//2.Write a for loop that will log only the even numbers in 0 through 200.

// for (i = 2; i <= 200; i +=2){
// 	console.log(i);
// }

//3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times. For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// COME BACK TO THIS
//for (i = 1; i <=20; i ++){
//	console.log ('Love me, pet me! HSSSSSS!')}

// Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.

// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i = 1; i <= 100; i++){
	console.log(`${i}`);
	if (i % 3 === 0){
		console.log('Fizz');
}
	if (i % 5 === 0){
		console.log('Buzz');
	}
	if( i % 3 === 0 && i % 5 === 0 ){
		console.log('FizzBuzz');
}
}
// COME BACK TO THIS

//Jim Clark decides that Kenny can't be named "Kenny" anymore. 
//Remove "Kenny" from the kenny array and replace it with "Gameboy".

const kenny = ["Kenny", 1000, "Austin"]; 
kenny [0] = "Gameboy";
console.log (kenny);

// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. 
// Don't just hard code 187--pretend that you didn't already 
// know that his age is 186, and write your code to just make him a year older than whatever age he was.

/// COME BACK TO THIS
//const jimClark = ["Jim C", 186, "LA"];

//Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
const ryan = ["Ryan", 65, "Denver"];
ryan [2] = "Gotham City";
console.log (ryan);

//Reuben left Durham 5 years ago to come to Chicago. 
//First, remove "Durham" from Reuben's array, and then add "Chicago". 
const reuben = ["Reuben", 22, "Durham"];
reuben.splice(2);
reuben.push("Chicago");
console.log (reuben);

//Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. 
//f you did it in 3 lines of code that's fine, but see if you can do it in one line of code

const jimHaff = ["Jim H", 16, "All cities"];
jimHaff.splice(2);
jimHaff.push("Buenos Aires", "Denver", "Quito")
console.log (jimHaff);

//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
//Use a for loop to call .toUpperCase() on each of them and print out the result.

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(var i = 0; i < ninjaTurtles.length; i++){
	ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
	console.log(ninjaTurtles);
}


// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// const kristynsShoe = ()
// kristynsCloset.slice(1);
// //Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
// //Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
// //Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// const thomsOutfit1 = ["PJs", "grey button-up", "wool mittens"];
// const thomsOutfit2 = ["jeans", "wool scarf", "raybans"];
// const thomsOutfit3 = ["light blue button-up", "grey jeans", "wool scarf"];
// const kristynsOutfit1 = ["right sock", "GA hoodie", "marshmallow peeps"];
// const kristynsOutfit2 = ["yellow knit hat", "cowboy boots", "green pants"];
// const kristynsOutfit3 = ["green pants", "right sock", "marshmallow peeps"];

// //Continue looking at the closet arrays:

// // Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// // Inventory
// // Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

// //Find the sum of all the multiples of 3 or 5 below 1000.


// for(
//     var sum = 0, i = 1;
//     i < 1000;!(i % 3 && i % 5) && (sum += i), i++);
// console.log(sum);
