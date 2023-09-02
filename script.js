let Celcius= document.getElementById("celcius");
let Fahrenheit= document.getElementById("fahrenheit");

function celToFar(){
    let output= (parseFloat(Celcius.value)*9/5)+32;
    Fahrenheit.value= parseFloat(output.toFixed(2));
    console.log(output);

} 
function farToCel(){
    let output= (parseFloat(Fahrenheit.value)-32)*5/9;
    Celcius.value=parseFloat(output.toFixed(2));
    console.log(output);
} 
