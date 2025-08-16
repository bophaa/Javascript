let Firstname="Seng";
let Lastname="Bopha";
 console.log("Hello, My name is",Firstname,Lastname); // Number 1


let a="10";
let b="5";
let c="2";
console.log("Result : ",a*b+c);//Number 2


let isSunny=true;
let isNotSunny=false;
if (isSunny==true){
    console.log("Wear sunglasses");
}else{
    console.log("Take an umbrella"); 
}//Number 3


let Numbers=[13,24,58,67,2,0];
 Numbers.forEach(Num=>{ 
    if( Num>=10){
        console.log(Num);
    }
 }
) // Number 4


let book={
    title: "Javascript Basics",
    author: "sreypov",
    pages:120
};
console.log("The book"+" "+book.title+" "+"by"+" "+ book.author+" "+"has"+" "+book.pages+" "+"pages"); 

let Num=[20];
for(let i=0;i%2;i++){
    console.log(i);
} //Number 5


for(let i=1;i<21;i++){
    if(i%2==0){
        console.log(i);
    }
} // Number 6


let i=10;
while(i<=10){
    console.log(i);
    i--;
    if(i==0){
        break;
    }
} // Number 7


let numbers=[1,5,10,15];
let doubled=[];

numbers.forEach(num=>{
    doubled.push(num*2);
});
console.log(doubled); //Number 8


let str1= "Javascript is Fun!";
let trimmed = str1.trim();
let upperText = str1.toUpperCase();
console.log(trimmed);
console.log(upperText); //Number 9


let studentScores=[23,55,77,88,99];
let studentpassCount=0;

studentScores.forEach(score=>{
    if (score >=60){ 
        studentpassCount++;
    }
});
console.log("The number of student who passed is :"+" "+studentpassCount); // Number 10


