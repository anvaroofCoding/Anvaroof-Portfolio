import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
	const { t, i18n } = useTranslation()

	return (
		<div className='xl:my-[200px]'>
			<div
				className='container xl:h-[600px] h-[1000px] grid xl:grid-cols-2 grid-cols-1'
				id='about'
			>
				<div className=' h-[100%] w-[100$] flex justify-center items-center'>
					{/* <TextGenerateEffectDemo /> */}
					<h2 className='font-dmSans text-black xl:text-[130px]/[120px] text-[50px]/[45px]'>
						{t('me_disc')}
					</h2>
				</div>
				<div className=' h-[100%] w-[100$] relative'>
					<div className='lg:w-[340px] animates duration-200 h-[200px] mt-5 h-border rounded-[12px] xl:absolute top-[100px] left-2  font-dmSans p-5'>
						<h2>{t('me_about')}</h2>
						<h2>{t('me_date')}</h2>
						<h2>{t('me_Adres')}</h2>
						<h2 className='font-bold'>{t('me_kurs')}</h2>
					</div>
					<div className='lg:w-[300px] animates duration-200 h-[150px] mt-5 h-border rounded-[12px] xl:absolute bottom-[280px] right-2  font-dmSans p-5'>
						<h2>{t('maqsad')}</h2>
					</div>
					<div className='lg:w-[300px] animates duration-200 h-[150px] mt-5 h-border rounded-b-[12px] xl:absolute bottom-[100px] left-2  font-dmSans p-5'>
						<h2>{t('intizom')}</h2>
					</div>
					<div className='lg:w-[340px] animates duration-200 h-[200px] mt-5 h-border rounded-t-[12px] xl:absolute bottom-[40px] right-2  font-dmSans p-5'>
						<h2>{t('hobby')}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
