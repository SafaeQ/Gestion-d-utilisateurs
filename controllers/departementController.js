const {
    Departements
} = require('../models')

const getAllDepartement = async (req, res) => {
    const departements = await Departements.findAll({
        raw: true
    }).catch(err => err.message)
    // res.render('test', {
    //     departements: departements
    // })
    res.send(departements)
}

const getDepartement = async (req, res) => {
    const departement = await Departements.findOne({
        raw: true
    }).catch(err => err.message)
    // res.render('home', {
    //     departements: [departement]
    // })
    res.send(departement)
}

const createDepartement = async (req, res) => {
    // validate request

    if (!req.body.name_departement || !req.body.description === null) {
        res.status(400).send({
            message: 'Empty request'
        })
        return
    }

    // creation of the depatement
    const {
        name_departement,
        description
    } = await req.body
    const departement = await Departements.create({
        name_departement,
        description
    }).catch(err => console.error(err))
    // .catch(err => {
    //     res.status(505).send({
    //         message: err.message || 'Something went wrong'
    //     })
    // })
    // await res.render('home', {
    //     departement: name_departemen,
    //     departement: description
    // })
    res.send(departement)
}

const updateDepartement = async (req, res) => {
    const {
        id
    } = req.params;
    const data = req.body;
    const departement = await Departements.update(data, {
            where: {
                id: id
            },
        })
        .then(x => {
            if (x == 1) {
                res.send({
                    message: `Departement updated id: ${id}`
                })
            } else {
                res.send({
                    message: `cannot updated id: ${id}`
                })
            }
        })
        .catch(err => console.log(err))

    // await res.render('home', {
    //     departement: departement
    // })

    res.send(departement)
}

const deleteDepartement = async (req, res) => {
    const {
        id
    } = req.params;
    const departement = await Departements.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.send(`destroy the data id: ${id}`)
    }).catch(err => console.log(err))

    res.send(departement)

}

module.exports = {
    getAllDepartement,
    getDepartement,
    updateDepartement,
    createDepartement,
    deleteDepartement
}