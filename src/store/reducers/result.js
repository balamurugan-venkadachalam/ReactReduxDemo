import * as actionType from '../../store/actions/actionsTypes';

const initialState ={
    results:[]
}


const resultReducer =(state = initialState, action) =>{
    switch(action.type){

        case actionType.STORE_RESULT:
        console.log('action.result ', action.result)
        return {     
            ...state,       
            results: state.results.concat({id: new Date(), value: action.result})
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



export default resultReducer;