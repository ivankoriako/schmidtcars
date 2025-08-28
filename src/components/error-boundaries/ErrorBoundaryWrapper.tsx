'use client'

import { ErrorBoundary } from './ErrorBoundary'
import type { ErrorInfo } from 'react'

interface ErrorBoundaryWrapperProps {
	children: React.ReactNode
}

export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
	const handleError = (error: Error, errorInfo: ErrorInfo) => {
		// Логируем ошибку для аналитики
		console.error('Application error:', error, errorInfo)
	}

	return (
		<ErrorBoundary onError={handleError}>
			{children}
		</ErrorBoundary>
	)
} 