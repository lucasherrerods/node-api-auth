import express from 'express'
import registerRouter from './routes/public/register.js'
import loginRouter from './routes/public/login.js'

const app = express()
app.use(express.json())

app.use('/users', registerRouter)
app.use('/users', loginRouter)

app.listen(3000, () => console.log('Server running...'))