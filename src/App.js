import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  multiplyByAmount,
} from "./redux/counter";
import "./App.css";
// useSelector - it's a hook that allows us to read our state
// useDispatch - a hook that allows us to change our state

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <header className="header">
        <h1>Redux Toolkit Counter App</h1>
      </header>
      <h2>Score: {count}</h2>
      <div className="box">
        <button className="btn" onClick={() => dispatch(increment())}>+</button>
        <button className="btn" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button className="btn" onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <button className="btn" onClick={() => dispatch(multiplyByAmount(5))}>*5</button>
      </div>
    </div>
  );
}

export default App;
