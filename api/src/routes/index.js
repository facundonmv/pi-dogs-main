const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Dog, Temperament} = require('../db')
const axios = require('axios')
const {API_KEY} = process.env

const router = Router();
const { showAllDogs, showDogsById} = require('../controller/index')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', showAllDogs)
router.get('/dogs/:id', showDogsById)

router.get("/temperament", async (req, res) => {   
    const temperamentApi = (await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    )).data
    let temperaments = temperamentApi.map((ob) => ob.temperament);
    temperaments = temperaments.join().split(",");
    temperaments = temperaments.filter (ob => ob)
    temperaments = [...new Set (temperaments)].sort();                         
    temperaments.forEach((ob) => {  
      Temperament.findOrCreate({   
        where: { name: ob },       
      });
    });
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
  });

router.post('/dog', async (req , res) => {
try {
    const {name, weight, height, life_span, temperament} = req.body
    
    const createDog = await Dog.create({
        name, height, weight, life_span
    })
    const tempsDb = await Temperament.findAll({
        where: {name: temperament}
    })
    createDog.addTemperament(tempsDb)
    res.send('Raza creada exitosamente')
} catch (error) {
    console.log(error)
}
})

module.exports = router;
