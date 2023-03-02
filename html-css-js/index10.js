// js callbacks
// callbacks are function passed as an argument to another function
// to ensure that the function wont run before a task is completed

let num;
assign(678,show);
function assign(val,show){
    num = val;
    show(num);
}

function show(xyz){
    console.log(xyz);
}