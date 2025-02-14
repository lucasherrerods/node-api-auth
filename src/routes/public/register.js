import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'


const router = express.Router()
const prisma = new PrismaClient()

//Cadastro
router.post('/register', async (req, res) => {
  try {
    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const userDB = await prisma.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassword
      }
    })

    res.status(201).json(userDB)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro no servidor, tente novamente' })
  }
})

export default router