import express from 'express';

const app = express();
const port = process.env.PORT;
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