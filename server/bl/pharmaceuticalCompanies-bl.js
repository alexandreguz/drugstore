import pharmaceuticalCompaniesDal from "../dal/pharmaceuticalCompanies-dal.js"

const getAll = async () => {
    return await pharmaceuticalCompaniesDal.getAll()
}

export {
    getAll
}