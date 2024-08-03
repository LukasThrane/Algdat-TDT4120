export default function DataStructureLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
			<div className="inline-block w-1/1 text-left justify-center">
				{children}
			</div>
		</section>
	);
}