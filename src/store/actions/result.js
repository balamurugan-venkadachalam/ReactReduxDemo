import * as actionsTypes from '../actions/actionsTypes';


export const saveResult =(result) => {
    return {
        type: actionsTypes.STORE_RESULT,
        result: result
    };  
}



export const storeResult =(result) => {
    // return (dispatch, getState) => {}
    return dispatch => {
        setTimeout(()=> {
            //const oldState = getState().ctr.counter;
            dispatch(saveResult(result))
        }, 4000);
            
    }
}

export const deleteResult =(resultElId) => {
    return {
        type: actionsTypes.DELETE_RESULT,
        resultElId: resultElId 
    };  
}