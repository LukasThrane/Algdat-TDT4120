"use client";
import { useEffect, useRef, useState } from "react";
import { HashTable } from "@/components/datastructures/classes/HashTable";

const HashTableComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hashTable] = useState(new HashTable(10));
  const [key, setKey] = useState<number | "">("");
  const [value, setValue] = useState<number | "">("");
  const [message, setMessage] = useState<string>("");

  const drawTable = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const boxHeight = 50;
    const boxWidth = 80;
    const xStart = 10;
    const yStart = 10;
    const ySpacing = 60;

    for (let i = 0; i < hashTable.size; i++) {
      let current = hashTable.table[i];
      let x = xStart;
      let y = yStart + i * ySpacing;

      // Draw hash table index box
      ctx.fillStyle = "grey";
      ctx.fillRect(x, y, boxWidth, boxHeight);
      ctx.fillStyle = "white";
      ctx.fillText(i.toString(), x + 35, y + 30);

      x += 90;

      // Draw linked nodes
      while (current) {
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, boxWidth, boxHeight);
        ctx.fillStyle = "white";
        ctx.fillText(current.value.toString(), x + 35, y + 30);

        if (current.next) {
          ctx.strokeStyle = "black";
          ctx.beginPath();
          ctx.moveTo(x + boxWidth, y + boxHeight / 2);
          ctx.lineTo(x + boxWidth + 10, y + boxHeight / 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x + boxWidth + 5, y + boxHeight / 2 - 5);
          ctx.lineTo(x + boxWidth + 10, y + boxHeight / 2);
          ctx.lineTo(x + boxWidth + 5, y + boxHeight / 2 + 5);
          ctx.stroke();
        }

        x += 100;
        current = current.next;
      }
    }
  };

  const handleInsert = () => {
    if (key === "" || value === "") {
      setMessage("Please enter both key and value.");
      return;
    }
    hashTable.insert(key as number, value as any);
    setKey("");
    setValue("");
    drawTable();
    setMessage("Inserted successfully.");
  };

  const handleSearch = () => {
    if (key === "") {
      setMessage("Please enter a key to search.");
      return;
    }
    const result = hashTable.search(key as number);
    if (result !== null) {
      setMessage(`Found value: ${result}`);
    } else {
      setMessage("Key not found.");
    }
  };

  const handleDelete = () => {
    if (key === "") {
      setMessage("Please enter a key to delete.");
      return;
    }
    const result = hashTable.delete(key as number);
    if (result) {
      setMessage(`Key ${key} deleted.`);
      setKey("");
      setValue("");
    } else {
      setMessage("Key not found.");
    }
    drawTable();
  };

  useEffect(() => {
    drawTable();
  }, []);

  return (
    <main className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Hash Table Visualization</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={700}
        className="border border-gray-300"
      />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
        <input
          type="number"
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(parseInt(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleInsert}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Insert
        </button>
        <button
          onClick={handleSearch}
          className="p-2 bg-yellow-500 text-white rounded"
        >
          Search
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
      {message && <div className="mt-4 p-2 bg-gray-200 rounded">{message}</div>}
    </main>
  );
};

export default HashTableComponent;
