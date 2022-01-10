const {
    Departement
} = require('../models')

const getAllDepartement = async (req, res) => {
    const departements = await Departement.findAll({
        raw: true
    }).catch(err => err.message)
    res.send(departements)
}

const getDepartement = async (req, res) => {
    const departement = await Departement.findOne({
        raw: true
    }).catch(err => err.message)
    res.send(departement)
}

const updateDepartement = async (req, res) => {
    const {
        id
    } = req.params;
    const departement = await Departement.update(id)
        // .then(x => {
        //     if (x == 1) {
        //         res.send({
        //             message: 'Departement updated'
        //         })
        //     } else {
        //         res.send({
        //             message: 'cannot updated'
        //         })
        //     }
        // })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
    res.send(departement)
}


module.exports = {
    getAllDepartement,
    getDepartement,
    updateDepartement,

}