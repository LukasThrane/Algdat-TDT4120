"use client";
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

interface CountingSortProps {
  initialArray: number[];
}

const CountingSort = forwardRef<{ start: () => void }, CountingSortProps>(
  ({ initialArray }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [array, setArray] = useState<number[]>(initialArray);
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

    useEffect(() => {
      setArray(initialArray);
      drawBars(initialArray);
    }, [initialArray]);

    useImperativeHandle(ref, () => ({
      start: () => startCountingSort(),
    }));

    const countingSort = async (arr: number[]) => {
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
          setSelectedIndexes([j, j + 1]);
          arr[j + 1] = arr[j];
          j = j - 1;
          setArray([...arr]);
          await new Promise(requestAnimationFrame);
        }
        arr[j + 1] = key;
        setSelectedIndexes([]);
        setArray([...arr]);
        await new Promise(requestAnimationFrame);
      }
    };

    const startCountingSort = async () => {
      let arr = [...array];
      await countingSort(arr);
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
        <h1>Insertion Sort</h1>
        <canvas ref={canvasRef} width={500} height={300} />
      </div>
    );
  }
);

export default CountingSort;
