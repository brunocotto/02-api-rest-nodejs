import fastify from 'fastify'
import { fastifyCookie } from '@fastify/cookie'
import { transactionRoutes } from './routes/transactions'
import { env } from './env'

const app = fastify()

// ordem dos plugins é a ordem que o fastify executa
app.register(fastifyCookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running.')
  })
