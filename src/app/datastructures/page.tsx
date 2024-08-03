import Link from "next/link";

export default function DataStructures() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Data Structures</h1>
      <ul>
        <li>
          <Link href={"/datastructures/stacks"}>Stacks</Link>
        </li>
        <li>
          <Link href={"/datastructures/queues"}>Queues</Link>
        </li>
      </ul>
    </main>
  );
}
