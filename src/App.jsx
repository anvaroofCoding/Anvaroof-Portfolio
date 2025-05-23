import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import AnimatedWrapper from './components/AnimatedWrapper'
import Card from './components/card'
import Contact from './components/contact'
import Section from './components/section'
import Shior from './components/shior'
import './lang/i18n'
import Layout from './layout/navbar/layout'

const App = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = lng => {
		// localStorage.setItem('lang', i18n.changeLanguage(lng))
		i18n.changeLanguage(lng)
		localStorage.setItem('lang', lng)
	}
	return (
		<div>
			<AnimatedWrapper>
				<Layout>
					<Outlet />
					<Shior />
					<Section />
					<AboutMe />
					<Card />
					<Contact />
				</Layout>
			</AnimatedWrapper>
		</div>
	)
}

export default App
