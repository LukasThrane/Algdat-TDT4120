import { title } from "@/components/primitives";
import { DataStructures } from "@/lib/constants";
import { DataStructureCard } from "@/components/DataStructureCard";

export default function DataStructuresPage() {
	return (
		<div>
			<h1 className={title()}>Data Structures</h1>
			<div>
				{DataStructures.map((props, index) => (
					<DataStructureCard key={index} dataStructureData={props} />
				))}
			</div>
		</div>
	);
}
