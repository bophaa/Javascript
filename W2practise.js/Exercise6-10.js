function lastElement(array) {
    if (array.length === 0) {
        return null;
    }
    return array[array.length - 1];
}   
console.log(lastElement([3,5,7])); 
console.log(lastElement([1])); 
console.log(lastElement([]));  // Number6 


function sumArray(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}sumArray([1,2,3]);
sumArray([2,2,2,2]); 
sumArray([50,50,1]); // Number7


function returnDay(number){
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(number) {
    if (number < 1 || number > 7) {
        return null;
    }
    return daysOfWeek[number - 1];
}

console.log(returnDay(1)); 
console.log(returnDay(7)); 
console.log(returnDay(4)); 
console.log(returnDay(0)); // Number8
}   


const greet = (name) => {
    return "Hey " + name + "!";
}
console.log(greet("Alice"));
console.log(greet("Bob")); // Number9


function squareNum(num){
    return num * num;
}
const square = (num) => {
    return num * num;
}
console.log(square(4));
console.log(square(3)); // Number10
