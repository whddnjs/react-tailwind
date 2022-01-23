import DefaultLayout from '../components/layouts/DefaultLayout';
import useCounter from '../core/hooks/useCounter';

function Counter() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <DefaultLayout>
      <div className="text-2xl">카운터</div>
      <div className="text-4xl">{counter}</div>
      <button onClick={increment} className="px-1 mr-1 border border-black">
        증가
      </button>
      <button onClick={decrement} className="px-1 mr-1 border border-black">
        감소
      </button>
      <button onClick={reset} className="px-1 border border-black">
        리셋
      </button>
    </DefaultLayout>
  );
}

export default Counter;
