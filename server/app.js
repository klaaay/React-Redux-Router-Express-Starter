const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/todo', {
    useNewUrlParser: true
}, () => {
    console.log('DB connected')
})

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json({
    type: 'application/json'
}))

require('./routes/todo')(app)

app.listen(PORT, () => {
    console.log('Sever listened in on ' + PORT);
})