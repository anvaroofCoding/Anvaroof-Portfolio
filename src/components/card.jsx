import { t } from 'i18next'
import React from 'react'
import img1 from '../assets/images/footer/img1.png'
import img2 from '../assets/images/footer/img2.png'
import { MultiStepLoaderDemo } from './buttons/demoButton'

const Card = () => {
	return (
		<div>
			<div
				className='container h-[500px]  text-center flex flex-col items-center justify-center gap-[20px] relative'
				id='intizom'
			>
				<img
					src={img1}
					alt='intizom'
					className='absolute lg:top-6 top-0 left-5'
				/>
				<img
					src={img2}
					alt='intizom'
					className='absolute bottom-10 lg:right-[200px] right-0 lg:w-25 w-20'
				/>
				<h1 className='lg:text-[100px] text-[40px] font-dmSans'>
					{t('intizom_title')}
				</h1>
				<p className='lg:text-[30px] font-dmSans'>{t('intizom_disc')}</p>
				<MultiStepLoaderDemo />
			</div>
		</div>
	)
}

export default Card
