const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('A simple Node App is ' + 'running on this server');
    res.end();
})

const PORT = process.env.PORT || 4312;

app.listen(PORT, console.log('Server started on Port', PORT));


