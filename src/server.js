import express from 'express'
import registerRouter from './routes/public/register.js'

const app = express()
app.use(express.json())

app.use('/users', registerRouter)

app.listen(3000, () => console.log('Server running...'))