const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Dockerflix Backend!');
});

app.get('/status', (req, res) => {
    res.status(200).send('Everything is fine');
});

app.get('/series', (req, res) => {
    res.json([
        "Game of Thrones",
        "Breaking Bad",
        "Big Bang Theory",
        "The Office",
        "The Rookie"
    ]);
});

const port = 4050;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});