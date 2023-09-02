let Celcius= document.getElementById("celcius");
let Farenheit= document.getElementById("farenheit");

function celToFar(){
    let output= (parseFloat(Celcius.value)*9/5)+32;
    Farenheit.value= parseFloat(output.toFixed(2));
    console.log(output);

} 
function farToCel(){
    let output= (parseFloat(Farenheit.value)-32)*5/9;
    Celcius.value=parseFloat(output.toFixed(2));
    console.log(output);
} 
