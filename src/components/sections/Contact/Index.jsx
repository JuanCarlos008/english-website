import { ContactForm } from '@/components/ContactForm/Index'
import { MaxContainer } from '@/components/containers/MaxContainer'
import React from 'react'
import './styles.scss'

export const ContactSection = () => {
	return (
		<div className='contact section' id='contacto'>
			<MaxContainer>
				<div className='contact__wrapper'>
					<ContactForm />
				</div>
			</MaxContainer>
		</div>
	)
}
