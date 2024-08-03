"use client";
import { useEffect, useRef, useState } from "react";
import { LinkedList } from "@/components/datastructures/classes/LinkedList";

const LinkedListComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [linkedList] = useState(new LinkedList());
  const [value, setValue] = useState<number | "">("");
  const [searchValue, setSearchValue] = useState<number | "">("");
  const [insertAfterValue, setInsertAfterValue] = useState<number | "">("");
  const [message, setMessage] = useState<string>("");

  const drawList = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let current = linkedList.head;
    let x = 10;
    const y = 40;
    while (current) {
      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, 50, 30);
      ctx.fillStyle = "white";
      ctx.fillText(current.value.toString(), x + 20, y + 20);

      if (current.next) {
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(x + 50, y + 15);
        ctx.lineTo(x + 80, y + 15);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + 75, y + 10);
        ctx.lineTo(x + 80, y + 15);
        ctx.lineTo(x + 75, y + 20);
        ctx.stroke();
      }

      x += 70;
      current = current.next;
    }
  };

  const handlePrepend = () => {
    if (value === "") {
      setMessage("Please enter a value to insert.");
      return;
    }
    linkedList.prepend(value as number);
    setValue("");
    drawList();
    setMessage(`Inserted value: ${value}`);
  };

  const handleInsertAfter = () => {
    if (insertAfterValue === "" || value === "") {
      setMessage("Please enter both values to insert after.");
      return;
    }
    linkedList.insertAfter(insertAfterValue as number, value as number);
    setInsertAfterValue("");
    setValue("");
    drawList();
    setMessage(`Inserted value: ${value} after ${insertAfterValue}`);
  };

  const handleInsertAtEnd = () => {
    if (value === "") {
      setMessage("Please enter a value to insert.");
      return;
    }
    linkedList.insertAtEnd(value as number);
    setValue("");
    drawList();
    setMessage(`Inserted value: ${value} at the end.`);
  };

  const handleSearch = () => {
    if (searchValue === "") {
      setMessage("Please enter a value to search.");
      return;
    }
    const result = linkedList.search(searchValue as number);
    if (result) {
      setMessage(`Found value: ${searchValue}`);
    } else {
      setMessage(`Value ${searchValue} not found.`);
    }
  };

  const handleDelete = () => {
    if (value === "") {
      setMessage("Please enter a value to delete.");
      return;
    }
    linkedList.delete(value as number);
    setValue("");
    drawList();
    setMessage(`Deleted value: ${value}`);
  };

  useEffect(() => {
    drawList();
  }, [linkedList.head]);

  return (
    <main className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Linked List Visualization</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={100}
        className="border border-gray-300"
      />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center space-y-2">
          <input
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-2">
            <button
              onClick={handlePrepend}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Prepend
            </button>
            <button
              onClick={handleInsertAtEnd}
              className="p-2 bg-green-500 text-white rounded"
            >
              Insert at End
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <input
            type="number"
            placeholder="After Value"
            value={insertAfterValue}
            onChange={(e) => setInsertAfterValue(parseInt(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleInsertAfter}
            className="p-2 bg-purple-500 text-white rounded"
          >
            Insert After
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <input
            type="number"
            placeholder="Search Value"
            value={searchValue}
            onChange={(e) => setSearchValue(parseInt(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-yellow-500 text-white rounded"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded self-center md:self-start"
        >
          Delete
        </button>
      </div>
      {message && <div className="mt-4 p-2 bg-gray-200 rounded">{message}</div>}
    </main>
  );
};

export default LinkedListComponent;
