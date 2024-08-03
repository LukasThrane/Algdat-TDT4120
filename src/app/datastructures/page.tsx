"use client";
import { useState } from "react";
import Stacks from "@/components/datastructures/Stacks";
import Queues from "@/components/datastructures/Queues";
import LinkedList from "@/components/datastructures/LinkedLists";
import HashTable from "@/components/datastructures/HashTables";

export default function DataStructures() {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(null);

  const renderStructure = () => {
    switch (selectedStructure) {
      case "Stacks":
        return <Stacks />;
      case "Queues":
        return <Queues />;
      case "LinkedList":
        return <LinkedList />;
      case "HashTable":
        return <HashTable />;
      default:
        return <p>Please select a data structure to visualize.</p>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Data Structures</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedStructure("Stacks")}
          className="p-2 bg-blue-500 text-white"
        >
          Stacks
        </button>
        <button
          onClick={() => setSelectedStructure("Queues")}
          className="p-2 bg-green-500 text-white"
        >
          Queues
        </button>
        <button
          onClick={() => setSelectedStructure("LinkedList")}
          className="p-2 bg-purple-500 text-white"
        >
          Linked List
        </button>
        <button
          onClick={() => setSelectedStructure("HashTable")}
          className="p-2 bg-yellow-500 text-white"
        >
          Hash Table
        </button>
      </div>
      {renderStructure()}
    </main>
  );
}
