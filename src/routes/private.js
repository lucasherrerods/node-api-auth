import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/list', async (req, res) => {
  try {
    const users = await prisma.users.findMany()

    res.status(200).json({ message: 'Usuários listados com sucesso', users })
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor, tente novamente' })
  }
})

export default router