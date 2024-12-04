import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export default function CounterRedux() {
  const { count } = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();
  
  return (
    <div id="wd-counter-redux">
      <h5>Counter Redux</h5>
      <h6>{count}</h6>
      <button onClick={() => dispatch(increment())}
              className="button-common btn-green"
              id="wd-counter-redux-increment-click"> Increment </button>
      <button onClick={() => dispatch(decrement())}
              className="button-common btn-red"
              id="wd-counter-redux-decrement-click"> Decrement </button>
      <hr/>
    </div>
  );
}
