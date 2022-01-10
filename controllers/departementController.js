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
    res.render('home', {
        departements: [departement]
    })
}

const createDepartement = async (req, res) => {
    const {
        title,
        description
    } = await req.body
    const departement = await Departement.create({
        title,
        description
    })
}

const updateDepartement = async (req, res) => {
    const {
        id
    } = req.params;
    const data = req.body;
    const departement = await Departement.update(data, {
            where: {
                id: id
            },
        })
        .then(x => {
            if (x == 1) {
                res.send({
                    message: 'Departement updated'
                })
            } else {
                res.send({
                    message: 'cannot updated'
                })
            }
        })
        .catch(err => console.log(err))
    res.send(departement)
}


module.exports = {
    getAllDepartement,
    getDepartement,
    updateDepartement,
    createDepartement,

}