import connection from '../db.js';

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }
    try {
        let res = await connection.promise().query(
            'SELECT * FROM medicine'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = true
        result.data = err

        return result
    }
}

const addMedicine = async (body) => {
     console.log(body)
    
    let result = {
        success: false,
        data: null
    }
    try {
        let res = await connection.promise().query(
            `insert into medicine(pharmaceuticalCompanyID, medicineName, dosage)
            values
            ('${body.pharmaceuticalCompanyID}', '${body.medicineName}', '${body.dosage}');`
        )

        result.success = true
        result.data = res[0]
        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }

}

export default {
    getAll,
    addMedicine
}


