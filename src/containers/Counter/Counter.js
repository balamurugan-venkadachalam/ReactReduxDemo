import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5Counter} />
                <hr/>
                <button onClick={this.props.storeCounterResult}>Submit Result</button>
                
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.deleteCounterResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        ctr: state.counter,
        storedResults: state.results
    }
};

const mapDispatchToPros = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type:'INCREMENT'}),
        onDecrementCounter: () => dispatch({type:'DECREMENT'}),
        onAdd5Counter: () => dispatch({type:'ADD', value: 5}),
        onSubtract5Counter: () => dispatch({type:'SUBTRACT', value: 5}),
        storeCounterResult: () => dispatch({type:'STORE_RESULT'}),
        deleteCounterResult: (id) => dispatch({type:'DELETE_RESULT', resultElId: id })
    }

}

export default connect(mapStateToProps, mapDispatchToPros)(Counter);