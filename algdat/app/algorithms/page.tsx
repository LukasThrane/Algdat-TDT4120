import { title } from "@/components/primitives";
import { Algorithms } from "@/lib/constants";
import { AlgorithmCard } from "@/components/AlgorithmCard";

export default function AlgorithmsPage() {
	return (
		<div>
			<h1 className={title()}>Algorithms</h1>
			<div>
				{Algorithms.map((props, index) => (
					<AlgorithmCard key={index} algorithmData={props} />
				))}
			</div>
		</div>
	);
}
