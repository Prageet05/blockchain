const express = require('express');
const mongoose = require('mongoose')
const route = require('./route/route.js');
const app = express();

mongoose.set('strictQuery', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://prageet:4zGItzVIrinYLkAI@myproject.kthcntq.mongodb.net/blockchain", { useNewUrlParser: true })
.then(() => console.log('mongodb is connected'))
.catch(err => console.log(err))

app.use('/', route);
app.listen(3000, function () {console.log('Express app running on port 3000')})
