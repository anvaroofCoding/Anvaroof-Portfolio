import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'

const LanguageSelector = () => {
	const { i18n } = useTranslation()
	const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz')

	const options = [
		{ value: 'uz', label: "O'zbekcha" },
		{ value: 'en', label: 'English' },
		{ value: 'ru', label: 'Русский' },
		{ value: 'ar', label: 'العربية' },
		{ value: 'kz', label: 'Қазақша' },
	]

	const selectedOption = options.find(option => option.value === lang)

	const handleChange = selected => {
		setLang(selected.value)
	}

	useEffect(() => {
		i18n.changeLanguage(lang)
		localStorage.setItem('lang', lang)
	}, [lang])

	return (
		<div className='w-[200px]'>
			<Select
				options={options}
				value={selectedOption}
				onChange={handleChange}
				className='text-sm'
				isSearchable={false}
			/>
		</div>
	)
}

export default LanguageSelector
