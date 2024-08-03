"use client";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";

interface BubbleSortProps {
  initialArray: number[];
}

const BubbleSort = forwardRef<{ start: () => void }, BubbleSortProps>(({ initialArray }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray);
  }, [initialArray]);

  useImperativeHandle(ref, () => ({
    start: () => startBubbleSort(),
  }));

  const bubbleSort = async (arr: number[]) => {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        setSelectedIndexes([i, i + 1]);
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          setArray([...arr]);
          await new Promise(requestAnimationFrame);
          swapped = true;
        }
      }
    } while (swapped);
    setSelectedIndexes([]);
    setIsSorting(false);
  };

  const startBubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    await bubbleSort(arr);
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
      <h1>Bubble Sort</h1>
      <canvas ref={canvasRef} width={500} height={300} />
    </div>
  );
});

export default BubbleSort;
