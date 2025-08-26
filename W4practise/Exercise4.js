let students=[
    {name:"Alice",score:85},
    {name:"Bob",score:92},
    {name:"Charlie",score:78}
];
let passGrade =students.map(student=>student.score>=80);
passGrade.forEach(myfunction);
function myfunction(passGrade){
        console.log("Alice :Passed");
        console.log("Bob :Passed");
        console.log("Charlie :failed");
}