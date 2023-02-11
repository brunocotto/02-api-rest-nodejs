import fastify from 'fastify'
import { transactionRoutes } from '../routes/transactions'
import { env } from './env'

const app = fastify()

// ordem dos plugins é a ordem que o fastify executa

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
