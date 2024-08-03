"use client";
import { useEffect, useRef, useState } from "react";

interface ListNode {
  value: number;
  next: ListNode | null;
}

const LinkedList = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [head, setHead] = useState<ListNode | null>(null);
  const [value, setValue] = useState<number | "">("");

  const drawList = (head: ListNode | null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let current = head;
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

  const handleInsert = () => {
    if (value === "") return;
    const newNode: ListNode = { value: value as number, next: head };
    setHead(newNode);
    setValue("");
    drawList(newNode);
  };

  const handleDelete = () => {
    if (!head) return;
    const newHead = head.next;
    setHead(newHead);
    drawList(newHead);
  };

  useEffect(() => {
    drawList(head);
  }, [head]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Linked List Visualization</h1>
      <canvas ref={canvasRef} width={800} height={100} />
      <div className="flex space-x-4 mt-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="p-2 border"
        />
        <button onClick={handleInsert} className="p-2 bg-blue-500 text-white">
          Insert
        </button>
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white">
          Delete
        </button>
      </div>
    </main>
  );
};

export default LinkedList;
