import { useTranslation } from 'react-i18next'
import { TextGenerateEffect } from '../ui/text-generate-effect'

export function TextGenerateEffectDemo() {
	const { t, i18n } = useTranslation()

	const words = t('welcome')
	return <TextGenerateEffect words={words} />
}
