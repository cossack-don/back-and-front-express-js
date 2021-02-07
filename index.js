// Подключение экспресс
const express = require('express')
const app = express()
const port = 3000

// запрос на фронт - массив
app.get('/posts', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  let array = [1,2,3,4,5,'hello','newnew']
  res.send(array)
})

// запрос на фронт - обьект
app.get('/contacts', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  let contacts = [
    {
      key:1,
      id:2,
      value:'goga'
    },
    {
      key: 11,
      id: 21,
      value: 'goga2'
    },
    {
      key: 111,
      id: 221,
      value: 'goga3'
    },
  ]
  res.send(contacts)
})

// сервер
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
