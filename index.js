import jsonserver from 'json-server'

const server = jsonserver.create()

const router = jsonserver.router('db.json')
const middlewares = jsonserver.defaults()
 
server.use(middlewares)
server.use('/api', router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})
