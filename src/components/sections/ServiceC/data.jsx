import { FaLaptopCode } from 'react-icons/fa'
import { TbBrowserCheck } from 'react-icons/tb'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { CgDisplayFlex } from 'react-icons/cg'
import { SiAiohttp } from 'react-icons/si'

export const data = [
	{
		id: 1,
		title: 'Web Development',
		description:
			'Crear tu sitio web para establecer tu marca o compañía a nivel digital.',
		icon: <FaLaptopCode />,
	},

	{
		id: 2,
		title: 'UI/UX',
		description:
			'Crear interfaces amigables con los usuarios y fáciles de utilizar.',
		icon: <AiOutlineFormatPainter />,
	},
	{
		id: 3,
		title: 'Responsive web design',
		description:
			'Hacer que tu sitio web se adapte a los diferentes dispositivos con los cuales los usuarios interactúan en el día a día',
		icon: <CgDisplayFlex />,
	},
	{
		id: 4,
		title: 'Handle APIs',
		description:
			'Nutrir tu aplicación web con datos de servicios internos al igual que externos.',
		icon: <SiAiohttp />,
	},
	{
		id: 5,
		title: 'SEO',
		description:
			'Implementar estrategias y técnicas de optimización que se hacen para que la misma aparezca orgánicamente en los buscadores',
		icon: <TbBrowserCheck />,
	},
]
