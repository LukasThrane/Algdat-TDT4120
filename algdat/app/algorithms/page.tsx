import { title } from "@/components/primitives";
import { AlgDat } from "@/lib/constants";
import { AlgorithmCard } from "@/components/AlgorithmCard";

export default function AlgorithmsPage() {
	return (
		<div>
			<h1 className={title({color: "blue"})}>Algorithms</h1>
			<div>
				{AlgDat.map((props, index) => (
					<AlgorithmCard key={index} algorithmData={props} />
				))}
			</div>
		</div>
	);
}
