const size = "100px"
const body = document.querySelector("body");

body.style.height = "100vh"
body.style.display = "flex"
body.style.margin = "0"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createBulina() {
    const bulina = document.createElement("div");

    bulina.style.height = size;
    bulina.style.width = size;
    bulina.style.borderRadius = "50%";
    bulina.style.position = "absolute";
    bulina.style.left = `${getRandomInt(body.clientWidth)}px`;
    bulina.style.top = `${getRandomInt(body.clientHeight)}px`;

    return body.appendChild(bulina);
}

body.addEventListener('keydown', function (event) {
    const bulina = createBulina();

    if (event.key === 'r') {
        console.log('S-a apasat r')
        bulina.style.backgroundColor = "red";
    }
    if (event.key === 'g') {
        console.log('S-a apasat g')
        bulina.style.backgroundColor = "green";
    }
    if (event.key === 'y') {
        console.log('S-a apasat y')
        bulina.style.backgroundColor = "yellow";
    }
    if (event.key === 'b') {
        console.log('S-a apasat b')
        bulina.style.backgroundColor = "blue";
    }

    if (bulina.style.backgroundColor) {
        console.log("Adaugam divul in body");

        let nrBuline = localStorage.getItem('nrBuline') ? parseInt(localStorage.getItem('nrBuline')) : 0;
        nrBuline += 1;
        console.log(nrBuline);
        localStorage.setItem('nrBuline', nrBuline.toString())

        body.appendChild(bulina);
    }

    bulina.addEventListener('click', function (event) {
        console.log("s-a apasat pe bulina");
        const newBulina = createBulina();

        let nrBuline = localStorage.getItem('nrBuline') ? parseInt(localStorage.getItem('nrBuline')) : 0;
        nrBuline += 1;
        localStorage.setItem('nrBuline', nrBuline.toString())

        newBulina.addEventListener('click', function (event) {
            const newNewBulina = createBulina();
            newNewBulina.style.backgroundColor = event.target.style.backgroundColor;
            body.appendChild(newNewBulina);
            let nrBuline = localStorage.getItem('nrBuline') ? parseInt(localStorage.getItem('nrBuline')) : 0;
            nrBuline += 1;
            localStorage.setItem('nrBuline', nrBuline.toString())
        });

        newBulina.style.backgroundColor = event.target.style.backgroundColor;
        body.appendChild(newBulina);
    })
})

