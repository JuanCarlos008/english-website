import { MaxContainer } from '@/components/containers/MaxContainer'
import React from 'react'
import './styles.scss'

export const Footer = () => {
	return (
		<footer className='footer-wrapper'>
			<MaxContainer>
				<div className='footer-content'>
					<div className='info-contact'>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Juan Carlos H.S</span>
							</div>
							<div className='info-contact__item__info'>
								<a href='#inicio'>
									Desarrollador web <br /> Frontend
								</a>
							</div>
						</div>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Github</span>
							</div>
							<div className='info-contact__item__info'>
								<a href='https://github.com/JuanCarlos008' target='_blank'>
									https://github.com/JuanCarlos008
								</a>
							</div>
						</div>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Linkedin</span>
							</div>
							<div className='info-contact__item__info'>
								<a
									href='https://www.linkedin.com/in/juan-carlos008/'
									target='_blank'
								>
									https://www.linkedin.com/in/juan-carlos008/
								</a>
							</div>
						</div>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Correo</span>
							</div>
							<div className='info-contact__item__info'>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://mail.google.com/mail/?view=cm&fs=1&to=juan_carlos008@outlook.com'
								>
									juan_carlos008@outlook.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</MaxContainer>
			<div className='copy-right'>
				<MaxContainer>
					<div className='content'>
						<p>Juan Carlos H.S. - Desarrollador Frontend</p>
					</div>
				</MaxContainer>
			</div>
		</footer>
	)
}
