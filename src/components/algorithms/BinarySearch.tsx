"use client";
import { useEffect, useState } from "react";

interface BinarySearchProps {
  arrayLength: number;
}

const BinarySearch: React.FC<BinarySearchProps> = ({ arrayLength }) => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [left, setLeft] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);
  const [mid, setMid] = useState<number | null>(null);

  useEffect(() => {
    generateArray();
  }, [arrayLength]);

  const generateArray = () => {
    const array = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
    setArray(array);
    setResult(null);
    setLeft(null);
    setRight(null);
    setMid(null);
  };

  const binarySearchStep = async (arr: number[], target: number, left: number, right: number) => {
    if (left <= right) {
      const mid = Math.floor((left + right) / 2);
      setLeft(left);
      setRight(right);
      setMid(mid);

      await new Promise(resolve => setTimeout(resolve, 500)); // Add delay to visualize the steps

      if (arr[mid] === target) {
        setResult(mid);
        return;
      }
      if (arr[mid] < target) {
        binarySearchStep(arr, target, mid + 1, right);
      } else {
        binarySearchStep(arr, target, left, mid - 1);
      }
    } else {
      setResult(null);
    }
  };

  const handleSearch = () => {
    if (target === "") return;
    setResult(null);
    binarySearchStep(array, target as number, 0, array.length - 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Binary Search Visualization</h1>
      <button onClick={generateArray} className="p-2 bg-blue-500 text-white mb-4">Generate New Array</button>
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(parseInt(e.target.value))}
        className="p-2 border mb-4"
        placeholder="Enter target value"
      />
      <button onClick={handleSearch} className="p-2 bg-green-500 text-white mb-4">Search</button>
      <div className="flex flex-wrap justify-center">
        {array.map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border ${
              result === index
                ? 'bg-yellow-500'
                : index === mid
                ? 'bg-red-500'
                : left !== null && right !== null && index >= left && index <= right
                ? 'bg-blue-300'
                : 'bg-gray-200'
            }`}
            style={{ width: "40px", height: "40px", margin: "2px", textAlign: "center" }}
          >
            {value}
          </div>
        ))}
      </div>
      {result !== null && <p className="mt-4">Target found at index: {result}</p>}
      {result === null && left === null && <p className="mt-4">Target not found</p>}
    </main>
  );
};

export default BinarySearch;
