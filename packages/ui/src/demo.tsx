import { useState } from 'react';
import { Button } from './button';

function Demo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="to-gray-100 text-4xl">WXT Monorepo Demo</h1>
      <Button appName="web">Open alert</Button>
      <div className="card" id="s">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>packages/ui/src/demo.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the WXT and React logos to learn more</p>
    </>
  );
}

export default Demo;
