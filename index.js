const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to VCS Server!")
    return;
})

app.listen(process.env.PORT || 3232)

console.log('Server running at port 3232')  