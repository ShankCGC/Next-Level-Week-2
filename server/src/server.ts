import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, resp) => {
  return resp.json({message: 'Hello World'})
})

app.listen(3333)