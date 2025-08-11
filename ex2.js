// 1: Function with Parameters and Return Value
// TODO:
// 1. Create a function called addNumbers that takes two numbers
// 2. Return the sum of those two numbers
// 3. Call the function with any numbers and print the result
function addNumber(num1 , num2){
    return (num1 + num2)
}
console.log(addNumber(2 ,3))

// 2: Function without Parameters but with Return Value
// TODO:
// 1. Create a function called getRandomNumber that returns a random number between 1 and 10
// 2. Print the returned number
function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * 10)  +1 ;

    return randomNum
}
console.log(getRandomNumber());

// 3: Function with Parameters and No Return Value
// TODO:
// 1. Create a function called greetUser that takes a name as a parameter
// 2. Print "Hello, <name>!"
// 3. Call the function with any name
let greetUser = (name)=>{
    console.log(`Hello ${name}`)
}
greetUser('Hab')
// 4: Function that Calculates and Returns an Average
// TODO:
// 1. Create a function called calculateAverage that takes an array of numbers
// 2. Calculate the average and return it
// 3. Call the function with an array of numbers and print the result
function calculateAverage(arrayNum){
    let sum = 0;
    for(let i of arrayNum){
        sum+= i;
    }
    return Number(sum / arrayNum.length)
}
let score = [1,2,3,4,5]
console.log(calculateAverage(score))

// 5: Function with Default Parameters
// TODO:
// 1. Create a function called multiply that takes two numbers
// 2. If the second number is not provided, it should default to 2
// 3. Return the multiplication result
// 4. Call the function twice: once with two numbers and once with one number

function multiply( x , y=2){
    return x*y


}
console.log(multiply(2));
console.log(multiply(2 ,3));
