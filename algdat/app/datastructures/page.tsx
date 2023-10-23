import { title } from "@/components/primitives";
import { AlgDat } from "@/lib/constants";
import { DataStructureCard } from "@/components/DataStructureCard";

export default function DataStructuresPage() {
	return (
		<div>
			<h1 className={title()}>Data Structures</h1>
			<div>
				{AlgDat.map((data, index) => (
					<DataStructureCard key={index} dataStructureData={{ name: data.dataStruct }} />
				))}
			</div>
		</div>
	);
}