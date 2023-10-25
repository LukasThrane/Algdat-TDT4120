import { title } from "@/components/primitives";
import AlgDatData from "@/lib/data.json";
import { DataStructureCard } from "@/components/DataStructureCard";

export default function DataStructuresPage() {
	return (
		<div>
			<h1 className={title()}>Data Structures</h1>
			<div>
				{AlgDatData.AlgDatData.map((data, index) => (
					<DataStructureCard key={index} dataStructureData={{ name: data.dataStruct, id: data.id }} />
				))}
			</div>
		</div>
	);
}