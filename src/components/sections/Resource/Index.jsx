import { BlurCircles } from '@/components/Background/BlurCircles'
import { MaxContainer } from '@/components/containers/MaxContainer'
import React from 'react'

import './styles.scss'
import { NewWorkCard } from '@/components/ResourceCard/NewWorkCard'
import { data } from './data'

export const Resource = () => {
	return (
		<BlurCircles>
			<div className='project section' id='resources'>
				<MaxContainer>
					<div className='project__wrapper'>
						<h2 className='section-title'>Resoucers</h2>
						<div>
							<h3
								style={{
									marginBottom: '50px',
									fontSize: '35px',
									color: 'var(--quintary-text-color)',
								}}
							>
								Youtube
							</h3>
							<div className='project__cards-wrapper'>
								{data.youtubeResource.map((d) => (
									<NewWorkCard data={d} key={data.id} />
								))}
							</div>
						</div>

						<div>
							<h3
								style={{
									marginBottom: '50px',
									fontSize: '35px',
									color: 'var(--quintary-text-color)',
								}}
							>
								Spotify podcast
							</h3>
							<div className='project__cards-wrapper'>
								{data.spotifyResource.map((d) => (
									<NewWorkCard data={d} key={data.id} />
								))}
							</div>
						</div>

						<div>
							<h3
								style={{
									marginBottom: '50px',
									fontSize: '35px',
									color: 'var(--quintary-text-color)',
								}}
							>
								Website
							</h3>
							<div className='project__cards-wrapper'>
								{data.websiteResource.map((d) => (
									<NewWorkCard data={d} key={data.id} />
								))}
							</div>
						</div>
					</div>
				</MaxContainer>
			</div>
		</BlurCircles>
	)
}
