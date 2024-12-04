export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div id="wd-child-state">
          <h6>Child Counter {counter}</h6>

          <button onClick={() => setCounter(counter + 1)} 
                  className="button-common btn-green"
                  id="wd-increment-child-state-click">
            Increment</button>

          <button onClick={() => setCounter(counter - 1)}
                  className="button-common btn-red"
                  id="wd-decrement-child-state-click">
            Decrement</button>
          <hr/>

        </div>
    );}
    