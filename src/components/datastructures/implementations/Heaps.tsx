"use client";
import { useState } from "react";
import { Heap } from "@/components/datastructures/classes/Heap";

const HeapComponent = () => {
  const [heap] = useState(new Heap<number>((a, b) => a < b)); // Min-heap comparator
  const [value, setValue] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const insert = () => {
    if (value !== null) {
      heap.insert(value);
      setValue(null);
      setMessage(`Inserted value: ${value}`);
    }
  };

  const extract = () => {
    const extractedValue = heap.extract();
    if (extractedValue !== null) {
      setMessage(`Extracted value: ${extractedValue}`);
    } else {
      setMessage("Heap is empty");
    }
  };

  const renderHeap = () => {
    if (heap.size() === 0) {
      return <p>The heap is empty.</p>;
    }

    const levels: number[][] = [];
    let level = 0;
    let index = 0;

    while (index < heap.size()) {
      const levelSize = 2 ** level;
      levels.push(heap["heap"].slice(index, index + levelSize));
      index += levelSize;
      level++;
    }

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Heap Contents</h3>
        <div className="flex flex-col items-center">
          {levels.map((level, i) => (
            <div key={i} className="flex space-x-2">
              {level.map((value, j) => (
                <div
                  key={j}
                  className="border border-gray-300 p-2 rounded bg-gray-200 text-center"
                  style={{ minWidth: "40px" }}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Heap Visualization</h2>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <input
          type="number"
          placeholder="Value"
          value={value !== null ? value : ""}
          onChange={(e) => setValue(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
        <button onClick={insert} className="p-2 bg-blue-500 text-white rounded">
          Insert
        </button>
        <button onClick={extract} className="p-2 bg-red-500 text-white rounded">
          Extract
        </button>
      </div>
      {message && <div className="mt-4 p-2 bg-gray-200 rounded">{message}</div>}
      {renderHeap()}
    </main>
  );
};

export default HeapComponent;
