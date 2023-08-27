import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    decrementByValue,
    increment,
    incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         {/* Increment */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-4">Counter</h2>
        <div className="mb-2 flex justify-center items-center gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch(increment())}
          >
            Increment 1
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch(incrementByValue(5))}
          >
            Increment 5
          </button>
        </div>
        <div className="mb-2 text-center border border-emerald-500">
          <h2 className="text-xl font-semibold">{count}</h2>
        </div>
        {/* Decrement */}
        <div className="flex justify-center items-center gap-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            onClick={() => dispatch(decrement())}
          >
            Decrement 1
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            onClick={() => dispatch(decrementByValue(5))}
          >
            Decrement 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
