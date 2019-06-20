console.log('working');

//1. Write a for loop that will log the numbers 1 through 20.

for (i = 1; i <= 20; i++){
	console.log(i);
}

//2.Write a for loop that will log only the even numbers in 0 through 200.

for (i = 2; i <= 200; i +=2){
	console.log(i);
}

//3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times. For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// COME BACK TO THIS
//for (i = 1; i <=20; i ++){
//	console.log ('Love me, pet me! HSSSSSS!')}

// Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.

// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (i = 1; i <= 100; i++){
	console.log(i);
}
	if (i % 3 === 0){
		console.log('Fizz');
}
	if (i % 5 === 0){
		console.log('Buzz');
	}
	if(( i % 3 != 0 ) && (i % 5 != 0 )){
		console.log('FizzBuzz');
}
