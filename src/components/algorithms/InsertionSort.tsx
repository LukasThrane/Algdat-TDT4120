"use client";
import { useEffect, useRef, useState } from "react";

interface InsertionSortProps {
  initialArray: number[];
}

const InsertionSort: React.FC<InsertionSortProps> = ({ initialArray }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray);
  }, [initialArray]);

  const insertionSort = async (
    arr: number[],
    setBars: (arr: number[]) => void
  ) => {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        setSelectedIndexes([j, j + 1]);
        arr[j + 1] = arr[j];
        j = j - 1;
        setBars([...arr]);
        await new Promise(requestAnimationFrame);
      }
      arr[j + 1] = key;
      setSelectedIndexes([]);
      setBars([...arr]);
      await new Promise(requestAnimationFrame);
    }
  };

  const startInsertionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    await insertionSort(arr, setArray);
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
      <h1>Insertion Sort</h1>
      <canvas ref={canvasRef} width={500} height={300} />
      <button
        onClick={startInsertionSort}
        disabled={isSorting}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        {isSorting ? "Sorting..." : "Start Insertion Sort"}
      </button>
    </main>
  );
};

export default InsertionSort;
