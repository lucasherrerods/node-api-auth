import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'


const router = express.Router()
const prisma = new PrismaClient()

//Login
router.post('/login', async (req, res) => {
  try {
    const userInfo = req.body

    //busca o usuário no banco de dados
    const user = await prisma.users.findUnique({
      where: { email: userInfo.email }
    })

    //verifica se o usuário existe no banco
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado no sistema' })
    }

    const isMatch = await bcrypt.compare(userInfo.password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Senha inválida' })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor, tente novamente' })
  }
})

export default router