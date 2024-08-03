import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Algdat</h1>
      <p className="text-lg mb-8">
        Welcome to Algdat! Choose an option below to visualize algorithms and
        data structures.
      </p>
      <div className="flex space-x-8">
        <Link href="/algorithms">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer">
            Algorithms
          </div>
        </Link>
        <Link href="/datastructures">
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition cursor-pointer">
            Data Structures
          </div>
        </Link>
      </div>
    </main>
  );
}
