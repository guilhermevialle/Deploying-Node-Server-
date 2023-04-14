const express = require('express')
const port = process.env.PORT || 9090
const server = express()
const axios = require('axios')

server.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')

    if (!data) return res.status(404).send('Data not found')

    return res.status(200).send(data)
  } catch (error) {

    return res.status(500).send('Server error at handling get data')
  }
})

server.listen(port, () => console.log(`http://localhost:${port}`))
