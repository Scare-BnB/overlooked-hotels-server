const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.json({  
    });
});

module.exports = {
    app
}