import React from 'react'
import { Nav } from '@components/common/Nav/Index'

import { HomeSection } from '@/components/sections/Home/Index2'

import { ServicesSection } from '@/components/sections/ServiceC/Index'
import { Lines } from '@components/Background/Lines'
import { Footer } from '@/components/sections/Footer/Index'
import { Resource } from '@/components/sections/Resource/Index'
import { DownUpBtn } from '@/components/DownUpBtn/Index'
import { WhySection } from '@/components/sections/Why/Index'

export const App = () => {
	return (
		<div className='app-wrapper'>
			<DownUpBtn />
			<Nav />
			<HomeSection />
			<Lines>
				<WhySection />
				<ServicesSection />
			</Lines>
			<Resource />
			<Footer />
		</div>
	)
}
