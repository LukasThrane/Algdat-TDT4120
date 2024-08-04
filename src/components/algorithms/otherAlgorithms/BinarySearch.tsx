"use client";
import { useEffect, useState } from "react";

interface BinarySearchProps {
  initialArray: number[];
}

const BinarySearch: React.FC<BinarySearchProps> = ({ initialArray }) => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [left, setLeft] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);
  const [mid, setMid] = useState<number | null>(null);
  const [steps, setSteps] = useState<number>(0);

  useEffect(() => {
    const sortedArray = [...initialArray].sort((a, b) => a - b);
    setArray(sortedArray);
    resetSearch();
  }, [initialArray]);

  const resetSearch = () => {
    setResult(null);
    setLeft(null);
    setRight(null);
    setMid(null);
    setSteps(0);
  };

  const binarySearchStep = async (
    arr: number[],
    target: number,
    left: number,
    right: number,
    stepCount: number
  ) => {
    if (left <= right) {
      const mid = Math.floor((left + right) / 2);
      setLeft(left);
      setRight(right);
      setMid(mid);
      setSteps(stepCount);

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (arr[mid] === target) {
        setResult(mid);
        return;
      }
      if (arr[mid] < target) {
        binarySearchStep(arr, target, mid + 1, right, stepCount + 1);
      } else {
        binarySearchStep(arr, target, left, mid - 1, stepCount + 1);
      }
    } else {
      setResult(null);
      setSteps(stepCount);
    }
  };

  const handleSearch = () => {
    if (target === "") return;
    resetSearch();
    binarySearchStep(array, target as number, 0, array.length - 1, 1);
  };

  return (
    <main className="flex flex-col items-center p-24">
      <div>
        <h1>Binary Search</h1>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
          className="p-2 border mb-4"
          placeholder="Enter target value"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-green-500 text-white mb-4"
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {array.map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border ${
              result === index
                ? "bg-yellow-500"
                : index === mid
                ? "bg-red-500"
                : left !== null &&
                  right !== null &&
                  index >= left &&
                  index <= right
                ? "bg-blue-300"
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
          Target found at index: {result} in {steps} steps
        </p>
      )}
      {result === null && left === null && (
        <p className="mt-4">Target not found</p>
      )}
    </main>
  );
};

export default BinarySearch;
