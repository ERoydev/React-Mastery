import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); 
  // Dispatch an action against my redux Store

  const show = useSelector(state => state.counter.showCounter); //* i can use this multiple time to retrieve different pieces of data from the state

  const counter = useSelector(state => state.counter.counter); //* i just get tiny slice from the store
  // With useSelector React Redux automatically set up a subscription to the store for this component
  // My component will be UPDATED and will recieve the latest counter automatically whenever that data changes in redux store
  
  // Change to redux store will make my component to re-mount to update changed data
  // If this component was removed from the DOM React Redux will clear this subscription
  
  const incrementHandler = () => {
    // Po tozi nachin podavam action-a vmesto da pisha ({type: 'increment'}) izpolzvam imeto na metoda direktno
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // i attach payload to the action
    // dispatch({ type: 'increase', amount: 5})
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* Tipical conditional rendering */}
      {show && <div className={classes.value}>{counter}</div> }

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
