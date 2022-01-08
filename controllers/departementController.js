const {
    Departement
} = require('../models')

const getAllDepartement = async (req, res) => {
    const departements = await Departement.findAll({
        raw: req.query.raw,
    }).catch(err => err.message)
    res.send(departements)
}


module.exports = {
    getAllDepartement,

}