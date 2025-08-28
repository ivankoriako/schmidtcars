'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
	children: ReactNode
	fallback?: ReactNode
	onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
	hasError: boolean
	error?: Error
	errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): State {
		// Обновляем состояние, чтобы следующий рендер показал fallback UI
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Логируем ошибку
		console.error('ErrorBoundary caught an error:', error, errorInfo)
		
		// Обновляем состояние с информацией об ошибке
		this.setState({
			error,
			errorInfo
		})
		
		// Вызываем callback если предоставлен
		if (this.props.onError) {
			this.props.onError(error, errorInfo)
		}
		
		// Здесь можно отправить ошибку в сервис аналитики
		// Например, в Sentry или LogRocket
		this.logErrorToService(error, errorInfo)
	}

	private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
		// Пример отправки ошибки в сервис аналитики
		try {
			// Здесь можно добавить интеграцию с Sentry, LogRocket и т.д.
			console.log('Error logged to service:', {
				message: error.message,
				stack: error.stack,
				componentStack: errorInfo.componentStack,
				timestamp: new Date().toISOString(),
				userAgent: navigator.userAgent,
				url: window.location.href
			})
		} catch (loggingError) {
			console.error('Failed to log error:', loggingError)
		}
	}

	private handleRetry = () => {
		this.setState({ hasError: false, error: undefined, errorInfo: undefined })
	}

	private handleReportError = () => {
		const { error, errorInfo } = this.state
		if (error && errorInfo) {
			// Здесь можно открыть форму для отправки отчета об ошибке
			const reportData = {
				error: error.message,
				stack: error.stack,
				componentStack: errorInfo.componentStack,
				url: window.location.href,
				timestamp: new Date().toISOString()
			}
			
			// Отправляем отчет (можно заменить на реальный API)
			console.log('Error report:', reportData)
			
			// Показываем пользователю подтверждение
			alert('Отчет об ошибке отправлен. Спасибо за обратную связь!')
		}
	}

	render() {
		if (this.state.hasError) {
			// Если предоставлен кастомный fallback, используем его
			if (this.props.fallback) {
				return this.props.fallback
			}
			
			// Стандартный fallback UI
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-50">
					<div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
						<div className="text-center">
							<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
								<svg
									className="h-6 w-6 text-red-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
									/>
								</svg>
							</div>
							
							<h3 className="text-lg font-medium text-gray-900 mb-2">
								Что-то пошло не так
							</h3>
							
							<p className="text-sm text-gray-500 mb-6">
								Произошла неожиданная ошибка. Мы уже работаем над её исправлением.
							</p>
							
							{process.env.NODE_ENV === 'development' && this.state.error && (
								<details className="mb-4 text-left">
									<summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
										Детали ошибки (только для разработчиков)
									</summary>
									<div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-700 overflow-auto">
										<div className="mb-2">
											<strong>Ошибка:</strong> {this.state.error.message}
										</div>
										{this.state.error.stack && (
											<div className="mb-2">
												<strong>Стек:</strong>
												<pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
											</div>
										)}
										{this.state.errorInfo && (
											<div>
												<strong>Компонент:</strong>
												<pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
											</div>
										)}
									</div>
								</details>
							)}
							
							<div className="flex flex-col sm:flex-row gap-3">
								<button
									onClick={this.handleRetry}
									className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
								>
									Попробовать снова
								</button>
								
								<button
									onClick={this.handleReportError}
									className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
								>
									Сообщить об ошибке
								</button>
							</div>
							
							<div className="mt-4">
								<button
									onClick={() => window.location.href = '/'}
									className="text-sm text-blue-600 hover:text-blue-800 underline"
								>
									Вернуться на главную
								</button>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return this.props.children
	}
}

// Хук для использования ErrorBoundary в функциональных компонентах
export const useErrorHandler = () => {
	const [error, setError] = React.useState<Error | null>(null)
	
	const handleError = React.useCallback((error: Error) => {
		console.error('Error caught by useErrorHandler:', error)
		setError(error)
	}, [])
	
	const clearError = React.useCallback(() => {
		setError(null)
	}, [])
	
	return { error, handleError, clearError }
}

// Компонент для отображения ошибок в функциональных компонентах
export const ErrorFallback: React.FC<{
	error?: Error
	resetErrorBoundary?: () => void
}> = ({ error, resetErrorBoundary }) => {
	return (
		<div className="p-4 bg-red-50 border border-red-200 rounded-md">
			<div className="flex">
				<div className="flex-shrink-0">
					<svg
						className="h-5 w-5 text-red-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-red-800">
						Произошла ошибка
					</h3>
					{error && (
						<div className="mt-2 text-sm text-red-700">
							{error.message}
						</div>
					)}
					{resetErrorBoundary && (
						<div className="mt-4">
							<button
								onClick={resetErrorBoundary}
								className="text-sm text-red-800 hover:text-red-900 underline"
							>
								Попробовать снова
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

// HOC для оборачивания компонентов в ErrorBoundary
export const withErrorBoundary = <P extends object>(
	Component: React.ComponentType<P>,
	fallback?: ReactNode
) => {
	const WrappedComponent = (props: P) => (
		<ErrorBoundary fallback={fallback}>
			<Component {...props} />
		</ErrorBoundary>
	)
	
	WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
	
	return WrappedComponent
} 