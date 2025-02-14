import express from 'express'
import registerRouter from './routes/public/register.js'
import loginRouter from './routes/public/login.js'
import privateRouter from './routes/private.js'

const app = express()
app.use(express.json())

app.use('/users', registerRouter)
app.use('/users', loginRouter)
app.use('/users', privateRouter)

app.listen(3000, () => console.log('Server running...'))