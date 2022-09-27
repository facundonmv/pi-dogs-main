const initialState = {
    dogs: [],
    allDogs: [],
    orderDogs: [],
    weightDogs: [],
    temperament: [],
    detail: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
            case 'GET_TEMPERAMENTS':
                return{
                    ...state,
                    temperament: action.payload
                }
                case 'GET_ID':
                    return{
                        ...state,
                        detail: action.payload
                    }
                    case 'GET_SEARCH':
                        return {
                            ...state,
                            dogs: action.payload === '' ? state.allDogs : action.payload
                        }
                        case 'GET_POST':
                            return{
                                ...state
                            }
                            case 'ORDER_ALPHA':
                                let arr = action.payload === 'az' ?
                                state.dogs.sort(function(a,b) {
                                    if (a.name > b.name){
                                        return 1
                                    }
                                    if (b.name > a.name){
                                        return -1
                                    }
                                    return 0
                                }):
                                state.dogs.sort(function(a,b){
                                    if (a.name > b.name){
                                        return -1
                                    }
                                    if (b.name > a.name){
                                        return 1
                                    }
                                    return 0
                                })
                                return{
                                    ...state,
                                    dogs: arr
                                }
                                case 'FILTER_TEMP':
                                    const allDogs = state.allDogs
                                    const filterDogs = allDogs.filter((e) => 
                                        e.temperament?.includes(action.payload)
                                    )
                                    return {
                                        ...state,
                                        dogs: filterDogs
                                    }
                                    case 'FILTER_WEIGHT':
                                        const DogsWeight = action.payload === 'Weight 1' ?
                                        state.dogs.sort(function(a,b) {
                                            if(typeof action.payload.weight === 'string'){
                                                if (a.weight > b.weight) {
                                                    return 1
                                                }
                                                if (a.weight < b.weight){
                                                    return -1
                                                }
                                                return 0
                                            } else {
                                                if (parseInt(a.weight) > parseInt(b.weight)){
                                                    return 1
                                                }
                                                if (parseInt(a.weight) < parseInt(b.weight)){
                                                    return -1
                                                }
                                                return 0
                                            }
                                        }) :
                                        state.dogs.sort(function(a,b) {
                                            if(typeof action.payload.weight === 'string'){
                                                if (a.weight > b.weight) {
                                                    return -1
                                                }
                                                if (a.weight < b.weight){
                                                    return 1
                                                }
                                                return 0
                                            } else {
                                                if (parseInt(a.weight) > parseInt(b.weight)){
                                                    return -1
                                                }
                                                if (parseInt(a.weight) < parseInt(b.weight)){
                                                    return 1
                                                }
                                                return 0
                                            }
                                        })
                                        return {
                                            ...state,
                                            dogs: DogsWeight
                                        }
                                        case 'FILTER_CREATED':
                                            const filterCreated = action.payload === 'Created' ? state.allDogs.filter((e) => e.createdInDb) :
                                            state.allDogs.filter((e) => !e.createdInDb)
                                            return{
                                                ...state,
                                                dogs: action.payload === 'All' ? state.allDogs : filterCreated
                                            }
                                            default: return state
    }
}