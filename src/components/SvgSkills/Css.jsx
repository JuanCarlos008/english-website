import React from 'react'
import './styles.scss'

export const Css = (props) => {
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
				<linearGradient id='myGradientCss' gradientTransform='rotate(0)'>
					<stop offset='0%' />
					<stop offset='100%' />
				</linearGradient>
			</defs>
			<path
				d='M44.7 0h15.36v6.423h-8.938v6.423h8.938v6.423H44.7V0zM63.128 0h15.367v5.589h-8.938v1.114h8.938V19.55H63.128v-5.863h8.938v-1.12h-8.938V0zM81.57 0h15.354v5.589h-8.938v1.114h8.938V19.55H81.569v-5.863h8.938v-1.12h-8.938V0z'
				fill='url(#myGradientCss)'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M71.446 143l-41.374-11.488L17.875 28.106h107.25L112.934 131.5 71.446 143zM41.988 74.914l1.138 12.68h43.955l-1.472 16.444-14.145 3.826h-.012l-14.12-3.814-.907-10.11H43.693l1.775 19.912 25.978 7.209 26.02-7.209 3.17-35.536.31-3.402 2.288-25.674H39.706l1.156 12.685H89.34l-1.156 12.99H41.988z'
				fill='url(#myGradientCss)'
			/>
		</svg>
	)
}
