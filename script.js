var avgPrice = document.querySelector("#avgPrice");
var quantity = document.querySelector("#quantity");
var currPrice = document.querySelector("#currPrice");
var calculate = document.querySelector("#calculate");
var outputArea = document.querySelector(".outputArea");

calculate.addEventListener('click', function calculatePNL(){
  var absolutePnL = (currPrice.value-avgPrice.value);
  var pnl = (Math.abs(absolutePnL)/avgPrice.value)*100
  if(absolutePnL<0){
    outputArea.innerHTML = "Your loss is "+pnl+"% which is "+absolutePnL*quantity.value+"Rs.";
    outputArea.style.color = "rgba(239, 68, 68, 1)";
  }else{
    outputArea.innerHTML = "Your profit is "+pnl+"% which is "+absolutePnL*quantity.value+"Rs.";
    outputArea.style.color = "rgba(110, 231, 183, 1)";
  }
});


