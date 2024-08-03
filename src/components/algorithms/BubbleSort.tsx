"use client";
import { useEffect, useRef, useState } from "react";

const BubbleSort = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    const array = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * 300) + 10
    );
    setArray(array);
    drawBars(array);
  }, []);

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let len = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
          setArray([...arr]);
          await new Promise(requestAnimationFrame);
        }
      }
    } while (swapped);
    setIsSorting(false);
  };

  const drawBars = (arr: number[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width / arr.length;
    arr.forEach((height, index) => {
      ctx.fillStyle = "blue";
      ctx.fillRect(index * width, canvas.height - height, width, height);
    });
  };

  useEffect(() => {
    drawBars(array);
  }, [array]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Bubble Sort</h1>
      <canvas ref={canvasRef} width={500} height={300} />
      <button
        onClick={bubbleSort}
        disabled={isSorting}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        {isSorting ? "Sorting..." : "Start Bubble Sort"}
      </button>
    </main>
  );
};

export default BubbleSort;
