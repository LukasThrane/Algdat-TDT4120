"use client";
import { useState } from "react";
import Stack from "@/components/datastructures/Stack";
import Queue from "@/components/datastructures/Queue";

export default function DataStructures() {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(
    null
  );

  const renderStructure = () => {
    switch (selectedStructure) {
      case "Stack":
        return <Stack />;
      case "Queue":
        return <Queue />;
      default:
        return <p>Please select a data structure to visualize.</p>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Data Structures</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedStructure("Stack")}
          className="p-2 bg-blue-500 text-white"
        >
          Stack
        </button>
        <button
          onClick={() => setSelectedStructure("Queue")}
          className="p-2 bg-green-500 text-white"
        >
          Queue
        </button>
      </div>
      {renderStructure()}
    </main>
  );
}
