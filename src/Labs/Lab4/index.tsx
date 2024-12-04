import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    
    return (
      <div id="wd-lab4">
        <h2>Lab 4</h2>
        <h3> Handle User Event </h3>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />

        <h3> Manage Component State: useState </h3>
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        
        <h3> Manage Application State: Redux </h3>
            <ReduxExamples />
      </div>
    );
  }
  