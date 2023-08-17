import React from "react";
import "./styles.scss";

export const ServiceCard2 = ({ item }) => {
	const { title, description, icon } = item;
	return (
		<article className='service-card2'>
			<div className='service-card2__icon'>{icon}</div>
			<div className='service-card2__content'>
				<h3 className='content-title'>{title}</h3>
				<p className='content-info'>{description}</p>
			</div>
		</article>
	);
};
