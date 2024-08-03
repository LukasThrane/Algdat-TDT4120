"use client";
import { useEffect, useRef, useState } from "react";

interface MergeSortProps {
  initialArray: number[];
}

const MergeSort: React.FC<MergeSortProps> = ({ initialArray }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray);
  }, [initialArray]);

  const mergeSort = async (
    arr: number[],
    start: number,
    end: number,
    setBars: (arr: number[]) => void
  ) => {
    if (end - start <= 1) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid, setBars);
    await mergeSort(arr, mid, end, setBars);

    let left = arr.slice(start, mid);
    let right = arr.slice(mid, end);
    let k = start,
      i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      setSelectedIndexes([k]);
      if (left[i] < right[j]) arr[k++] = left[i++];
      else arr[k++] = right[j++];
      setBars([...arr]);
      await new Promise(requestAnimationFrame);
    }
    while (i < left.length) {
      setSelectedIndexes([k]);
      arr[k++] = left[i++];
      setBars([...arr]);
      await new Promise(requestAnimationFrame);
    }
    while (j < right.length) {
      setSelectedIndexes([k]); // Highlight the index being merged
      arr[k++] = right[j++];
      setBars([...arr]);
      await new Promise(requestAnimationFrame);
    }
    setSelectedIndexes([]); // Clear the highlighted indexes
  };

  const startMergeSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    await mergeSort(arr, 0, arr.length, setArray);
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
      ctx.fillStyle = selectedIndexes.includes(index) ? "red" : "green";
      ctx.fillRect(index * width, canvas.height - height, width, height);
    });
  };

  useEffect(() => {
    drawBars(array);
  }, [array, selectedIndexes]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Merge Sort</h1>
      <canvas ref={canvasRef} width={500} height={300} />
      <button
        onClick={startMergeSort}
        disabled={isSorting}
        className="mt-4 p-2 bg-green-500 text-white"
      >
        {isSorting ? "Sorting..." : "Start Merge Sort"}
      </button>
    </main>
  );
};

export default MergeSort;
