"use client";
import { useState } from 'react';

const Queue = () => {
  const [queue, setQueue] = useState<number[]>([]);
  const [value, setValue] = useState<number | null>(null);

  const enqueue = () => {
    if (value !== null) {
      setQueue([...queue, value]);
      setValue(null);
    }
  };

  const dequeue = () => {
    setQueue(queue.slice(1));
  };

  return (
    <div>
      <h2>Queue</h2>
      <div className="flex space-x-2">
        <input
          type="number"
          value={value !== null ? value : ""}
          onChange={(e) => setValue(Number(e.target.value))}
          className="border p-2"
        />
        <button onClick={enqueue} className="p-2 bg-blue-500 text-white">Enqueue</button>
        <button onClick={dequeue} className="p-2 bg-red-500 text-white">Dequeue</button>
      </div>
      <div className="mt-4">
        <h3>Queue Contents</h3>
        <div className="flex space-x-2">
          {queue.map((item, index) => (
            <div key={index} className="border p-2">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
