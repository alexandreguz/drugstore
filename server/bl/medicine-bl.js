import medicineDal from "../dal/medicine-dal.js"


const getAll = async () => {
    return await medicineDal.getAll()
}


const addMedicine = async (body) => {
    console.log("medicine bl")
    return await medicineDal.addMedicine(body)
     
}


export {
    getAll,
    addMedicine
}