const axios = require('axios')
const {Dog, Temperament} = require('../db')
const { API_KEY } = process.env

const getApiDogs = async () =>{
    try {
        const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

        const apiDogsInfo = await apiDogs.data.map((e) => {
            return {
                id: e.id,
                name: e.name,
                height: e.height.metric,
                weight: e.weight.metric,
                image: e.image.url,
                life_span: e.life_span,
                temperament: e.temperament
            }
        })
        return apiDogsInfo
    } catch (error) {
        console.log(error)
        resizeBy.status(500).send('nununu')
    }
}

const getDbDogs = async () => {
    return await Dog.findAll({            
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

const getApiDb = async () => {
    const apiInfo = await getApiDogs()
    const dbInfo = await getDbDogs()
    const allDog = apiInfo.concat(dbInfo)
    return allDog
}

const showAllDogs = async (req, res) => {
    try {
        const allDogs = await getApiDb()
        const {name} = req.query

        if(name){
            const filterDogs = allDogs.filter((e) => 
            e.name.toLowerCase().includes(name.toLowerCase())
            );
            res.json(filterDogs)
        } else {
            res.json(allDogs)
        }
    } catch (error) {
        console.log(error)
    }
}

const showDogsById = async (req, res) => {
    try {
        const allDogs = await getApiDb()
        const {id} = req.params

        if(id){
            const filterDogsId = allDogs.find((e) => e.id.toString() === id.toString())

            if(filterDogsId){
                res.json(filterDogsId)
            } else {
                res.status(404).send(`${id} no se encontro`)
            }
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports = { showAllDogs, showDogsById}