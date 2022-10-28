const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send("Você está rodando o Express através de um container Docker!")
})

app.listen(port, () => {
    console.log(`Server rodando na porta : http://localhost:${port}`)
})