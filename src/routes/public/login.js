import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'


const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET

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

    //compara a senha armazenada no banco com a que o usuário digitou
    const isMatch = await bcrypt.compare(userInfo.password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Senha inválida' })
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1m' }) //criando token de autenticação

    res.status(200).json(token)
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor, tente novamente' })
  }
})

export default router