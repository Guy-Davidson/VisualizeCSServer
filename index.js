const express = require('express');
const db = require('./data')

const app = express();

app.use(express.json());

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });

app.get('/', (req, res) => {
    res.send(db)
    return;
})

app.listen(process.env.PORT || 3232)

console.log('Server running at port 3232')  