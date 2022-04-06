import express from 'express';
import { getAll } from '../bl/pharmaceuticalCompanies-bl.js';

const pharmaceuticalCompaniesRouter = express.Router();

pharmaceuticalCompaniesRouter.get('/companies', async (req, res) => {
    let result = await getAll();
    res.send(result)
});



export {
    pharmaceuticalCompaniesRouter
}