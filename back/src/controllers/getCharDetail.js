const axios = require('axios')
const getCharDetail = (req, res) => {
    const { id } = req.params

    const getCharDetail = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            const personajes = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin,
            }
            return personajes
        } catch (err) {
            throw new Error(err.message)
        }
    }
    getCharDetail()
        .then(data =>{
            return res.status(200).json(data)
        })
        .then(err =>{
            return res.status(404).json(err.message)
        })
}

module.exports = {
    getCharDetail
}