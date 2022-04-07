import express from 'express';
import { pharmaceuticalCompaniesRouter  } from './controlers/pharmaceuticalCompanies-controller.js';
import { medicineRouter } from './controlers/medicine-controller.js';
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api", pharmaceuticalCompaniesRouter)
app.use("/api", medicineRouter)


app.listen(3001, () => {console.log("Listening to port 3001")})