import React from "react";
import { Link } from "react-router-dom";

export default function SidebarLink({ data }) {
	const { target, text, icon, sidebarHidden, setActivePage, activePage } = data;

	const handleClick = () => {
		setActivePage(text);
	};

	const isActive = activePage === text;

	return (
		<div className='flex justify-center items-center w-full h-16 my-2'>
			<Link
				onClick={handleClick}
				to={target}
				className={`flex flex-row px-4 items-center w-16 h-16 
                ${isActive ? "gradient-background" : "bg-primary"} rounded-[32px] hover:rounded-[6px] duration-200 mx-0 
                ${sidebarHidden ? "justify-center" : "w-48"}`}>
				<div
					className={`flex flex-col justify-end items-center h-[22px] text-xl 
                    ${sidebarHidden ? "" : "mr-2"}`}>
					{icon}
				</div>

				{!sidebarHidden && <div className='overflow-hidden text-lg'>{text}</div>}
			</Link>
		</div>
	);
}
