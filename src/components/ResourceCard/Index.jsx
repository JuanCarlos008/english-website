import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import './styles.scss'

export const WorkCard = ({ data }) => {
	return (
		<div className='card'>
			<div className='box-img'>
				<AiOutlineEye className='eyes-icon' />
				<img src={data.img} alt='proyect-image' />
			</div>
			<div className='box-info'>
				<h2 className='box-info__title'>{data.title}</h2>
				<p className='box-info__paragraph'>
					{data.description}
					<a href={data.web_url} target='_blank' rel='external noreferrer'>
						Visitar la web
					</a>
				</p>
				<div className='box-info__icons'>
					{data.icons.map((item) => (
						<div className='icon' key={item.title}>
							{item.component}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
