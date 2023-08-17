import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import './styles.scss'

export const NewWorkCard = ({ data }) => {
	return (
		<div className='card-2'>
			<div className='box-info-2'>
				<div className='box-info-2__title'>
					<a href={data.web_url} target='_blank' rel='external noreferrer'>
						<AiOutlineLink className='icon' /> {data.title}
					</a>
				</div>
			</div>

			<div className='box-images-2'>
				<img src={data.img} alt='proyect-image' className='img' />
			</div>
		</div>
	)
}
