'use client'

interface LoadingSpinnerProps {
	size?: 'sm' | 'md' | 'lg'
	text?: string
	className?: string
}

export default function LoadingSpinner({ 
	size = 'md', 
	text = 'Загрузка...',
	className = ''
}: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: 'w-6 h-6',
		md: 'w-8 h-8',
		lg: 'w-12 h-12'
	}

	return (
		<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
			<div className={`relative ${sizeClasses[size]}`}>
				{/* Основной спиннер */}
				<div className={`absolute inset-0 rounded-full border-2 border-gray-600/30 ${sizeClasses[size]}`}></div>
				
				{/* Анимированная граница */}
				<div className={`absolute inset-0 rounded-full border-2 border-transparent border-t-yellow-400 border-r-yellow-400/50 ${sizeClasses[size]} animate-spin`}></div>
				
				{/* Внутренний круг */}
				<div className={`absolute inset-1 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent ${size === 'sm' ? 'inset-0.5' : size === 'lg' ? 'inset-2' : 'inset-1'}`}></div>
			</div>
			
			{/* Текст загрузки */}
			{text && (
				<div className="text-center">
					<p className="text-sm text-gray-400 font-medium">{text}</p>
					<div className="flex space-x-1 mt-2 justify-center">
						<div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
						<div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
						<div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
					</div>
				</div>
			)}
		</div>
	)
}

// Компонент для загрузки страницы
export function PageLoader() {
	return (
		<div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
			<div className="text-center space-y-6">
				{/* Логотип */}
				<div className="flex items-center justify-center space-x-3 mb-8">
					<img 
						src="/schmidt-cars-logo.png" 
						alt="Schmidt Cars" 
						className="h-16 w-16 animate-pulse"
					/>
					<div className="text-white">
						<div className="text-lg font-bold">SCHMIDT CARS</div>
						<div className="text-xs text-gray-400">Premium Car Rental</div>
					</div>
				</div>
				
				{/* Спиннер */}
				<LoadingSpinner size="lg" text="Загрузка..." />
				
				{/* Прогресс */}
				<div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
					<div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
				</div>
			</div>
		</div>
	)
}

// Компонент для загрузки карточек
export function CardLoader() {
	return (
		<div className="card-modern animate-pulse">
			{/* Изображение */}
			<div className="h-48 bg-gray-700 rounded-t-2xl"></div>
			
			{/* Контент */}
			<div className="p-6 space-y-4">
				{/* Заголовок */}
				<div className="h-6 bg-gray-700 rounded w-3/4"></div>
				
				{/* Подзаголовок */}
				<div className="h-4 bg-gray-700 rounded w-1/2"></div>
				
				{/* Характеристики */}
				<div className="grid grid-cols-2 gap-3">
					<div className="h-16 bg-gray-700 rounded-xl"></div>
					<div className="h-16 bg-gray-700 rounded-xl"></div>
				</div>
				
				{/* Особенности */}
				<div className="space-y-2">
					<div className="h-3 bg-gray-700 rounded w-full"></div>
					<div className="h-3 bg-gray-700 rounded w-4/5"></div>
				</div>
				
				{/* Кнопка */}
				<div className="h-12 bg-gray-700 rounded-xl"></div>
			</div>
		</div>
	)
}

// Компонент для загрузки секций
export function SectionLoader() {
	return (
		<div className="space-y-8">
			{/* Заголовок секции */}
			<div className="text-center space-y-4">
				<div className="h-8 bg-gray-700 rounded w-1/3 mx-auto"></div>
				<div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
			</div>
			
			{/* Сетка карточек */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{Array.from({ length: 6 }).map((_, index) => (
					<CardLoader key={index} />
				))}
			</div>
		</div>
	)
} 