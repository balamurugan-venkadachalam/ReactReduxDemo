import * as actionType from '../store/actions/actions';

const initialState ={
    counter:1,
    results:[]
}


const reducer =(state = initialState, action) =>{
    switch(action.type){
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
            break;
        case actionType.DECREMENT:
        return {     
            ...state,       
            counter: state.counter - 1
        }
        break;
        case actionType.ADD:
            return {     
                ...state,       
                counter: state.counter + action.value
            }
        break;
        case actionType.SUBTRACT:
            return {     
                ...state,       
                counter: state.counter - action.value
            }
        break;
        case actionType.STORE_RESULT:
        return {     
            ...state,       
            results: state.results.concat({id: new Date(),value:state.counter})
        }
        break;
        case actionType.DELETE_RESULT:
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1)
        const updatedArray = state.results.filter(result => result.id !== action.resultElId);
        return {
            ...state,
            results: updatedArray
        }
        break;
    }


    return state;
}



export default reducer;