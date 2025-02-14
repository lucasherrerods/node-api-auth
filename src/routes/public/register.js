import express from 'express'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const users = [] //simulando o bando de dados por enquanto

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    users.push({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword
    })

    res.status(201).json(users)
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor, tente novamente' })
  }
})

export default router