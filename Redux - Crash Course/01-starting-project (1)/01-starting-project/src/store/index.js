import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {
    counter: 0,
    showCounter: true
}

// Prepare a slice of our global state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            // Here i am allowed to mutate the state
            // the toolkit will take care so in reality i dont mutate the state again
            // redux use imgur => automatically clone existing state, create a new state object and overwrite the state that im editing in immutable way
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         // I return new object with the state not merging ONLY OVERWRITE the existing state.
//         // state.counter += 1 NOT ALLOWED TO MUTATE LIKE THAT
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     };

//     if (action.type === 'increase') {
//         return {
//             // i attach payload to the action
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     };

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: 0
//         };
//     };

//     return state;
// };
// const store = createStore(counterReducer);


const store = configureStore({
    reducer: counterSlice.reducer
})

// Object that have reducer methods and its names
export const counterActions = counterSlice.actions;

export default store;
