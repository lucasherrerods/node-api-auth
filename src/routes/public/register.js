import express from 'express'

const router = express.Router()

router.post('/register', (req, res) => {
  try {
    const users = [] //simulando o bando de dados por enquanto

    users.push({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    res.status(201).json(users)
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor, tente novamente' })
  }
})

export default router