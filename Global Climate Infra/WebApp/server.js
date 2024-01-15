import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import group3DDBtable from './routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

// app.get("/", (req, res) => {
//     res.json({ "Hi": "Hello World" });
// });

app.get('/api/group3DDBtable', group3DDBtable);

const PORT = 8000
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Port listening on https://${HOST}:${PORT}`);
});

