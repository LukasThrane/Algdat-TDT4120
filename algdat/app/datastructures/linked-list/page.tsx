import { title } from "@/components/primitives";
import { Code } from "@nextui-org/code";

export default function dataStructPage() {
	return (
		<div>
			<h1 className={title()}>Linked List</h1>
			<div className="mt-10">
				<p>
					A linked list is a basic linear structure that represents elements in sequence.
					The concept behind the structure is that the sequence of elements is conserved by each element pointing to the next in the sequence
					We can also have double linked lists, where each node contains a value and a pointer both to the previous and next nodes.
				</p>
			</div>
		</div>
	);
}