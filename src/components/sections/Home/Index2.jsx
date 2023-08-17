import React from 'react'
import './styles.scss'
import { MaxContainer } from '@/components/containers/MaxContainer'
import { BlurCircles } from '@/components/Background/BlurCircles'
import { FiLink } from 'react-icons/fi'

export const HomeSection = () => {
	return (
		<BlurCircles>
			<MaxContainer>
				<section className='home2 section' id='inicio'>
					<div className='content-image'>
						<div className='content'>
							<h1 className='title'>Learn English and open world's doors</h1>
							<h2 className='sub-title'>Language</h2>
							<p className='introduction'>
								English is the most spoken language in the world, with over 1.5
								billion native speakers. It is the official language of 53
								countries and is used in business, science, technology, and
								education.
							</p>

							<a href='#roadmap' className='explore-link'>
								explorer program <FiLink />
							</a>
						</div>
						<div className='image'>
							<img src='./assets/images/home-image.png' alt='learn english' />
						</div>
					</div>
				</section>
			</MaxContainer>
		</BlurCircles>
	)
}
