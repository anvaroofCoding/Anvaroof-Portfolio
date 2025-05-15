import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/images/header.img/img1.png'
import img2 from '../assets/images/header.img/img2.png'
import img3 from '../assets/images/header.img/img3.png'
import img4 from '../assets/images/header.img/img4.png'
import GetButton from './buttons/getButton'

const Header = () => {
	const { t, i18n } = useTranslation()
	return (
		<div>
			<div className='container font-roboto xl:h-[750px] h-[90vh] flex justify-center items-center flex-col gap-[30px] relative'>
				<img
					src={img1}
					alt='img'
					className='absolute top-0 left-0 xl:block hidden'
				/>
				<img
					src={img1}
					alt='img'
					className='absolute top-10 left-0 w-[150px] md:w-[300px] block xl:hidden'
				/>
				<img
					src={img2}
					alt='img'
					className='absolute top-10 right-50 xl:block hidden'
				/>
				<img
					src={img3}
					alt='img'
					className='absolute bottom-[25%] left-40 xl:block hidden'
				/>
				<img
					src={img3}
					alt='img'
					className='absolute bottom-[15%] left-0 block xl:hidden w-[80px] md:w-[280px]'
				/>
				<img
					src={img4}
					alt='img'
					className='absolute bottom-[20%] right-35 xl:block hidden'
				/>
				<img
					src={img4}
					alt='img'
					className='absolute bottom-[10%] right-0 block xl:hidden w-[100px] md:w-[280px]'
				/>
				<h1 className='flex flex-col text-center xl:text-[96px]/[100px] md:text-[60px] text-[30px] font-[400]'>
					<span>{t('hi')}</span>
					<span>{t('welcome')}!</span>
				</h1>

				<p className='xl:w-[608px] font-dmSans xl:text-5 md:text-[20px] text-[10px] font-[400] text-center'>
					{t('header_disc')}
				</p>
				<GetButton />
			</div>
		</div>
	)
}

export default Header
