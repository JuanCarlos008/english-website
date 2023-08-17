import { MaxContainer } from '@/components/containers/MaxContainer'
import { useEffect, useId, useState } from 'react'
import { Hamburger } from '@/components/common/Hamburger/Index'
import './styles.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const navPaths = [
	{
		path: '#why?',
		name: 'why?',
	},
	{
		path: '#roadmap',
		name: 'roadmap',
	},
	{
		path: '#resources',
		name: 'resources',
	},
	{
		path: '#testimonials',
		name: 'testimonials',
	},
]

export const Nav = () => {
	const [isScrolling, setIsScrolling] = useState(false)
	const [isNavOpen, setIsNavOpen] = useState(false)
	useEffect(() => {
		window.scrollY > 50 && setIsScrolling(true)

		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setIsScrolling(true)
				setIsNavOpen(false)
			} else {
				setIsScrolling(false)
			}
		})

		return () =>
			window.removeEventListener('scroll', () => {
				setIsScrolling(false)
				setIsNavOpen(false)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div
			className={`${
				isScrolling ? 'nav-container isScrolling' : 'nav-container'
			}`}
		>
			<MaxContainer>
				<div className='nav'>
					<a href='#inicio' className='nav__brand'>
						<p>Juan C</p>
						<span>.</span>
					</a>
					<nav
						className={`${
							isNavOpen ? 'nav__navigation isActive' : 'nav__navigation'
						}`}
					>
						{navPaths.map((path) => (
							<a href={path.path} key={useId()}>
								{path.name}
							</a>
						))}
					</nav>
					<div className='wrapper-togle-cv'>
						<div className='nav__external-links'>
							<a
								href='https://github.com/JuanCarlos008'
								target='_blank'
								rel='noopener noreferrer'
								className='link'
								aria-label='Link to GitHub'
							>
								<AiFillGithub />
							</a>
							<a
								href='https://www.linkedin.com/in/juan-carlos008/'
								target='_blank'
								rel='noopener noreferrer'
								className='link'
								aria-label='Link to linkedin'
							>
								<AiFillLinkedin />
							</a>
						</div>
						<Hamburger setOpen={setIsNavOpen} isOpen={isNavOpen} />
					</div>
				</div>
			</MaxContainer>
		</div>
	)
}
