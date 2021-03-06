export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const STORE_RESULT = 'STORE_RESULT';


export const increment =() => {
    return {
        type: INCREMENT
    };
}

export const decrement =() => {
    return {
        type: DECREMENT
    };
}

export const add = ( value ) => {
    return {
        type: ADD,
        val: value
    };
};

export const subtract = ( value ) => {
    return {
        type: SUBTRACT,
        val: value
    };
};

export const saveResult =(result) => {
    return {
        type: STORE_RESULT,
        result: result
    };  
}



export const storeResult =(result) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(saveResult(result))
        }, 4000);
            
    }
}

export const deleteResult =(resultElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resultElId 
    };  
}