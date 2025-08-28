import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Страница не найдена | SCHMIDT Cars',
	description: 'Запрашиваемая страница не найдена. Вернитесь на главную страницу SCHMIDT Cars.',
	robots: {
		index: false,
		follow: false,
	},
}

export default function NotFound() {
	return (
		<main className="min-h-screen bg-black flex items-center justify-center">
			<div className="container-modern text-center">
				<div className="card-modern space-y-8">
					<div className="space-y-4">
						<h1 className="text-6xl md:text-8xl font-bold text-white">404</h1>
						<h2 className="text-4xl md:text-5xl lg:text-6xl text-yellow-400">Страница не найдена</h2>
						<p className="text-body text-gray-200 max-w-md mx-auto">
							К сожалению, запрашиваемая страница не существует или была перемещена.
						</p>
					</div>
					
					<div className="space-y-4">
						<Link 
							href="/" 
							className="btn-modern-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-300"
						>
							Вернуться на главную
						</Link>
						
						<div className="space-y-2">
							<p className="text-caption text-gray-400">Популярные страницы:</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/arenda-avto-vef" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
									Аренда на ВЭФ
								</Link>
								<Link href="/avtopark" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
									Автопарк
								</Link>
								<Link href="/?scroll=contact-form" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
									Контакты
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
} 