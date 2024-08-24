import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        // I return new object with the state not merging ONLY OVERWRITE the existing state.
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    };

    if (action.type === 'increase') {
        return {
            // i attach payload to the action
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    };

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: 0
        };
    };

    return state;
};


const store = createStore(counterReducer);

export default store;
