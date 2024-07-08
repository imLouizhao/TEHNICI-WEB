const canvas = document.getElementById("magicball");
const ctx = canvas.getContext('2d');
canvas.width = 200;
canvas.height = 200;

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(100, 100, 90, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(100, 100, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.font = 'bold 50px Arial';
ctx.textAlign = "center";
ctx.textBaseline = 'center';
ctx.fillText('8', 100, 115);


