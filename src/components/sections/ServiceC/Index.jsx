import { ServiceCard } from '@/components/ServiceCard/Index'
import './styles.scss'
import React from 'react'
import { MaxContainer } from '@/components/containers/MaxContainer'
import { data } from './data'
import { ServiceCard2 } from '@/components/ServiceCard/ServiceCard2'
import { RoadMap } from '@/components/RoadMap/Index'
import { BlurCircles } from '@/components/Background/BlurCircles'

export const ServicesSection = () => {
	return (
		<div className='services section' id='servicios'>
			<BlurCircles>
				<MaxContainer>
					<RoadMap />
				</MaxContainer>
			</BlurCircles>
		</div>
	)
}
