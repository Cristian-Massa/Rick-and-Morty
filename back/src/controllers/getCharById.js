const url = `https://rickandmortyapi.com/api/character`
const axios = require('axios')

const getCharById = (req, res) =>{
    const { id } = req.params

    async function obtenerPersonajes() {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          const data = await response.json();
          const personaje = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species,
          };
          return personaje;
        } catch (error) {
          throw new Error(error.message);
        }
      }
      
      obtenerPersonajes()
        .then((personaje) => {
          return res.status(200).json(personaje);
        })
        .catch((error) => {
          return res.status(500).json(error.message);
        });
}

// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios(`${URL}/${id}`)
//   .then((response) => response.data)
//   .then((data) => {
//       const character = {
//           id: data.id, 
//           image: data.image, 
//           name: data.name, 
//           gender: data.gender,
//           species: data.species
//       }
//       res.status(200).json(character);
//   })
//   .catch((error) => {
//       res.status(500).json({error: error.message})
//       //res.status(500).send("Hubo un error")
//   })
// }

module.exports = {
    getCharById
}