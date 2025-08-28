'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const isActive = (path: string) => {
		if (path === '/' && pathname === '/') return true
		if (path !== '/' && pathname.startsWith(path)) return true
		return false
	}

	const toggleMobileMenu = () => {
		console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen)
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10" role="banner">
			<div className="container-modern">
				<div className="flex items-center justify-between py-4">
					{/* Логотип */}
					<Link href="/" className="flex items-center space-x-3 group" onClick={closeMobileMenu} aria-label="Перейти на главную страницу">
						<img 
							src="/schmidt-cars-logo.png" 
							alt="Schmidt Cars - Премиум аренда автомобилей" 
							className="h-16 w-16 logo-natural"
							loading="eager"
						/>
						<div className="hidden sm:block">
							<div className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
								SCHMIDT CARS
							</div>
							<div className="text-xs text-gray-400">
								Premium Car Rental
							</div>
						</div>
					</Link>
					
					{/* Навигация */}
					<nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Главное меню">
						<Link 
							href="/" 
							className={`transition-all duration-300 relative group ${
								isActive('/') 
									? 'text-yellow-400' 
									: 'text-white hover:text-yellow-400'
							}`}
							aria-current={isActive('/') ? 'page' : undefined}
						>
							Главная
							<span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
								isActive('/') 
									? 'w-full bg-yellow-400' 
									: 'w-0 bg-yellow-400 group-hover:w-full'
							}`}></span>
						</Link>
						<Link 
							href="/arenda-avto-vef" 
							className={`transition-all duration-300 relative group ${
								isActive('/arenda-avto-vef') 
									? 'text-yellow-400' 
									: 'text-white hover:text-yellow-400'
							}`}
							aria-current={isActive('/arenda-avto-vef') ? 'page' : undefined}
						>
							Аренда на ВЭФ
							<span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
								isActive('/arenda-avto-vef') 
									? 'w-full bg-yellow-400' 
									: 'w-0 bg-yellow-400 group-hover:w-full'
							}`}></span>
						</Link>
						<Link 
							href="/avtopark" 
							className={`transition-all duration-300 relative group ${
								isActive('/avtopark') 
									? 'text-yellow-400' 
									: 'text-white hover:text-yellow-400'
							}`}
							aria-current={isActive('/avtopark') ? 'page' : undefined}
						>
							Автопарк
							<span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
								isActive('/avtopark') 
									? 'w-full bg-yellow-400' 
									: 'w-0 bg-yellow-400 group-hover:w-full'
							}`}></span>
						</Link>
						<Link 
							href="/usloviya" 
							className={`transition-all duration-300 relative group ${
								isActive('/usloviya') 
									? 'text-yellow-400' 
									: 'text-white hover:text-yellow-400'
							}`}
							aria-current={isActive('/usloviya') ? 'page' : undefined}
						>
							Условия
							<span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
								isActive('/usloviya') 
									? 'w-full bg-yellow-400' 
									: 'w-0 bg-yellow-400 group-hover:w-full'
							}`}></span>
						</Link>

						<Link 
							href="/about" 
							className={`transition-all duration-300 relative group ${
								isActive('/about') 
									? 'text-yellow-400' 
									: 'text-white hover:text-yellow-400'
							}`}
							aria-current={isActive('/about') ? 'page' : undefined}
						>
							О нас
							<span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
								isActive('/about') 
									? 'w-full bg-yellow-400' 
									: 'w-0 bg-yellow-400 group-hover:w-full'
							}`}></span>
						</Link>

						<Link 
							href="/?scroll=contact-form" 
							className="transition-all duration-300 relative group text-white hover:text-yellow-400"
						>
							Контакты
							<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</nav>

					{/* Номер телефона для десктопа */}
					<div className="hidden md:flex items-center space-x-3">
						<a 
							href="tel:+79084444043" 
							className="flex items-center space-x-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-xl hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group"
							aria-label="Позвонить по телефону +7 908 444-40-43"
						>
							<svg className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors">+7 908 444-40-43</span>
						</a>
					</div>

					{/* Номер телефона для мобильной версии */}
					<div className="md:hidden flex items-center space-x-2">
						<a 
							href="tel:+79084444043" 
							className="flex items-center space-x-2 px-3 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group"
							aria-label="Позвонить по телефону +7 908 444-40-43"
						>
							<svg className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span className="text-white font-semibold text-xs group-hover:text-yellow-400 transition-colors">+7 908 444-40-43</span>
						</a>
					</div>
					
					{/* Мобильное меню */}
					<div className="md:hidden relative z-50">
						<button 
							onClick={toggleMobileMenu}
							className="text-white hover:text-yellow-400 transition-colors p-2 relative z-50"
							aria-label="Открыть меню"
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
							type="button"
						>
							<div className="w-6 h-6 flex flex-col justify-center items-center">
								<span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
									isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
								}`}></span>
								<span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
									isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
								}`}></span>
								<span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
									isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
								}`}></span>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* Мобильное меню */}
			<div 
				id="mobile-menu"
				className={`md:hidden fixed inset-0 z-40 transition-all duration-300 bg-black/90 ${
					isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				role="dialog"
				aria-modal="true"
				aria-label="Мобильное меню"
			>
				{/* Затемнение */}
				<div 
					className="absolute inset-0 bg-black/95 backdrop-blur-md"
					onClick={closeMobileMenu}
					aria-hidden="true"
				></div>
				
				{/* Меню */}
				<div className={`absolute top-0 right-0 w-64 h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-l border-white/20 shadow-2xl transition-transform duration-300 rounded-l-2xl ${
					isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
					<div className="p-4 h-full flex flex-col bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm rounded-l-2xl">
						{/* Заголовок */}
						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center space-x-2">
								<img 
									src="/schmidt-cars-logo.png" 
									alt="Schmidt Cars" 
									className="h-8 w-8"
								/>
								<div>
									<div className="text-sm font-bold text-white">SCHMIDT CARS</div>
									<div className="text-xs text-gray-400">Premium Car Rental</div>
								</div>
							</div>
							<button 
								onClick={closeMobileMenu}
								className="text-white hover:text-yellow-400 transition-colors p-1"
								aria-label="Закрыть меню"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>

						{/* Навигация */}
						<nav className="flex-1 space-y-2" role="navigation" aria-label="Мобильное меню">
							<Link 
								href="/" 
								onClick={closeMobileMenu}
								className={`block w-full p-3 rounded-xl transition-all duration-300 ${
									isActive('/') 
										? 'bg-yellow-400 text-black font-bold shadow-lg' 
										: 'text-white bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:text-yellow-300 border border-white/20'
								}`}
								aria-current={isActive('/') ? 'page' : undefined}
							>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
									</svg>
									<span className="text-base font-semibold">Главная</span>
								</div>
							</Link>
							
							<Link 
								href="/arenda-avto-vef" 
								onClick={closeMobileMenu}
								className={`block w-full p-3 rounded-xl transition-all duration-300 ${
									isActive('/arenda-avto-vef') 
										? 'bg-yellow-400 text-black font-bold shadow-lg' 
										: 'text-white bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:text-yellow-300 border border-white/20'
								}`}
								aria-current={isActive('/arenda-avto-vef') ? 'page' : undefined}
							>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
									<span className="text-base font-semibold">Аренда на ВЭФ</span>
								</div>
							</Link>
							
							<Link 
								href="/avtopark" 
								onClick={closeMobileMenu}
								className={`block w-full p-3 rounded-xl transition-all duration-300 ${
									isActive('/avtopark') 
										? 'bg-yellow-400 text-black font-bold shadow-lg' 
										: 'text-white bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:text-yellow-300 border border-white/20'
								}`}
								aria-current={isActive('/avtopark') ? 'page' : undefined}
							>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
									</svg>
									<span className="text-base font-semibold">Автопарк</span>
								</div>
							</Link>
							
							<Link 
								href="/usloviya" 
								onClick={closeMobileMenu}
								className={`block w-full p-3 rounded-xl transition-all duration-300 ${
									isActive('/usloviya') 
										? 'bg-yellow-400 text-black font-bold shadow-lg' 
										: 'text-white bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:text-yellow-300 border border-white/20'
								}`}
								aria-current={isActive('/usloviya') ? 'page' : undefined}
							>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
									<span className="text-base font-semibold">Условия</span>
								</div>
							</Link>
							
							<Link 
								href="/about" 
								onClick={closeMobileMenu}
								className={`block w-full p-3 rounded-xl transition-all duration-300 ${
									isActive('/about') 
										? 'bg-yellow-400 text-black font-bold shadow-lg' 
										: 'text-white bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:text-yellow-300 border border-white/20'
								}`}
								aria-current={isActive('/about') ? 'page' : undefined}
							>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span className="text-base font-semibold">О нас</span>
								</div>
							</Link>

							<Link 
								href="/?scroll=contact-form" 
								onClick={closeMobileMenu}
								className="block w-full p-3 rounded-xl transition-all duration-300 text-white bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:text-yellow-300 border border-white/20"
							>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<span className="text-base font-semibold">Контакты</span>
								</div>
							</Link>
						</nav>

						{/* Контакты в мобильном меню */}
						<div className="mt-6 pt-4 border-t border-white/20" role="complementary" aria-label="Контактная информация">
							<div className="space-y-3">
								<a 
									href="tel:+79084444043" 
									className="flex items-center space-x-3 text-white bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/20 hover:bg-black/90 hover:border-yellow-400/30 transition-all duration-300 group"
									aria-label="Позвонить по телефону +7 908 444-40-43"
								>
									<svg className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
									<span className="text-sm font-medium group-hover:text-yellow-400 transition-colors">+7 908 444-40-43</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
} 