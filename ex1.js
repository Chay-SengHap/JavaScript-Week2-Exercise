// Array method

// 1: Add and Remove Fruits
let fruits = ['apple', 'banana'];
// TODO: 
// 1. Add "mango" to the end
// 2. Remove the last fruit and store it in a variable
// 3. Print the removed fruit and the updated array
fruits.push('mango')
let lastFruit = fruits.pop()
console.log(fruits);
console.log(lastFruit);


// 2: Insert at Beginning
let colors = ['red', 'green'];
// TODO: 
// 1. Add "blue" and "yellow" to the beginning
// 2. Remove the first element and store it in a variable
// 3. Print the removed color and the updated array

colors.unshift('blue' , 'yellow')
let removeFirstElement = colors.shift()
console.log(colors)
console.log(removeFirstElement)

// 3: Join Fruits into String
fruits = ['apple', 'banana', 'orange'];
// TODO: 
// 1. Join all fruits into a single string separated by " - "
// 2. Print the string
console.log(fruits.join(' - '))


// 4:  Replace Middle Elements
let numbers = [1, 2, 3, 4, 5];
// TODO:
// 1. Use splice() to replace 2nd and 3rd elements with 99 and 100
// 2. Print the updated array
numbers.splice(1 ,2 , 99 , 100)
console.log(numbers)




// 5: Combine and Sort
let arr1 = ['banana', 'apple'];
let arr2 = ['mango', 'pear'];
// TODO:
// 1. Combine arr1 and arr2 into one array
// 2. Sort the combined array alphabetically
// 3. Print the sorted array
let combineArr = arr1.concat(arr2);
console.log(combineArr.sort())

// 6: Flatten and Reverse
let nested = [1, [2, [3, 4]], 5, [6, 7]];
// TODO:
// 1. Flatten the array completely
// 2. Reverse the flattened array
// 3. Print the final array
let flat = nested.flat();
console.log(flat.flat().reverse())