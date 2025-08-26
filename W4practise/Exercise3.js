let arr =[10,20,30,40];
let discountPrices = arr.map(arr=>arr-(arr*0.2));
discountPrices.forEach(myfunction);
function myfunction(discountPrices){
        console.log("Discount price:"+"$"+discountPrices);
}

