import { MaxContainer } from '@/components/containers/MaxContainer'
import { skillsSvgComponent } from '@/components/SvgSkills/Index'
import React from 'react'
import './styles.scss'

export const SkillsSection = () => {
	return (
		<div className='skills section' id='portafolio'>
			<MaxContainer>
				<div className='skills__wrapper'>
					<h2 className='section-title'>Herramientas</h2>

					<div className='skills-cards-wrapper'>
						{skillsSvgComponent.map((item) => (
							<div className='skill-card' key={item.title} title={item.title}>
								{item.component}
							</div>
						))}
					</div>
				</div>
			</MaxContainer>
		</div>
	)
}
