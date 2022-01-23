import { useRecoilState, useResetRecoilState } from 'recoil';
import { counterState } from '../states/counter';

function useCounter() {
  const [counter, setCounter] = useRecoilState(counterState);
  const reset = useResetRecoilState(counterState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      window.alert('0보다 작을 수 없습니다.');
    } else {
      setCounter(counter - 1);
    }
  };

  return { counter, increment, decrement, reset };
}

export default useCounter;
