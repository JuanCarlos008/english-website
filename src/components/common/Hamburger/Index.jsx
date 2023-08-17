import React from "react";
import "./styles.scss";

export const Hamburger = ({ setOpen, isOpen }) => {
	return (
		<button className='menu-toggle' onClick={() => setOpen((prev) => !prev)}>
			<div className={`${isOpen ? "hamburger isActive" : "hamburger"}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className='cross'>
				<span></span>
				<span></span>
			</div>
		</button>
	);
};
