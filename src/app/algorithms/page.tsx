"use client";
import { useEffect, useRef, useState } from "react";
import BubbleSort from "@/components/algorithms/BubbleSort";
import InsertionSort from "@/components/algorithms/InsertionSort";
import MergeSort from "@/components/algorithms/MergeSort";
import Quicksort from "@/components/algorithms/Quicksort";
import QuicksortRandomized from "@/components/algorithms/QuicksortRandomized";
import BinarySearch from "@/components/algorithms/BinarySearch";

export default function Algorithms() {
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<string[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [arrayLength, setArrayLength] = useState<number>(50);
  const [initialArray, setInitialArray] = useState<number[]>([]);
  const bubbleSortRef = useRef<{ start: () => void }>(null);
  const insertionSortRef = useRef<{ start: () => void }>(null);
  const mergeSortRef = useRef<{ start: () => void }>(null);
  const quicksortRef = useRef<{ start: () => void }>(null);
  const quicksortRandomizedRef = useRef<{ start: () => void }>(null);

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

  const handleAlgorithmSelection = (algorithm: string) => {
    setSelectedAlgorithms((prevSelectedAlgorithms) =>
      prevSelectedAlgorithms.includes(algorithm)
        ? prevSelectedAlgorithms.filter((alg) => alg !== algorithm)
        : [...prevSelectedAlgorithms, algorithm]
    );
  };

  const handleBinarySearchSelection = () => {
    setSelectedAlgorithm((prevSelectedAlgorithm) =>
      prevSelectedAlgorithm === "BinarySearch" ? null : "BinarySearch"
    );
  };

  const renderAlgorithm = (algorithm: string) => {
    switch (algorithm) {
      case "BubbleSort":
        return <BubbleSort ref={bubbleSortRef} initialArray={initialArray} />;
      case "InsertionSort":
        return <InsertionSort ref={insertionSortRef} initialArray={initialArray} />;
      case "MergeSort":
        return <MergeSort ref={mergeSortRef} initialArray={initialArray} />;
      case "Quicksort":
        return <Quicksort ref={quicksortRef} initialArray={initialArray} />;
      case "QuicksortRandomized":
        return <QuicksortRandomized ref={quicksortRandomizedRef} initialArray={initialArray} />;
      default:
        return null;
    }
  };

  const renderBinarySearch = () => {
    return <BinarySearch initialArray={initialArray} />;
  };

  const startAllSelectedAlgorithms = () => {
    bubbleSortRef.current?.start();
    insertionSortRef.current?.start();
    mergeSortRef.current?.start();
    quicksortRef.current?.start();
    quicksortRandomizedRef.current?.start();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Algorithms</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleAlgorithmSelection("BubbleSort")}
          className={`p-2 text-white ${
            selectedAlgorithms.includes("BubbleSort") ? "bg-blue-700" : "bg-blue-500"
          }`}
        >
          Bubble Sort
        </button>
        <button
          onClick={() => handleAlgorithmSelection("InsertionSort")}
          className={`p-2 text-white ${
            selectedAlgorithms.includes("InsertionSort") ? "bg-red-700" : "bg-red-500"
          }`}
        >
          Insertion Sort
        </button>
        <button
          onClick={() => handleAlgorithmSelection("MergeSort")}
          className={`p-2 text-white ${
            selectedAlgorithms.includes("MergeSort") ? "bg-green-700" : "bg-green-500"
          }`}
        >
          Merge Sort
        </button>
        <button
          onClick={() => handleAlgorithmSelection("Quicksort")}
          className={`p-2 text-white ${
            selectedAlgorithms.includes("Quicksort") ? "bg-purple-700" : "bg-purple-500"
          }`}
        >
          Quicksort
        </button>
        <button
          onClick={() => handleAlgorithmSelection("QuicksortRandomized")}
          className={`p-2 text-white ${
            selectedAlgorithms.includes("QuicksortRandomized") ? "bg-yellow-700" : "bg-yellow-500"
          }`}
        >
          Randomized Quicksort
        </button>
        <button
          onClick={handleBinarySearchSelection}
          className={`p-2 text-white ${
            selectedAlgorithm === "BinarySearch" ? "bg-orange-700" : "bg-orange-500"
          }`}
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
        <button
          onClick={startAllSelectedAlgorithms}
          className="ml-4 p-2 bg-green-500 text-white"
        >
          Start All Selected Algorithms
        </button>
      </div>
      {selectedAlgorithm === "BinarySearch" ? (
        <div className="flex justify-center items-center w-full">
          {renderBinarySearch()}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {selectedAlgorithms.slice(0, 2).map((algorithm) => (
            <div key={algorithm} className="flex flex-col items-center">
              {renderAlgorithm(algorithm)}
            </div>
          ))}
        </div>
      )}
      {selectedAlgorithm !== "BinarySearch" && selectedAlgorithms.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
          {selectedAlgorithms.slice(2).map((algorithm) => (
            <div key={algorithm} className="flex flex-col items-center">
              {renderAlgorithm(algorithm)}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
