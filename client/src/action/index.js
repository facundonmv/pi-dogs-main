import axios from 'axios'

export function getDogs(){
    return async function(dispatch){
        var {data} = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: 'GET_DOGS',
            payload: data
        })
    }
}

export function getTemperaments(){
    return async function (dispatch){
        var {data} = await axios.get("http://localhost:3001/temperament")
   return dispatch({
    type: 'GET_TEMPERAMENTS',
    payload: data
   })
    }
}

export function getId(id){
    return async function(dispatch){
        const {data} = await axios.get('http://localhost:3001/dogs' + '/' + id)
        return dispatch({
            type: 'GET_ID',
            payload: data
        })
    }
}

export function getSearch(payload){
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/dogs?name=${payload}`)
        return dispatch({
            type: 'GET_SEARCH',
            payload: data
        })
    }
}

export function getPost (payload) {  
    return async function (dispatch) {
        var json = await axios.post("http://localhost:3001/dog", payload);  
        /* console.log(json)*/                                                  
        return dispatch ({
            type: "GET_POST",
            payload: json.data
        })
    }
  };

export const orderAlpha = (payload) =>{
    return{
        type: 'ORDER_ALPHA',
        payload
    }
}

export const filterTemp = (payload) =>{
    return{
        type: 'FILTER_TEMP',
        payload
    }
}

export const filterWeight = (payload) => {
    return {
        type: 'FILTER_WEIGHT',
        payload
    }
}

export const filterCreated = (payload) => {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}