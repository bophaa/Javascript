const person ={name:"Bob",address:{city:"Phnom Penh",zip:"12345"}}
const {name, address: {city, zip}} = person;
console.log("Name:", name); 
console.log("City:", city); //Number 6 


const arr1 =[1,2,3]
const arr2 =[0,1,2,3,4,5]
const mergedarray = [...arr1, ...arr2];
const [first, second, ...rest] = mergedarray;
console.log(mergedarray);
console.log("First :",first); 
console.log("Second :",second);
console.log("Rest :",rest);  //Number 7


function printUser({name:Name, age:Age}) {
  console.log("Name:", Name);
  console.log("Age:", Age);
  
}   
printUser({ name: "Sophea", age: 20 }); //Number 8