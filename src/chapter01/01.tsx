import { useState } from 'react';

const useCount = (): [number, () => void] => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(count => count + 1);

  return [count, increase];
};

export default function Component() {
  const [count, increase] = useCount();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+1</button>
    </div>
  );
}
