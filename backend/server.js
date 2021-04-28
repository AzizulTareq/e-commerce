import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express();

dotenv.config()

connectDB()

app.get('/', (req, res) => {
    res.send('Hi from backend')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mood on port ${PORT}`.rainbow

.bold))