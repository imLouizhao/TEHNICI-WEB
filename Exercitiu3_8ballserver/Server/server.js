import cors from "cors";
import express from "express";
import answers from "./magic.json" assert {type: 'json'};

function getRandomNumber() {
    return Math.floor(Math.random() * 6);
}

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/answers', (_req, res) => {
    const index = getRandomNumber();
    res.json(answers[index]);
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));