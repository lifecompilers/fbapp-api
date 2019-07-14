import express from 'express';
import bodyParser from 'body-parser'
import routes from './routes/indexRoutes';
import logger from 'morgan';
require('./config/db')

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'));

app.use('/api', routes);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});