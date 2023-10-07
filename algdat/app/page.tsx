import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex justify-center space-x-12 mt-8 w-full mb-8">

        <div className="flex-1 flex flex-col items-center border border-solid p-4">
          {/* Icon for Algorithms */}
          <div className="mb-4">
            <img src="/AlgorithmIcon.png" alt="Algorithms Icon" className="w-16 h-16" />
          </div>
          <h1 className={title()}>Algorithms</h1>
          <ul>
            {/* Add your list of algorithm names/topics here */}
            <li>Example Algorithm 1</li>
            <li>Example Algorithm 2</li>
            {/* ... */}
          </ul>
        </div>

        <div className="flex-1 flex flex-col items-center border border-solid p-4">
          {/* Icon for Data Structures */}
          <div className="mb-4">
            <img src="/DataStructureIcon.png" alt="Data Structures Icon" className="w-16 h-16" />
          </div>
          <h1 className={title()}>Data Structures</h1>
          <ul>
            {/* Add your list of data structures topics here */}
            <li>Example Structure 1</li>
            <li>Example Structure 2</li>
            {/* ... */}
          </ul>
        </div>

        <div className="flex-1 flex flex-col items-center border border-solid p-4">
          {/* Icon for Theory */}
          <div className="mb-4">
            <img src="/TheoryIcon.png" alt="Theory Icon" className="w-16 h-16" />
          </div>
          <h1 className={title()}>Theory</h1>
          <ul>
            {/* Add your list of theory topics here */}
            <li>Example Theory 1</li>
            <li>Example Theory 2</li>
            {/* ... */}
          </ul>
        </div>

      </div>
    </section>
  );
}
