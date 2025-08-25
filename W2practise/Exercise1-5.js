function printHeart(){ 
    console.log("<3");
}
printHeart(); // Number1


function rant(){
    let message= "I hate tomatoes";
    let result=message.toUpperCase();
    console.log(result);
    console.log(result);
    console.log(result);
}
rant(); // Number2


function isSnakeEyes(dice1, dice2){
    let message1= "Snake Eyes!";
    let message2= "Not Snake Eyes!";
    if(dice1===1 && dice2===1){
        console.log(message1);
    }else{
        console.log(message2);
    }        
}
isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5); // Number3


function multiply(a, b){
    return a * b;
}
console.log(multiply(2,3));
console.log(multiply(9,9));
console.log(multiply(5,4)); // Number4


function isShortsWeather(temperature){
    if(temperature >= 35){
        console.log("It's shorts weather!");
        return true;
    }else{
        console.log("It's not shorts weather.");
        return false;
    }
}isShortsWeather(40);
isShortsWeather(22);
isShortsWeather(37); // Number5