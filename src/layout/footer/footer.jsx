import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t, i18n } = useTranslation()
	return (
		<div className='text-center py-7 bg-gray-200 rounded-t-4xl font-dmSans'>
			<h1>{t('huquq')}</h1>
		</div>
	)
}

export default Footer
