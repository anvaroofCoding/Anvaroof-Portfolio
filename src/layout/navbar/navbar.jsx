import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/buttons/button'
import LanguageSelector from '../../components/buttons/langSwitch'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const { t, i18n } = useTranslation()

	return (
		<div>
			{/* Desktop version */}
			<div className='font-roboto container h-[80px] lg:flex hidden justify-end  gap-[50px] items-center'>
				<ul className='font-dmSans flex items-center gap-[30px]'>
					<a href='#intizom'>
						<li className='font-[400] text-[16px] cursor-pointer'>
							{t('iztizomli')}
						</li>
					</a>
					<a href='#soft-skills' className='duration-400'>
						<li className='font-[400] text-[16px] cursor-pointer'>
							{t('shaxsiy_k')}
						</li>
					</a>
					<a href='#konikma'>
						<li className='font-[400] text-[16px] cursor-pointer'>
							{t('konikma')}
						</li>
					</a>
					<a href='#contact'>
						<li className='font-[400] text-[16px] cursor-pointer'>
							{' '}
							{t('cont')}
						</li>
					</a>
					<li className='font-[400] text-[16px] cursor-pointer'>
						<LanguageSelector />
					</li>
				</ul>
				<a href='#about'>
					<Button />
				</a>
			</div>
			{/* Mobile and Planshet version */}
			<div className='container px-4 py-2 font-roboto lg:hidden block'>
				<div className='flex justify-between items-center h-[80px]'>
					<button onClick={() => setOpen(!open)} className='text-2xl'>
						☰
					</button>
				</div>

				{/* Mobile menu toggle */}
				{open && (
					<motion.ul
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						className='flex flex-col gap-4 mt-2 font-dmSans lg:hidden'
					>
						<a href='#inzitom'>
							<li>{t('iztizomli')}</li>
						</a>
						<a href='#soft-skills'>
							<li>{t('shaxsiy_k')}</li>
						</a>
						<a href='#konikma'>
							<li>{t('konikma')}</li>
						</a>
						<a href='#contact'>
							<li>{t('cont')}</li>
						</a>
						<LanguageSelector />
					</motion.ul>
				)}
			</div>
		</div>
	)
}

export default Navbar
