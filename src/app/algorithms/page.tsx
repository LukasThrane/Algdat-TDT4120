"use client";
import { useState } from "react";
import BubbleSort from "@/components/algorithms/BubbleSort";
import InsertionSort from "@/components/algorithms/InsertionSort";
import MergeSort from "@/components/algorithms/MergeSort";

export default function Algorithms() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null
  );

  const renderAlgorithm = () => {
    switch (selectedAlgorithm) {
      case "BubbleSort":
        return <BubbleSort />;
      case "InsertionSort":
        return <InsertionSort />;
      case "MergeSort":
        return <MergeSort />;
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
      </div>
      {renderAlgorithm()}
    </main>
  );
}
