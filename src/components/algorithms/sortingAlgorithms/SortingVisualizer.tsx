"use client";
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

interface SortingVisualizerProps {
  initialArray: number[];
  sortAlgorithm: (
    arr: number[],
    updateArray: (arr: number[]) => void,
    updateIndexes: (indexes: number[]) => void
  ) => Promise<void>;
  title: string;
}

const SortingVisualizer = forwardRef<
  { start: () => void },
  SortingVisualizerProps
>(({ initialArray, sortAlgorithm, title }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>(initialArray);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setArray(initialArray);
    drawBars(initialArray, []);
  }, [initialArray]);

  useImperativeHandle(ref, () => ({
    start: () => startSorting(),
  }));

  const startSorting = async () => {
    let arr = [...array];
    await sortAlgorithm(arr, setArray, setSelectedIndexes);
  };

  const drawBars = (arr: number[], selectedIndexes: number[]) => {
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
    drawBars(array, selectedIndexes);
  }, [array, selectedIndexes]);

  return (
    <div className="flex flex-col items-center p-4 border">
      <h1>{title}</h1>
      <canvas ref={canvasRef} width={500} height={300} />
    </div>
  );
});

export default SortingVisualizer;
