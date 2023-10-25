import { title } from "@/components/primitives";
import AlgDatData from "@/lib/data.json";
import { DataStructureCard } from "@/components/DataStructureCard";

export default function DataStructuresPage() {
	return (
		<div className="w-full">
			<div className="text-center">
				<h1 className={title({color: "green"})}>Data Structures</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-20 mt-10">
				{AlgDatData.AlgDatData.map((data, index) => (
					<DataStructureCard key={index} dataStructureData={data} />
				))}
			</div>
		</div>
	);
}