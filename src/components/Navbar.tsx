export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-800 text-white px-12">
        <a href="/">Algdat</a>
      <div className="flex space-x-4">
        <a href="/datastructures">Data Structures</a>
        <a href="/algorithms">Algorithms</a>
      </div>
    </nav>
  );
}
