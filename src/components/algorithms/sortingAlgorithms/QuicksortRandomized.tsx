"use client";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";

interface QuicksortRandomizedProps {
  initialArray: number[];
}

const QuicksortRandomized = forwardRef<{ start: () => void }, QuicksortRandomizedProps>(({ initialArray }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray);
  }, [initialArray]);

  useImperativeHandle(ref, () => ({
    start: () => startQuicksort(),
  }));

  const quicksort = async (
    arr: number[],
    left: number,
    right: number,
    setBars: (arr: number[]) => void
  ) => {
    if (left >= right) return;

    const pivotIndex = await randomizedPartition(arr, left, right, setBars);
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
      setSelectedIndexes([i, j]);
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
    setSelectedIndexes([]);
    return i + 1;
  };

  const randomizedPartition = async (
    arr: number[],
    left: number,
    right: number,
    setBars: (arr: number[]) => void
  ) => {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]; // Swap pivot with right
    return await partition(arr, left, right, setBars);
  };

  const startQuicksort = async () => {
    let arr = [...array];
    await quicksort(arr, 0, arr.length - 1, setArray);
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
    <div className="flex flex-col items-center p-4 border">
      <h1>Randomized Quicksort</h1>
      <canvas ref={canvasRef} width={500} height={300} />
    </div>
  );
});

export default QuicksortRandomized;
