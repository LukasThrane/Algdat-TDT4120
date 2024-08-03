import { title } from "@/components/primitives";
import AlgDatData from "@/lib/data.json";
import { AlgorithmCard } from "@/components/AlgorithmCard";

export default function AlgorithmsPage() {
	return (
		<div>
			<h1 className={title({color: "blue"})}>Algorithms</h1>
			<div>
			{AlgDatData.AlgDatData.map((data, index) => (
					<AlgorithmCard key={index} dataStructureData={data} />
				))}
			</div>
		</div>
	);
}
