let arr = [1, 2, 3];


let multiplied = arr.map(val => val * 3);

console.log(multiplied); 


let oddNumbers = multiplied.filter(val => val % 2 != 0);

console.log(oddNumbers); 


let mul = oddNumbers.reduce((current, val) => current * val, 1);

console.log("Multiplication: " + mul);