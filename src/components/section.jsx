import { SquareCheckBig } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/images/section.img/img1.png'

const Section = () => {
	const { t, i18n } = useTranslation()

	return (
		<div className='my-[100px]'>
			<div
				className='container lg:h-[700px] h-auto gap-[40px] grid xl:grid-cols-2 grid-cols-1 py-[100px]'
				id='soft-skills'
			>
				<div className='w-[100%] h-[100%] flex flex-col items-start justify-center gap-10'>
					<h2 className='lg:text-[40px] text-[27px] font-[400] font-roboto'>
						{t('section_title')}
					</h2>
					<ul className='font-dmSans flex flex-col items-start gap-[20px]'>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold '>{t('section_disc1')} </span>
								{t('section_disc1_1')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'> {t('section_disc2')}</span>
								{t('section_disc2_2')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('section_disc3')}</span>
								{t('section_disc3_3')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('section_disc4')}: </span>
								{t('section_disc4_4')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('section_disc5')} </span>
								{t('section_disc5_5')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('section_disc6')}</span>
								{t('section_disc6_6')}
							</p>
						</li>
					</ul>
				</div>
				<div className='w-[100%] h-[100%] flex justify-center items-center'>
					<img src={img1} alt='frontend developer' />
				</div>
			</div>
			<div
				className='container lg:h-[700px] h-auto gap-[40px] grid xl:grid-cols-2 grid-cols-1 py-[100px]'
				id='konikma'
			>
				<div className='w-[100%] h-[100%] justify-center items-center xl:flex hidden'>
					<img src={img1} alt='frontend developer' />
				</div>
				<div className='w-[100%] h-[100%] flex flex-col items-start justify-center gap-10'>
					<h2 className='lg:text-[40px] text-[27px] font-[400] font-roboto'>
						{t('sec_1')}
					</h2>
					<ul className='font-dmSans flex flex-col items-start gap-[20px]'>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold '>{t('sec_2')}: </span>
								{t('sec_3')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'> {t('sec_4')}: </span>
								{t('sec_5')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('sec_6')}: </span>
								{t('sec_7')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('sec_8')}: </span>
								{t('sec_9')}
							</p>
						</li>
						<li className='flex justify-center items-center gap-[20px]'>
							<div>
								<SquareCheckBig />
							</div>
							<p className='lg:text-[20px] text-[15px]'>
								<span className='font-bold'>{t('sec_10')}: </span>
								{t('sec_11')}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Section
