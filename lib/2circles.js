function randomColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
return rgb;
}

// var h3 = document.querySelector("h3");

for (i = 0; i<=0; i++) {
h3.style.color = randomColor();
}
