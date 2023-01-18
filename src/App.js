import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";

// useSelector - it's a hook that allows us to read our state
// useDispatch - a hook that allows us to change our state

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Score: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
