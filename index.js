require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
    res.send("Welcome on API")
})

app.get('*', function(req, res) {
    res.status(404).json({
        status: 404,
        error: 'Endpoint not found'
    });
});


app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`)
})