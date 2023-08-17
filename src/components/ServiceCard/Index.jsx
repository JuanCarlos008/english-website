import React from "react";
import "./styles.scss";

export const ServiceCard = ({ item }) => {
	const { title, description, icon } = item;
	return (
		<article className='service-card'>
			<div className='service-card__icon'>{icon}</div>
			<div className='service-card__content'>
				<h3 className='content-title'>{title}</h3>
				<p className='content-info'>{description}</p>
			</div>
		</article>
	);
};
