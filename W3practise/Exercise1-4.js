const num = [10, 20, 30, 40];
const [first, second, ...rest] = num;
console.log("First :",first); 
console.log("Second :",second);
console.log("Rest :",rest);   // Number 1


const user = { id: 1, username: 'Alice', age: 25 }
const {username:name} = user;
console.log("Name :",name);   // Number 2


const array1 =[1,2,3];
const array2 =[4,5,6];
const mergedarray = [...array1, ...array2];
console.log(mergedarray); 

const a ={x:1,y:2};
const b ={y:3,z:4};
const merged = {...a, ...b};
console.log(merged);          //Number 3


function sumNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5)); // Number 4

