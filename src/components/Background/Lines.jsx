import React from 'react'
import { SvgFirstLine } from '../SvgLine/SvgFirstLine'
import { SvgSecondLine } from '../SvgLine/SvgSecondLine'

export const Lines = ({ children, bg }) => {
	return (
		<div className='lines-wrapper' style={{ background: `var(${bg})` }}>
			{children}
			<div className='floating-elements'>
				<SvgFirstLine styleClass='floating-line floating-line--1' />
				<SvgSecondLine styleClass='floating-line floating-line--2' />
			</div>
		</div>
	)
}
