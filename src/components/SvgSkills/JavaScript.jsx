import React from 'react'
import './styles.scss'

export const JavaScript = (props) => {
	return (
		<svg
			width={143}
			height={143}
			viewBox='0 0 143 143'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='skill-icon'
			{...props}
		>
			<defs>
				<linearGradient id='myGradientJs' gradientTransform='rotate(0)'>
					<stop offset='0%' />
					<stop offset='100%' />
				</linearGradient>
			</defs>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M0 0h143v143H0V0zm109.318 119.882c-6.632 0-10.38-3.456-13.258-8.163l-10.921 6.345c3.944 7.794 12.006 13.74 24.488 13.74 12.763 0 22.267-6.625 22.267-18.727 0-11.219-6.447-16.206-17.863-21.11l-3.361-1.436c-5.768-2.503-8.264-4.13-8.264-8.163 0-3.26 2.502-5.756 6.435-5.756 3.855 0 6.34 1.627 8.645 5.756l10.463-6.715c-4.427-7.788-10.564-10.76-19.108-10.76-12 0-19.68 7.674-19.68 17.755 0 10.934 6.434 16.111 16.135 20.241l3.36 1.441c6.131 2.682 9.784 4.314 9.784 8.92 0 3.849-3.557 6.632-9.122 6.632zm-52.076-.09c-4.618 0-6.542-3.158-8.652-6.911l-10.94 6.625c3.17 6.709 9.403 12.274 20.158 12.274 11.91 0 20.067-6.333 20.067-20.246v-45.88H64.44v45.701c0 6.715-2.788 8.437-7.203 8.437h.006z'
				fill='url(#myGradientJs)'
			/>
		</svg>
	)
}
