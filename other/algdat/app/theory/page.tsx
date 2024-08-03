"use client";
import { title } from "@/components/primitives";
import React from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";

export default function TheoryPage() {
	return (
		<div>
			<h1 className={title({color: "yellow"})}>Theory</h1>
			<div className="justify-left text-left mt-10">
				<Table aria-label="Example static collection table">
					<TableHeader>
						<TableColumn>Complexity</TableColumn>
						<TableColumn>Name</TableColumn>
						<TableColumn>Type</TableColumn>
					</TableHeader>
					<TableBody>
						<TableRow key="1">
							<TableCell>Θ(<i>n</i>!)</TableCell>
							<TableCell>Factorial</TableCell>
							<TableCell>General</TableCell>
						</TableRow>
						<TableRow key="2">
							<TableCell>Ω(<i>k</i><sup><i>n</i></sup>)</TableCell>
							<TableCell>Exponential</TableCell>
							<TableCell>General</TableCell>
						</TableRow>
						<TableRow key="3">
							<TableCell>O(<i>n</i><sup><i>k</i></sup>)</TableCell>
							<TableCell>Polynomial</TableCell>
							<TableCell>General</TableCell>
						</TableRow>
						<TableRow key="4">
							<TableCell>Θ(<i>n</i><sup>3</sup>)</TableCell>
							<TableCell>Cubic</TableCell>
							<TableCell>Polynomial</TableCell>
						</TableRow>
						<TableRow key="5">
							<TableCell>Θ(<i>n</i><sup>2</sup>)</TableCell>
							<TableCell>Quadratic</TableCell>
							<TableCell>Polynomial</TableCell>
						</TableRow>
						<TableRow key="6">
							<TableCell>Θ(<i>n</i>lg(<i>n</i>))</TableCell>
							<TableCell>Linearithmic</TableCell>
							<TableCell>Combination of linear and polynomial</TableCell>
						</TableRow>
						<TableRow key="7">
							<TableCell>Θ(<i>n</i>)</TableCell>
							<TableCell>Linear</TableCell>
							<TableCell>General</TableCell>
						</TableRow>
						<TableRow key="8">
							<TableCell>Θ(lg(<i>n</i>))</TableCell>
							<TableCell>Logarithmic</TableCell>
							<TableCell>General</TableCell>
						</TableRow>
						<TableRow key="9">
							<TableCell>Θ(1)</TableCell>
							<TableCell>Constant</TableCell>
							<TableCell>General</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
