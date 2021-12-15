const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

const connectDB = require('./config/ConnectDB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())
app.use(morgan('combined'));

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/product', productRouter);

app.get('/', (req, res) => {
    res.send('Home page')
})

connectDB()


app.listen(3000)