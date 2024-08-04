"use client";
import { useEffect, useRef, useState } from "react";
import SortingVisualizer from "@/components/algorithms/sortingAlgorithms/SortingVisualizer";
import { bubbleSort } from "@/components/algorithms/sortingAlgorithms/bubbleSort";
import { insertionSort } from "@/components/algorithms/sortingAlgorithms/insertionSort";
import { mergeSort } from "@/components/algorithms/sortingAlgorithms/mergeSort";
import { quicksort } from "@/components/algorithms/sortingAlgorithms/quicksort";
import { randomizedQuicksort } from "@/components/algorithms/sortingAlgorithms/randomizedQuicksort";
import { countingSort } from "@/components/algorithms/sortingAlgorithms/countingSort";
import { radixSort } from "@/components/algorithms/sortingAlgorithms/radixSort";
import { bucketSort } from "@/components/algorithms/sortingAlgorithms/bucketSort";
import BinarySearch from "@/components/algorithms/otherAlgorithms/BinarySearch";

export default function Algorithms() {
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<string[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null
  );
  const [arrayLength, setArrayLength] = useState<number>(50);
  const [initialArray, setInitialArray] = useState<number[]>([]);

  // Refs for sorting algorithms
  const bubbleSortRef = useRef<{ start: () => void }>(null);
  const insertionSortRef = useRef<{ start: () => void }>(null);
  const mergeSortRef = useRef<{ start: () => void }>(null);
  const quicksortRef = useRef<{ start: () => void }>(null);
  const quicksortRandomizedRef = useRef<{ start: () => void }>(null);
  const countingSortRef = useRef<{ start: () => void }>(null);
  const radixSortRef = useRef<{ start: () => void }>(null);
  const bucketSortRef = useRef<{ start: () => void }>(null);

  // Generate random array
  const generateArray = (arrayLength: number) => {
    const array = Array.from(
      { length: arrayLength },
      () => Math.floor(Math.random() * 300) + 10
    );
    setInitialArray(array);
  };

  // Generate initial array when array length changes
  useEffect(() => {
    generateArray(arrayLength);
  }, [arrayLength]);

  // Handle selection of sorting algorithms
  const handleAlgorithmSelection = (algorithm: string) => {
    setSelectedAlgorithms((prevSelectedAlgorithms) =>
      prevSelectedAlgorithms.includes(algorithm)
        ? prevSelectedAlgorithms.filter((alg) => alg !== algorithm)
        : [...prevSelectedAlgorithms, algorithm]
    );
  };

  // Handle selection of binary search algorithm
  const handleBinarySearchSelection = () => {
    setSelectedAlgorithm((prevSelectedAlgorithm) =>
      prevSelectedAlgorithm === "BinarySearch" ? null : "BinarySearch"
    );
  };

  // Render selected algorithm
  const renderAlgorithm = (algorithm: string) => {
    switch (algorithm) {
      case "BubbleSort":
        return (
          <SortingVisualizer
            ref={bubbleSortRef}
            initialArray={initialArray}
            sortAlgorithm={bubbleSort}
            title="Bubble Sort"
          />
        );
      case "InsertionSort":
        return (
          <SortingVisualizer
            ref={insertionSortRef}
            initialArray={initialArray}
            sortAlgorithm={insertionSort}
            title="Insertion Sort"
          />
        );
      case "MergeSort":
        return (
          <SortingVisualizer
            ref={mergeSortRef}
            initialArray={initialArray}
            sortAlgorithm={mergeSort}
            title="Merge Sort"
          />
        );
      case "Quicksort":
        return (
          <SortingVisualizer
            ref={quicksortRef}
            initialArray={initialArray}
            sortAlgorithm={quicksort}
            title="Quicksort"
          />
        );
      case "QuicksortRandomized":
        return (
          <SortingVisualizer
            ref={quicksortRandomizedRef}
            initialArray={initialArray}
            sortAlgorithm={randomizedQuicksort}
            title="Randomized Quicksort"
          />
        );
      case "CountingSort":
        return (
          <SortingVisualizer
            ref={countingSortRef}
            initialArray={initialArray}
            sortAlgorithm={countingSort}
            title="Counting Sort"
          />
        );
      case "RadixSort":
        return (
          <SortingVisualizer
            ref={radixSortRef}
            initialArray={initialArray}
            sortAlgorithm={radixSort}
            title="Radix Sort"
          />
        );
      case "BucketSort":
        return (
          <SortingVisualizer
            ref={bucketSortRef}
            initialArray={initialArray}
            sortAlgorithm={bucketSort}
            title="Bucket Sort"
          />
        );
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
    countingSortRef.current?.start();
    radixSortRef.current?.start();
    bucketSortRef.current?.start();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Algorithms Visualization</h1>
      <div className="mb-8 w-2/3">
        <h2 className="text-xl font-semibold mb-2">Sorting Algorithms</h2>
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleAlgorithmSelection("BubbleSort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("BubbleSort")
                ? "bg-blue-700"
                : "bg-blue-500"
            }`}
          >
            Bubble Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("InsertionSort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("InsertionSort")
                ? "bg-red-700"
                : "bg-red-500"
            }`}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("MergeSort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("MergeSort")
                ? "bg-green-700"
                : "bg-green-500"
            }`}
          >
            Merge Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("Quicksort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("Quicksort")
                ? "bg-purple-700"
                : "bg-purple-500"
            }`}
          >
            Quicksort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("QuicksortRandomized")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("QuicksortRandomized")
                ? "bg-yellow-700"
                : "bg-yellow-500"
            }`}
          >
            Randomized Quicksort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("CountingSort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("CountingSort")
                ? "bg-orange-700"
                : "bg-orange-500"
            }`}
          >
            Counting Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("RadixSort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("RadixSort")
                ? "bg-indigo-700"
                : "bg-indigo-500"
            }`}
          >
            Radix Sort
          </button>
          <button
            onClick={() => handleAlgorithmSelection("BucketSort")}
            className={`p-2 text-white ${
              selectedAlgorithms.includes("BucketSort")
                ? "bg-pink-700"
                : "bg-pink-500"
            }`}
          >
            Bucket Sort
          </button>
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="arrayLength" className="mr-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {selectedAlgorithms.map((algorithm) => (
            <div key={algorithm} className="flex flex-col items-center">
              {renderAlgorithm(algorithm)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 w-2/3">
        <h2 className="text-xl font-semibold mb-2">Other Algorithms</h2>
        <div className="flex space-x-2 mb-4">
          <button
            onClick={handleBinarySearchSelection}
            className={`p-2 text-white ${
              selectedAlgorithm === "BinarySearch"
                ? "bg-orange-700"
                : "bg-orange-500"
            }`}
          >
            Binary Search
          </button>
        </div>
        {selectedAlgorithm === "BinarySearch" && (
          <div className="flex justify-center items-center w-full">
            {renderBinarySearch()}
          </div>
        )}
      </div>
    </main>
  );
}
