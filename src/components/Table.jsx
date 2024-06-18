import React, { useMemo, useState } from "react";
import filter from "../assets/images/filter.svg";
import search from "../assets/images/search.svg";
import hospitalData from "../assets/data.json";
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	getPaginationRowModel,
	getFilteredRowModel,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

const Table = () => {
	const navigate = useNavigate();
	const [filterTerm, setFilterTerm] = useState("");
	const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
	const data = useMemo(() => hospitalData, []);
	const columns = [
		{ header: "S/N", accessorKey: "id" },
		{ header: "First Name", accessorKey: "first_name" },
		{ header: "Last Name", accessorKey: "last_name" },
		{ header: "Gender", accessorKey: "gender" },
		{ header: "UHS Number", accessorKey: "nhs" },
		{ header: "Category", accessorKey: "category" },
	];
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		state: {
			pagination,
			globalFilter: filterTerm,
		},
		onGlobalFilterChange: setFilterTerm,
		getFilteredRowModel: getFilteredRowModel(),
	});
	// function to redirect to the patient details page when a row is clicked
	const handleRowClick = (id) => {
		console.log(id);
		navigate(`/patients/${id}`);
	};

	return (
		<div className="htable">
			<div className="body-top">
				<div className="searchBox">
					<img src={search} alt="" />
					<input type="text" value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)} placeholder="Search" />
				</div>
				<div className="searchBox">
					<img src={filter} alt="" />
					<input type="text" value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)} placeholder="Filters" />
				</div>
			</div>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						// increment row ID by one to remove zero-based index
						const id = Number(row.id) + 1;
						return (
							<tr key={id} onClick={() => handleRowClick(id)}>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="buttons">
				<button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
					Prev
				</button>
				<button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Table;
