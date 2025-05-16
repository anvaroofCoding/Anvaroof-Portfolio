import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane } from 'react-icons/fa'

const Contact = () => {
	const { t, i18n } = useTranslation()

	return (
		<div className='my-[50px]'>
			<div
				className='container lg:h-[500px] h-auto  grid lg:grid-cols-2 grid-cols-1 '
				id='contact'
			>
				<div className=' w-full h-[100%] flex justify-center items-center'>
					<h2 className='lg:text-[100px] text-[50px] font-dmSans'>
						{t('me_contact')}
					</h2>
				</div>
				<div className=' w-full h-[100%] flex justify-center items-center'>
					<div className='lg:w-[540px] w-full h-auto lg:h-[400px] duration-200 mt-5 h-border rounded-t-[12px]  font-dmSans p-5 flex flex-col gap-[15px]'>
						<a
							href='https://github.com/anvaroofCoding'
							className='flex items-center gap-[10px] font-bold text-[15px] lg:text-[25px]'
						>
							<Github />
							<span>Git Hub</span>
						</a>
						<hr className='w-full' />
						<a
							href='islomanvarov05@gmail.com'
							className='flex items-center gap-[10px] font-bold text-[15px] lg:text-[25px]'
						>
							<Mail />
							<span>islomanvarov05@gmail.com</span>
						</a>
						<hr className='w-full' />
						<a
							href='@https://t.me/anvaroof_web'
							target='_blank'
							className='flex items-center gap-[10px] font-bold text-[15px] lg:text-[25px]'
						>
							<FaTelegramPlane />
							<span>Telegram</span>
						</a>
						<hr className='w-full' />
						<a
							href='https://www.linkedin.com/in/islomjon-anvarov-toxirjon-o-g-li-630706324/'
							className='flex items-center gap-[10px] font-bold text-[15px] lg:text-[25px]'
						>
							<Linkedin />
							<span>Linkedin</span>
						</a>
						<hr className='w-full' />
						<a
							href='https://www.instagram.com/islom.tech/'
							className='flex items-center gap-[10px] font-bold text-[15px] lg:text-[25px]'
						>
							<Instagram />
							<span>Instagram</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
