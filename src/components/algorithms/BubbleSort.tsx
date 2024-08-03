"use client";
import { useEffect, useRef, useState } from "react";

interface BubbleSortProps {
  initialArray: number[];
}

const BubbleSort: React.FC<BubbleSortProps> = ({ initialArray }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray);
  }, [initialArray]);

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let len = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        setSelectedIndexes([i, i + 1]);
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
          setArray([...arr]);
          await new Promise(requestAnimationFrame);
        }
      }
    } while (swapped);
    setSelectedIndexes([]);
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
      ctx.fillStyle = selectedIndexes.includes(index) ? "red" : "blue";
      ctx.fillRect(index * width, canvas.height - height, width, height);
    });
  };

  useEffect(() => {
    drawBars(array);
  }, [array, selectedIndexes]);

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
