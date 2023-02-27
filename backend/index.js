const connectToMongoose=require('./db');
connectToMongoose();
// connecting to the server with help of express that i already installed
const express = require('express')
const app = express()
const port = 3000

//midlleware laga raha hoo taaky json req apni body mein bhj skooo
app.use(express.json());

//Available Routes in my WebApplication
app.use('/api/auth',require('./routes/auth'))
app.get('/', (req, res) => {
  res.send('Hello Dark y to first wala route hai naa!')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})