"use client";
import { useState } from "react";
import { Stack } from "@/components/datastructures/classes/Stack";

const StackComponent = () => {
  const [stack] = useState(new Stack());
  const [value, setValue] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const push = () => {
    if (value !== null) {
      stack.push(value);
      setValue(null);
      setMessage(`Pushed value: ${value}`);
    }
  };

  const pop = () => {
    try {
      const poppedValue = stack.pop();
      setMessage(`Popped value: ${poppedValue}`);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <main className="flex flex-col items-center p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Stack Visualization</h2>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <input
          type="number"
          placeholder="Value"
          value={value !== null ? value : ""}
          onChange={(e) => setValue(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
        <button onClick={push} className="p-2 bg-blue-500 text-white rounded">
          Push
        </button>
        <button onClick={pop} className="p-2 bg-red-500 text-white rounded">
          Pop
        </button>
      </div>
      {message && <div className="mt-4 p-2 bg-gray-200 rounded">{message}</div>}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Stack Contents</h3>
        <div className="flex space-x-2">
          {stack.stack.slice(0, stack.top).map((item, index) => (
            <div key={index} className="border border-gray-300 p-2 rounded">
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default StackComponent;
