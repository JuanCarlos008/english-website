import React from 'react'
import './styles.scss'

export const Html = (props) => {
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
				<linearGradient id='myGradientHtml' gradientTransform='rotate(0)'>
					<stop offset='0%' />
					<stop offset='100%' />
				</linearGradient>
			</defs>
			<path
				d='M30.269 0h6.447v6.37h5.898V0h6.447v19.281h-6.447v-6.453h-5.898v6.453h-6.442V0h-.005zM57.534 6.393H51.86V0H69.66v6.393H63.98v12.888h-6.447V6.393zM72.483 0h6.72l4.136 6.775L87.469 0h6.72v19.281h-6.417V9.724l-4.433 6.858h-.113l-4.44-6.852v9.551h-6.303V0zM97.395 0h6.453v12.912h9.057v6.375h-15.51V0z'
				// fill='#FEFCFF'
				fill='url(#myGradientHtml)'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M30.066 131.512L17.875 28.106h107.25L112.928 131.5 71.44 143l-41.374-11.488zm24.65-56.604L53.558 61.92h48.531l1.132-12.68H39.706l3.42 38.355h43.955l-1.472 16.444-14.145 3.826h-.012l-14.12-3.814-.907-10.11H43.687l1.775 19.912 25.978 7.209 26.02-7.209 3.17-35.536.31-3.402H54.715v-.006z'
				// fill='#FEFCFF'
				fill='url(#myGradientHtml)'
			/>
		</svg>
	)
}
