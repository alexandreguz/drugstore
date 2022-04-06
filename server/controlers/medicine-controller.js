import express from 'express';
import { addMedicine, getAll } from '../bl/medicine-bl.js';

const medicineRouter = express.Router();


medicineRouter.get("/medicine", async (req, res) => {
    let result = await getAll();
    res.send(result)
});

medicineRouter.post("/medicine", async (req, res) => {
    let result = await addMedicine(req.body)
    

    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }
        res.send(result)
    };
});

export {
    medicineRouter
} 