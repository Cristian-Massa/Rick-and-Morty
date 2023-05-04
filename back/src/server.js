const router = require('./routes/index')
const express = require('express')
const cors = require('cors')
const server = express();
const PORT = 3001;
const { conn } = require('./DB_connection')

conn.sync({force: true})
server.use(cors())
server.use(express.json());
server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log('servidor levantado en' + PORT)
})
