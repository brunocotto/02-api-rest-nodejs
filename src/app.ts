import fastify from 'fastify'
import { fastifyCookie } from '@fastify/cookie'
import { transactionRoutes } from './routes/transactions'

export const app = fastify()

// ordem dos plugins é a ordem que o fastify executa
app.register(fastifyCookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
