'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorFallback } from './ErrorBoundary'

interface Props {
	children: ReactNode
	fallback?: ReactNode
	onError?: (error: Error, errorInfo: ErrorInfo) => void
	componentName?: string
}

interface State {
	hasError: boolean
	error?: Error
	errorInfo?: ErrorInfo
}

export class DataErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('DataErrorBoundary caught an error:', error, errorInfo)
		
		this.setState({
			error,
			errorInfo
		})
		
		if (this.props.onError) {
			this.props.onError(error, errorInfo)
		}
		
		// Логируем ошибку данных
		this.logDataError(error, errorInfo)
	}

	private logDataError = (error: Error, errorInfo: ErrorInfo) => {
		try {
			const errorData = {
				type: 'data_error',
				component: this.props.componentName || 'Unknown',
				message: error.message,
				stack: error.stack,
				componentStack: errorInfo.componentStack,
				timestamp: new Date().toISOString(),
				url: window.location.href,
				userAgent: navigator.userAgent
			}
			
			console.log('Data error logged:', errorData)
			
			// Здесь можно отправить ошибку в сервис аналитики
			// Например, в Sentry с тегом 'data_error'
		} catch (loggingError) {
			console.error('Failed to log data error:', loggingError)
		}
	}

	private handleRetry = () => {
		this.setState({ hasError: false, error: undefined, errorInfo: undefined })
	}

	private handleRefresh = () => {
		window.location.reload()
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback
			}
			
			return (
				<div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
					<div className="flex">
						<div className="flex-shrink-0">
							<svg
								className="h-5 w-5 text-yellow-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="ml-3 flex-1">
							<h3 className="text-sm font-medium text-yellow-800">
								Проблема с загрузкой данных
							</h3>
							<div className="mt-2 text-sm text-yellow-700">
								<p>
									Не удалось загрузить данные. Это может быть временная проблема.
								</p>
								{process.env.NODE_ENV === 'development' && this.state.error && (
									<details className="mt-2">
										<summary className="cursor-pointer text-xs text-yellow-600">
											Детали ошибки
										</summary>
										<div className="mt-1 p-2 bg-yellow-100 rounded text-xs font-mono">
											{this.state.error.message}
										</div>
									</details>
								)}
							</div>
							<div className="mt-4 flex space-x-3">
								<button
									onClick={this.handleRetry}
									className="text-sm bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
								>
									Попробовать снова
								</button>
								<button
									onClick={this.handleRefresh}
									className="text-sm text-yellow-800 hover:text-yellow-900 underline"
								>
									Обновить страницу
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

// Хук для обработки ошибок данных в функциональных компонентах
export const useDataErrorHandler = () => {
	const [dataError, setDataError] = React.useState<Error | null>(null)
	
	const handleDataError = React.useCallback((error: Error) => {
		console.error('Data error caught by useDataErrorHandler:', error)
		setDataError(error)
	}, [])
	
	const clearDataError = React.useCallback(() => {
		setDataError(null)
	}, [])
	
	return { dataError, handleDataError, clearDataError }
}

// Компонент для отображения ошибок данных
export const DataErrorFallback: React.FC<{
	error?: Error
	resetErrorBoundary?: () => void
	componentName?: string
}> = ({ error, resetErrorBoundary, componentName }) => {
	return (
		<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
			<div className="flex">
				<div className="flex-shrink-0">
					<svg
						className="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-yellow-800">
						Ошибка загрузки данных
						{componentName && ` в ${componentName}`}
					</h3>
					{error && (
						<div className="mt-2 text-sm text-yellow-700">
							{error.message}
						</div>
					)}
					{resetErrorBoundary && (
						<div className="mt-4">
							<button
								onClick={resetErrorBoundary}
								className="text-sm text-yellow-800 hover:text-yellow-900 underline"
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

// HOC для оборачивания компонентов в DataErrorBoundary
export const withDataErrorBoundary = <P extends object>(
	Component: React.ComponentType<P>,
	componentName?: string,
	fallback?: ReactNode
) => {
	const WrappedComponent = (props: P) => (
		<DataErrorBoundary componentName={componentName} fallback={fallback}>
			<Component {...props} />
		</DataErrorBoundary>
	)
	
	WrappedComponent.displayName = `withDataErrorBoundary(${Component.displayName || Component.name})`
	
	return WrappedComponent
} 