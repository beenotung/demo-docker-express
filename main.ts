import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello, world',
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`[info] listening to Port: ${PORT}`);
});
