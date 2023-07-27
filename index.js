
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"
 
const reverseString = (str) => {
    const text =  str.split("").reverse().join("");
    // console.log(text);
    return text;

}
console.log(reverseString("hello world"));




// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumOfPositiveNumbers = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
 
const mostFrequentElement = (arr) => {
    let count = 0;
    let element;
    for(let i = 0; i < arr.length; i++){
        let tempCount = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                tempCount++;
            }
        }
        if(tempCount > count){
            count = tempCount;
            element = arr[i];
        }   
    }
    return element;
}
console.log(mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, num2, operator) => {
    let result;
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;  
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
console.log(calculator(2, 3, "*"));



// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomPassword = (length) => {
    let password = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

console.log(randomPassword(10)); 


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 
const  romanToInteger = (num) => {  
    let result = 0;
    const romanNumerals = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    for(let i = 0; i < num.length; i++){
        if(romanNumerals[num[i]] < romanNumerals[num[i+1]]){
            result -= romanNumerals[num[i]];
        }else{
            result += romanNumerals[num[i]];
        }
    }
    return result;
}
console.log(romanToInteger("XI"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallestElement = (arr) => {
    let smallest = arr[0];
    let secondSmallest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }else if(arr[i] < secondSmallest){
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}   
console.log(secondSmallestElement([2, 3, 1, 5, 4, 6, 7, 8, 9, 10]));