let expense=[120,75,300,50];
let expenseRecord = expense.forEach(function(item){
    console.log("Expense: " + "$"+item);
});
let totalExpense = expense.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Total Expense: "+"$" + totalExpense);