var a = document.querySelector("h1");
a.innerHTML = "Changed HTML";
a.style.color = "green";
a.style.backgroundColor = "yellow";
console.log(a);
a.addEventListener("click", () => {
  a.innerHTML = "Changed heading: How are you";
  a.style.color = "blue";
  a.style.backgroundColor = "aqua";
});

var bulb = document.querySelector("#bulb");
document.querySelectorAll;
var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  var buttonContent = btn.innerHTML;
  if (buttonContent === "ON") {
    //If button pressed for on
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF"; //get option for off
  } else {
    // If button pressed off
    bulb.style.backgroundColor = "white";
    btn.innerHTML = "ON";
  }
});
