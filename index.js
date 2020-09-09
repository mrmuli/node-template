const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// A simple endpoint
app.get('/api/getList', (req,res) => {
    var list = ["van", "truck", "bike"];
    res.json(list);
    console.log('Sent list of Mangoes');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('server is listening on port: ' + port);