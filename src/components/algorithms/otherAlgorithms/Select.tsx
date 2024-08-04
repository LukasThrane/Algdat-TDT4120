"use client";
import { useEffect, useState } from "react";

interface DeterministicSelectProps {
  initialArray: number[];
}

const partition = (
  arr: number[],
  left: number,
  right: number,
  pivotIndex: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSteps: React.Dispatch<React.SetStateAction<number>>,
  stepCount: number
) => {
  setSteps(stepCount + 1);
  const pivotValue = arr[pivotIndex];
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  let storeIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
      storeIndex++;
    }
  }
  [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
  setArray([...arr]); // Update the array for visualization
  return storeIndex;
};

const medianOfMedians = (arr: number[], left: number, right: number) => {
  if (right - left < 5) {
    const sortedSubArray = arr.slice(left, right + 1).sort((a, b) => a - b);
    return arr.indexOf(sortedSubArray[Math.floor((right - left) / 2)], left);
  }
  for (let i = left; i <= right; i += 5) {
    const subRight = Math.min(i + 4, right);
    const median5 = medianOfMedians(arr, i, subRight);
    [arr[median5], arr[Math.floor((i - left) / 5) + left]] = [
      arr[Math.floor((i - left) / 5) + left],
      arr[median5],
    ];
  }
  return medianOfMedians(arr, left, left + Math.floor((right - left) / 5));
};

const deterministicSelect = async (
  arr: number[],
  left: number,
  right: number,
  k: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setPivot: React.Dispatch<React.SetStateAction<number | null>>,
  setSteps: React.Dispatch<React.SetStateAction<number>>,
  stepCount: number
): Promise<number> => {
  if (left === right) return arr[left];
  const pivotIndex = medianOfMedians(arr, left, right);
  setPivot(pivotIndex);
  await new Promise((resolve) => setTimeout(resolve, 500)); // Pause for visualization
  const pivot = partition(
    arr,
    left,
    right,
    pivotIndex,
    setArray,
    setSteps,
    stepCount
  );
  const length = pivot - left + 1;
  if (k === length) return arr[pivot];
  if (k < length)
    return deterministicSelect(
      arr,
      left,
      pivot - 1,
      k,
      setArray,
      setPivot,
      setSteps,
      stepCount + 1
    );
  return deterministicSelect(
    arr,
    pivot + 1,
    right,
    k - length,
    setArray,
    setPivot,
    setSteps,
    stepCount + 1
  );
};

const Select: React.FC<DeterministicSelectProps> = ({ initialArray }) => {
  const [array, setArray] = useState<number[]>([]);
  const [k, setK] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [pivot, setPivot] = useState<number | null>(null);
  const [steps, setSteps] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setArray(initialArray);
    resetSelect();
  }, [initialArray]);

  const resetSelect = () => {
    setResult(null);
    setK("");
    setPivot(null);
    setSteps(0);
    setError(null);
  };

  const handleSelect = async () => {
    if (k === "" || k < 1 || k > array.length) {
      setError(`Please enter a value between 1 and ${array.length}`);
      return;
    }
    setResult(null); // Reset result when starting a new selection
    const kValue = k as number;
    const result = await deterministicSelect(
      [...array],
      0,
      array.length - 1,
      kValue,
      setArray,
      setPivot,
      setSteps,
      0
    );
    setResult(result);
    setError(null);
  };

  const generateNewArray = () => {
    const newArray = Array.from(
      { length: array.length },
      () => Math.floor(Math.random() * 300) + 10
    );
    setArray(newArray);
    resetSelect();
  };

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Deterministic Select</h1>
      <div className="mb-4">
        <input
          type="number"
          value={k}
          onChange={(e) => setK(parseInt(e.target.value))}
          className="p-2 border"
          placeholder="Enter k value"
        />
        <button
          onClick={handleSelect}
          className="ml-4 p-2 bg-green-500 text-white"
        >
          Select
        </button>
        <button
          onClick={generateNewArray}
          className="ml-4 p-2 bg-blue-500 text-white"
        >
          Generate New Array
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap justify-center">
        {array.map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border ${
              result === value
                ? "bg-yellow-500"
                : index === pivot
                ? "bg-red-500"
                : "bg-gray-200"
            }`}
            style={{
              width: "40px",
              height: "40px",
              margin: "2px",
              textAlign: "center",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      {result !== null && (
        <p className="mt-4">
          The {k}-th smallest element is: {result} found in {steps} steps
        </p>
      )}
    </main>
  );
};

export default Select;
