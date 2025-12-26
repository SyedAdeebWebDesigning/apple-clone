import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

const SkeletonCell = () => (
	<div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
);

const FallbackTable = ({ rows = 3 }: { rows?: number }) => {
	return (
		<div className="w-full overflow-hidden rounded-lg border border-border">
			<Table>
				<TableHeader>
					<TableRow>
						{[...Array(5)].map((_, i) => (
							<TableHead key={i}>
								<SkeletonCell />
							</TableHead>
						))}
					</TableRow>
				</TableHeader>

				<TableBody>
					{[...Array(rows)].map((_, rowIndex) => (
						<TableRow key={rowIndex}>
							{[...Array(5)].map((_, cellIndex) => (
								<TableCell key={cellIndex}>
									<SkeletonCell />
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default FallbackTable;
