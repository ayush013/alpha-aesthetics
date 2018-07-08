const express = require('express');
const path = require('path');

const app = express();

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/fit/index.html'));
});

app.listen(3000, () => {
    console.log("working on port 3000");
})
