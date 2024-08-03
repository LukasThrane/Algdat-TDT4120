"use client";
import { useState } from "react";
import { Queue } from "@/components/datastructures/classes/Queue";

const QueueComponent = () => {
  const [queue] = useState<Queue>(new Queue());
  const [value, setValue] = useState<number | null>(null);
  const [queueContents, setQueueContents] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("");

  const enqueue = () => {
    if (value !== null) {
      queue.enqueue(value);
      setQueueContents([...queue.queue.slice(queue.head, queue.tail)]);
      setValue(null);
      setMessage(`Enqueued value: ${value}`);
    }
  };

  const dequeue = () => {
    try {
      const dequeuedValue = queue.dequeue();
      setQueueContents([...queue.queue.slice(queue.head, queue.tail)]);
      setMessage(`Dequeued value: ${dequeuedValue}`);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <main className="flex flex-col items-center p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Queue Visualization</h2>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <input
          type="number"
          placeholder="Value"
          value={value !== null ? value : ""}
          onChange={(e) => setValue(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={enqueue}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Enqueue
        </button>
        <button onClick={dequeue} className="p-2 bg-red-500 text-white rounded">
          Dequeue
        </button>
      </div>
      {message && <div className="mt-4 p-2 bg-gray-200 rounded">{message}</div>}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Queue Contents</h3>
        <div className="flex space-x-2">
          {queueContents.map((item, index) => (
            <div key={index} className="border border-gray-300 p-2 rounded">
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default QueueComponent;
