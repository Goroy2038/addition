import ("./clear.js");
import "./style.css";

let input1Value = document.getElementById("input1Value");
let input2Value = document.getElementById("input2Value");
let result = document.getElementById("result");
let clearButton = document.getElementById("clearButton");
let addButton = document.getElementById("addButton");


addButton.onclick = function (){
    let a = Number(input1Value.value);
    let b = Number(input2Value.value);
    result.value = a + b;
}
