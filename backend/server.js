import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middleware/errorMiddleware.js';

const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(errorHandler)
const port = process.env.PORT
app.listen(port, console.log(`Server is now running on port ${port}`))