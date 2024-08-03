"use client";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";

interface MergeSortProps {
  initialArray: number[];
}

const MergeSort = forwardRef<{ start: () => void }, MergeSortProps>(({ initialArray }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray);
  }, [initialArray]);

  useImperativeHandle(ref, () => ({
    start: () => startMergeSort(),
  }));

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
      setSelectedIndexes([k]);
      arr[k++] = right[j++];
      setBars([...arr]);
      await new Promise(requestAnimationFrame);
    }
    setSelectedIndexes([]);
  };

  const startMergeSort = async () => {
    let arr = [...array];
    await mergeSort(arr, 0, arr.length, setArray);
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
    <div className="flex flex-col items-center p-4 border">
      <h1>Merge Sort</h1>
      <canvas ref={canvasRef} width={500} height={300} />
    </div>
  );
});

export default MergeSort;
