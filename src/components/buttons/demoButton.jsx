'use client'
import { IconSquareRoundedX } from '@tabler/icons-react'
import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { MultiStepLoader as Loader } from '../ui/multi-step-loader'

export function MultiStepLoaderDemo() {
	const [loading, setLoading] = useState(false)
	const { t, i18n } = useTranslation()
	const loadingStates = [
		{
			text: t('gym'),
		},
		{
			text: t('book_read'),
		},
		{
			text: t('trello'),
		},
		{
			text: t('Ibodat'),
		},
		{
			text: t('Suhbat'),
		},
		{
			text: t('Uyqu'),
		},
		{
			text: t('food'),
		},
	]

	return (
		<div className='w-full h-[10vh] flex items-center justify-center'>
			{/* Core Loader Modal */}
			<Loader loadingStates={loadingStates} loading={loading} duration={2000} />
			{/* The buttons are for demo only, remove it in your actual code ⬇️ */}
			<StyledWrapper>
				<button
					onClick={() => setLoading(true)}

					// className='bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center'
					// style={{
					// 	boxShadow:
					// 		'0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset',
					// }}
				>
					<span className='button_top'>{t('intizom_tbn')}</span>
				</button>
			</StyledWrapper>
			{loading && (
				<button
					className='fixed top-4 right-4 text-black dark:text-white z-[120]'
					onClick={() => setLoading(false)}
				>
					<IconSquareRoundedX className='h-10 w-10' />
				</button>
			)}
		</div>
	)
}

const StyledWrapper = styled.div`
	button {
		/* Variables */
		--button_radius: 0.75em;
		--button_color: #e8e8e8;
		--button_outline_color: #000000;
		font-size: 17px;
		font-weight: bold;
		border: none;
		cursor: pointer;
		border-radius: var(--button_radius);
		background: var(--button_outline_color);
	}

	.button_top {
		display: block;
		box-sizing: border-box;
		border: 2px solid var(--button_outline_color);
		border-radius: var(--button_radius);
		padding: 0.75em 1.5em;
		background: var(--button_color);
		color: var(--button_outline_color);
		transform: translateY(-0.2em);
		transition: transform 0.1s ease;
	}

	button:hover .button_top {
		/* Pull the button upwards when hovered */
		transform: translateY(-0.33em);
	}

	button:active .button_top {
		/* Push the button downwards when pressed */
		transform: translateY(0);
	}
`
