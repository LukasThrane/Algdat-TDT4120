import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex justify-center space-x-12 mt-8 w-full mb-8">
        <div className="flex-1 flex flex-col items-center p-4">
          <div className="mb-4">
            <Link href="/algorithms">
              <img src="/AlgorithmIcon2.png" alt="Algorithms Icon" className="" />
            </Link>
          </div>
          <h1 className={title()}>Algorithms</h1>
          <p className="mt-6 text-center">
            Explore fundamental to advanced algorithms. Understand their logic, design, and applications in various computational problems.
          </p>

          <Link href="/algorithms">
            <a className="mt-4 text-blue-500 hover:underline">View All Algorithms</a>
          </Link>
        </div>


        <div className="flex-1 flex flex-col items-center p-4">
          <div className="mb-4">
            <Link href="/datastructures">
              <img src="/DataStructureIcon2.png" alt="Data Structures Icon" className="" />
            </Link>
          </div>
          <h1 className={title()}>Data Structures</h1>
          <p className="mt-6 text-center">
            Delve into essential data structures like arrays, linked lists, and trees. Grasp their significance and use cases in computer science.
          </p>

          <Link href="/datastructures">
            <a className="mt-4 text-blue-500 hover:underline">Explore Data Structures</a>
          </Link>
        </div>


        <div className="flex-1 flex flex-col items-center p-4">
          <div className="mb-4">
            <Link href="/theory">
              <img src="/TheoryIcon2.png" alt="Theory Icon" className="" />
            </Link>
          </div>
          <h1 className={title()}>Theory</h1>
          <p className="mt-6 text-center">
            Grasp core theoretical principles, including big-O notation and algorithmic efficiency. Understand the foundation behind algorithm design and analysis.
          </p>

          <Link href="/theory">
            <a className="mt-4 text-blue-500 hover:underline">Read About Theoretical Concepts</a>
          </Link>
        </div>

      </div>
    </section >
  );
}
