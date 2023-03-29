 const express = require('express')
 const { getCharById } = require('../controllers/getCharById')
 const { getCharDetail } = require('../controllers/getCharDetail')
 let favs = require('../utils/favs')
 const router = express.Router();

 
 
 router.get('/onsearch/:id', getCharById)
 router.get('/detail/:id', getCharDetail)


router.post('/fav', (req, res) =>{
   const {id, name, image, gender, species} = req.body
   if(!id || !name || !image || !gender){
      return res.status(404).send('Faltan datos')
   }
   else{
      const newCharacter = {
         id,
         name,
         image,
         gender,
         species
      }
      favs.push(newCharacter)
      res.status(200).json(favs)
   }
})

router.get('/fav', (req, res) =>{
   res.status(200).json(favs);
})

router.delete('/fav/:id', (req, res) =>{
   const { id } = req.params
   let filter = favs.filter( element => element.id !== Number(id))
   favs = filter
   res.status(200).send('se elimino existosamente')

})


 module.exports = router
 