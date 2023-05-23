import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarLink({ data }) {
	const { target, text, icon, setActivePage, activePage } = data;

	const handleClick = () => {
		setActivePage(text);
	};

	const isActive = activePage === text;

	return (
		<div className='flex justify-center items-center w-48 h-12 my-2 mx-2'>
			<Link
				onClick={handleClick}
				to={target}
				className={`flex flex-row px-4 items-center w-full h-full
                ${isActive ? 'bg-accent' : 'bg-background'} rounded-[32px] hover:rounded-[6px] duration-200 mx-0 
                `}>
				<span
					className={`flex flex-col justify-end items-center h-[22px] text-xl mr-2
                    `}>
					{icon}
				</span>
				<div>{text}</div>
			</Link>
		</div>
	);
}
