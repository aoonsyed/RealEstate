import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()

import Routes from './routes/route.js'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



app.use('/', Routes)
const CONNECTION_URL = process.env.DB_URL
const PORT = 9000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at port: ${PORT}`)))
    .catch((error) => console.log(error.message))


// mongoose.set('useFindAndModify', false)


