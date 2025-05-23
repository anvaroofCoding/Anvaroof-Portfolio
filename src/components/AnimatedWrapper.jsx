import { useEffect, useState } from 'react'
import Loader from './supper-loading' // loader komponentingiz shu faylda bo‘lsa

export default function AnimatedWrapper({ children }) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000) // 2s kutish
		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen bg-black text-white text-3xl animate-pulse'>
				<Loader />
			</div>
		)
	}

	return <>{children}</>
}
