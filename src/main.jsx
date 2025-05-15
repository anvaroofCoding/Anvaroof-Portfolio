import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/header.jsx'
import Shior from './components/shior.jsx'
import './index.css'
import './lang/i18n.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/' element={<Header />} />
					<Route path='/' element={<Shior />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
