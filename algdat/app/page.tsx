import { title } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center mb-8">
				<h1 className={title({ color: "green" })}>Algorithms&nbsp;</h1> <br />
				<h1 className={title()}>&&nbsp;</h1> <br />
				<h1 className={title({ color: "cyan" })}>Data Structures&nbsp;</h1> <br />
			</div>

			<div className="flex justify-center space-x-12 mt-8 w-full">
				<div className="flex-1 flex flex-col items-center">
					<h1>Algorithms</h1>
				</div>
				<div className="flex-1 flex flex-col items-center">
					<h1>Data Structures</h1>
				</div>
			</div>
		</section>
	);
}
