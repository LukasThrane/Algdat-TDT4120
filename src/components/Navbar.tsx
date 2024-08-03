import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-800 text-white px-12">
      <Link href="/">Algdat</Link>
      <div className="flex space-x-4">
        <Link href="/datastructures">Data Structures</Link>
        <Link href="/algorithms">Algorithms</Link>
      </div>
    </nav>
  );
}
