"use client";
import { useState } from 'react';

const Stack = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [value, setValue] = useState<number | null>(null);

  const push = () => {
    if (value !== null) {
      setStack([...stack, value]);
      setValue(null);
    }
  };

  const pop = () => {
    setStack(stack.slice(0, -1));
  };

  return (
    <div>
      <h2>Stack</h2>
      <div className="flex space-x-2">
        <input
          type="number"
          value={value !== null ? value : ""}
          onChange={(e) => setValue(Number(e.target.value))}
          className="border p-2"
        />
        <button onClick={push} className="p-2 bg-blue-500 text-white">Push</button>
        <button onClick={pop} className="p-2 bg-red-500 text-white">Pop</button>
      </div>
      <div className="mt-4">
        <h3>Stack Contents</h3>
        <div className="flex space-x-2">
          {stack.map((item, index) => (
            <div key={index} className="border p-2">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
