import Link from "next/link";

export default function Algorithms() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Algorithms</h1>
      <ul>
        <li>
          <Link href={"/algorithms/bubble_sort"}>Bubble Sort</Link>
        </li>
        <li>
          <Link href={"/algorithms/merge_sort"}>Merge Sort</Link>
        </li>
        <li>
          <Link href={"/algorithms/insertion_sort"}>Insertion Sort</Link>
        </li>
      </ul>
    </main>
  );
}
