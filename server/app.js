const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');
const cartsRoutes = require('./routes/carts');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express()


app.use(cors({credentials: true }));
app.use(express.json({ limit: '5mb' }))
app.use(cookieParser())
app.use('/server/auth', authRoutes)
app.use('/server/users', userRoutes)
app.use('/server/categories', categoriesRoutes)
app.use('/server/products', productsRoutes)
app.use('/server/carts', cartsRoutes)
// app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({limit: '25mb'}));


app.listen(3005, () => {
    console.log('Connected - Server is running')
})
  