const box1 = document.getElementById("div1");
const box2 = document.getElementById("div2");
const box3 = document.getElementById("div3");

box1.addEventListener("click", async function(event){
    console.log("am apasat pe box 1");
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "yellow";
    box3.style.backgroundColor = "red";
})

box2.addEventListener("click", async function(event){
    console.log("am apasat pe box 2");
    box1.style.backgroundColor = "yellow";
    box2.style.backgroundColor = "green";
    box3.style.backgroundColor = "yellow";
})

box3.addEventListener("click", async function(event){
    console.log("am apasat pe box 3");
    box1.style.backgroundColor = "red";
    box2.style.backgroundColor = "yellow";
    box3.style.backgroundColor = "green";
})