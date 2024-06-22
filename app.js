const express = require("express");
const cors = require("cors");
const http = require("http");
const PORT = 2801;
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World");
})
app.get('/iu', (req, res) => {
    res.send("Anh yêu en");
})

const server = http.createServer(app).listen(PORT, () => {
    console.log("Start localhost 2801")
})