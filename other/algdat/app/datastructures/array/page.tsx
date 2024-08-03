import { title } from "@/components/primitives";

export default function dataStructPage() {
	return (
		<div>
			<h1 className={title()}>Array</h1>
			<div className="mt-10">
				<h1 className="">Static and dynamic arrays</h1>
				<p>An array is a basic data structure that can hold one specific data type. Static arrays are not resizable. Dynamic arrays are resized once someone tries to append more data than there are space for it. All data from the old array are being copied over to the new array before appended contents are added.</p>
			</div>
		</div>
	);
}