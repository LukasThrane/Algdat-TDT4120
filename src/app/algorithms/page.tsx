"use client";
import { useEffect, useState } from "react";
import BubbleSort from "@/components/algorithms/BubbleSort";
import InsertionSort from "@/components/algorithms/InsertionSort";
import MergeSort from "@/components/algorithms/MergeSort";
import Quicksort from "@/components/algorithms/QuickSort";
import BinarySearch from "@/components/algorithms/BinarySearch";

export default function Algorithms() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [arrayLength, setArrayLength] = useState<number>(50);
  const [initialArray, setInitialArray] = useState<number[]>([]);

  const generateArray = (arrayLength: number) => {
    const array = Array.from(
      { length: arrayLength },
      () => Math.floor(Math.random() * 300) + 10
    );
    setInitialArray(array);
  };

  useEffect(() => {
    generateArray(arrayLength);
  }, [arrayLength]);

  const renderAlgorithm = () => {
    switch (selectedAlgorithm) {
      case "BubbleSort":
        return <BubbleSort initialArray={initialArray} />;
      case "InsertionSort":
        return <InsertionSort initialArray={initialArray} />;
      case "MergeSort":
        return <MergeSort initialArray={initialArray} />;
      case "Quicksort":
        return <Quicksort initialArray={initialArray} />;
      case "BinarySearch":
        return <BinarySearch initialArray={initialArray} />;
      default:
        return <p>Please select an algorithm to visualize.</p>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Algorithms</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedAlgorithm("BubbleSort")}
          className="p-2 bg-blue-500 text-white"
        >
          Bubble Sort
        </button>
        <button
          onClick={() => setSelectedAlgorithm("InsertionSort")}
          className="p-2 bg-red-500 text-white"
        >
          Insertion Sort
        </button>
        <button
          onClick={() => setSelectedAlgorithm("MergeSort")}
          className="p-2 bg-green-500 text-white"
        >
          Merge Sort
        </button>
        <button
          onClick={() => setSelectedAlgorithm("Quicksort")}
          className="p-2 bg-purple-500 text-white"
        >
          Quicksort
        </button>
        <button
          onClick={() => setSelectedAlgorithm("BinarySearch")}
          className="p-2 bg-orange-500 text-white"
        >
          Binary Search
        </button>
      </div>
      <div className="mb-8 flex items-center">
        <label htmlFor="arrayLength" className="mr-4">
          Array Length:
        </label>
        <input
          id="arrayLength"
          type="number"
          value={arrayLength}
          onChange={(e) => setArrayLength(parseInt(e.target.value))}
          className="p-2 border"
        />
        <button
          onClick={() => generateArray(arrayLength)}
          className="ml-4 p-2 bg-gray-500 text-white"
        >
          Generate Array
        </button>
      </div>
      {renderAlgorithm()}
    </main>
  );
}
