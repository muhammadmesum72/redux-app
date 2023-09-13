import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./state/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" text-center py-3 position-fixed top-0  w-100">
        <h1 className="py-1 bg-warning text-black">Counter App</h1>
        <h2 className="fs-6">Created by Mesum using React & Redux</h2>
      </div>
      <div className="d-flex flex-column gap-2 align-items-center  justify-content-center  vh-100 ">
        <div className="d-flex gap-5 align-items-center  justify-content-center">
          <button
            className="btn btn-danger "
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <div className="fs-1">{count}</div>
          <button
            className="btn btn-success"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div onClick={() => dispatch(reset())} className="btn btn-secondary">
          Reset
        </div>
      </div>
    </>
  );
}

export default App;
