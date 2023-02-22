const connectToMongoose=require('./db');
connectToMongoose();
// mongoose.set('strictQuery', true);
// connecting to the server with help of express that i install already
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})