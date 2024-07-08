const ball = document.getElementById("magicball");
const raspuns = document.getElementById("text");

ball.addEventListener("click", async function(event) {
    const response = await fetch("http://127.0.0.1:5000/answers");
    const data = await response.json();
    console.log(data);
    if(data.type === "positive") {
        ball.style.backgroundColor = "green";
        raspuns.textContent = data.answer;
        raspuns.style.color = "green";
    }
    else if(data.type === "negative") {
        ball.style.backgroundColor = "red";
        raspuns.textContent = data.answer;
        raspuns.style.color = "red";
    }
    else if(data.type === "other") {
        ball.style.backgroundColor = "orange";
        raspuns.textContent = data.answer;
        raspuns.style.color = "orange";
    }
})