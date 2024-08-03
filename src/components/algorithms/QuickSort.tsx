"use client";
import { useEffect, useRef, useState } from "react";

interface QuicksortProps {
  arrayLength: number;
}

const Quicksort: React.FC<QuicksortProps> = ({ arrayLength }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const array = Array.from(
      { length: arrayLength },
      () => Math.floor(Math.random() * 300) + 10
    );
    setArray(array);
    drawBars(array);
  }, [arrayLength]);

  const quicksort = async (
    arr: number[],
    left: number,
    right: number,
    setBars: (arr: number[]) => void
  ) => {
    if (left >= right) return;

    const pivotIndex = await partition(arr, left, right, setBars);
    await quicksort(arr, left, pivotIndex - 1, setBars);
    await quicksort(arr, pivotIndex + 1, right, setBars);
  };

  const partition = async (
    arr: number[],
    left: number,
    right: number,
    setBars: (arr: number[]) => void
  ) => {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      setSelectedIndexes([i, j]); // Highlight the indexes being compared
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setBars([...arr]);
        await new Promise(requestAnimationFrame);
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    setBars([...arr]);
    await new Promise(requestAnimationFrame);
    setSelectedIndexes([]); // Clear the highlighted indexes
    return i + 1;
  };

  const startQuicksort = async () => {
    setIsSorting(true);
    let arr = [...array];
    await quicksort(arr, 0, arr.length - 1, setArray);
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
      <h1>Quicksort Visualization</h1>
      <canvas ref={canvasRef} width={500} height={300} />
      <button
        onClick={startQuicksort}
        disabled={isSorting}
        className="mt-4 p-2 bg-green-500 text-white"
      >
        {isSorting ? "Sorting..." : "Start Quicksort"}
      </button>
    </main>
  );
};

export default Quicksort;
