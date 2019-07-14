import express from 'express';

const app = express();
const port = 3000;
app.get('/', (_req, res) => {
    res.json({
        message: "Pong"
    });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});