import koa from 'koa'
import cors from '@koa/cors'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from './schema/fakedatatwo'

const app = new koa()
const router = new koaRouter()
const PORT = 3000
// koaBody is needed just for POST.
router.post('/graphql', koaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get('/', (ctx, next) => { ctx.body = 'hello'})

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
console.log(`app run on port ${PORT}`)
