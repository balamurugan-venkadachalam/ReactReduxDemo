import * as actionType from '../../store/actions/actionsTypes';
import {updateObject} from '../utility';

const initialState ={
    counter:1
}


const counterReducer =(state = initialState, action) =>{
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
                counter: state.counter + action.val
            }
        break;
        case actionType.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.val});
       //     return {     
       //         ...state,       
       //         counter: state.counter - action.val
       //     }
        break;  
    }


    return state;
}



export default counterReducer;