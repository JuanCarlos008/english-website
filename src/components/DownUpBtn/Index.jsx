import React, { useEffect, useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import './styles.scss'

export const DownUpBtn = () => {
	const [isScrolling, setIsScrolling] = useState(false)
	const [section, setSection] = useState('#why?')

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 50) {
				setIsScrolling(true)
				setSection('#inicio')
			} else {
				setIsScrolling(false)
				setSection('#why?')
			}
		}
		return () => (window.onscroll = null)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<a
			href={section}
			className={`down-up-btn ${isScrolling ? 'isScrolling' : ''}`}
			aria-label='Scrolling up'
		>
			<span>
				<BsArrowDown />
			</span>
		</a>
	)
}
