const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express()


app.use(cors({credentials: true}));
app.use(express.json())
app.use(cookieParser())
app.use('/server/auth', authRoutes)
app.use('/server/users', userRoutes)
app.use('/server/products', productsRoutes)


app.listen(3005, () => {
    console.log('Connected - Server is running')
})