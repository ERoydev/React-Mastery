const redux = require('redux');

// I create reducer that will change the store
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    } 
    
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
};

// i create the store and connect the reducer to it
const store = redux.createStore(counterReducer);

// i create subscriber that will get the latestState from the store
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// i subscribe my counterSubscriber to the store
store.subscribe(counterSubscriber);

// Here i send(dispatch) the type of action to the reducer
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

