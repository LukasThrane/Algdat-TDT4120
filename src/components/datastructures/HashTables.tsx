"use client";
import { useEffect, useRef, useState } from "react";

interface HashNode {
  key: number;
  value: number;
  next: HashNode | null;
}

const HashTable = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [table, setTable] = useState<(HashNode | null)[]>([]);
  const [key, setKey] = useState<number | "">("");
  const [value, setValue] = useState<number | "">("");

  const TABLE_SIZE = 10;

  const hashFunction = (key: number) => {
    return key % TABLE_SIZE;
  };

  const drawTable = (table: (HashNode | null)[]) => {
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

    table.forEach((node, index) => {
      let x = xStart;
      let y = yStart + index * ySpacing;

      // Draw hash table index box
      ctx.fillStyle = "grey";
      ctx.fillRect(x, y, boxWidth, boxHeight);
      ctx.fillStyle = "white";
      ctx.fillText(index.toString(), x + 35, y + 30);

      x += 90;
      let current = node;

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
    });
  };

  const handleInsert = () => {
    if (key === "" || value === "") return;
    const newTable = [...table];
    const hashKey = hashFunction(key as number);
    const newNode: HashNode = { key: key as number, value: value as number, next: newTable[hashKey] };
    newTable[hashKey] = newNode;
    setTable(newTable);
    setKey("");
    setValue("");
    drawTable(newTable);
  };

  const handleSearch = () => {
    if (key === "") return;
    const hashKey = hashFunction(key as number);
    let current = table[hashKey];
    while (current) {
      if (current.key === key) {
        alert(`Found value: ${current.value}`);
        return;
      }
      current = current.next;
    }
    alert("Key not found");
  };

  const handleDelete = () => {
    if (key === "") return;
    const newTable = [...table];
    const hashKey = hashFunction(key as number);
    let current = newTable[hashKey];
    if (!current) return;
    if (current.key === key) {
      newTable[hashKey] = current.next;
    } else {
      let prev = current;
      current = current.next;
      while (current) {
        if (current.key === key) {
          prev.next = current.next;
          break;
        }
        prev = current;
        current = current.next;
      }
    }
    setTable(newTable);
    setKey("");
    drawTable(newTable);
  };

  useEffect(() => {
    const initialTable: (HashNode | null)[] = new Array(TABLE_SIZE).fill(null);
    setTable(initialTable);
    drawTable(initialTable);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hash Table Visualization</h1>
      <canvas ref={canvasRef} width={800} height={700} />
      <div className="flex space-x-4 mt-4">
        <input
          type="number"
          value={key}
          onChange={(e) => setKey(parseInt(e.target.value))}
          className="p-2 border"
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="p-2 border"
        />
        <button onClick={handleInsert} className="p-2 bg-blue-500 text-white">
          Insert
        </button>
        <button onClick={handleSearch} className="p-2 bg-yellow-500 text-white">
          Search
        </button>
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white">
          Delete
        </button>
      </div>
    </main>
  );
};

export default HashTable;
