const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')))
app.use('/src', express.static('src'))
app.use('/build', express.static('build'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
