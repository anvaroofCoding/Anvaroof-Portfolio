import React from 'react'
import { useTranslation } from 'react-i18next'

const Shior = () => {
	const { t, i18n } = useTranslation()

	return (
		<div>
			<div className='container grid xl:grid-cols-2 grid-cols-1 xl:h-[400px] h-[500px] md:w-[900px]'>
				<div className='w-full h-[100%] flex justify-center items-center'>
					<h2 className='xl:text-[180px]/[150px] md:text-[140px]/[120px] text-center text-[100px]/[90px]'>
						{t('shior')}
					</h2>
				</div>
				<div className='w-full h-[100%] flex justify-center items-center'>
					<h2 className='md:text-[25px] xl:text-start text-center text-[20px] font-dmSans'>
						{t('shior_disc')}
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Shior
