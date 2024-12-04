export default function PassingFunctions(
    { theFunction }: { theFunction: () => void }) {
    return (
    <div>
        <h5>Passing Functions</h5>
        <button onClick={theFunction} className="btn btn-primary">
            Invoke the Function
        </button>
        <hr/>
    </div>
   );}
   