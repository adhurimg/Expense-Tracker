const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
        db()
        app.listen(PORT, () => {
                console.log('listening to port:', PORT)
        })
}
//X50ee6QpYaVip3nc
//PzqHJIdYlE88UZjw
//MONGO_URL=mongodb+srv://adhurimgashi03:PzqHJIdYlE88UZjw@cluster0.enerpcw.mongodb.net/?retryWrites=true&w=majority
//MONGO_URL=mongodb+srv://adhurimgashi03:X50ee6QpYaVip3nc@cluster0.uqge3xy.mongodb.net/?retryWrites=true&w=majority
//MONGO_URL=mongodb+srv://adhurimgashi03:RUZl2DeZo8j4e2X@cluster0.vdd4x9q.mongodb.net/?retryWrites=true&w=majority
server()