const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Here, have some data.'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
