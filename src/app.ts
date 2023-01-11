import 'dotenv/config'
import express from 'express';
import cors from 'cors'

import { router } from './routes'

const PORT = process.env.PORT

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(router)

app.listen(PORT, ()=> console.log(`Server up on port ${PORT}`))
