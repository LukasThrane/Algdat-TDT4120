import { title } from "@/components/primitives";

export default function TheoryPage() {
	return (
		<div>
			<h1 className={title()}>Theory</h1>
			<div className="mt-10">
				<p>Master Theorem</p>
				<p>Runtime</p>
				<p>Big O</p>
				<p>Big Omega</p>
				<p>Big Theta</p>
				<p>Divide and Conquer</p>
				<p>Recursion</p>
				<p>Proof by Induction</p>
			</div>
		</div>
	);
}
