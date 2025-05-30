import React, { Component } from 'react';

// Componente de erro fallback para exibir quando ocorrem erros
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container">
      <h2>Algo deu errado!</h2>
      <p>Erro: {error.message || 'Erro desconhecido'}</p>
      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </div>
  );
};

// Error Boundary para capturar erros em componentes React
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para que o próximo render mostre a UI de fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Você pode registrar o erro em um serviço de relatório de erros
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Aqui você poderia enviar o erro para um serviço como Sentry, LogRocket, etc.
    // logErrorToService(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error} 
          resetErrorBoundary={this.resetError} 
        />
      );
    }

    return this.props.children;
  }
}

// Middleware para tratar erros em funções assíncronas
export const asyncErrorHandler = async (asyncFunction, ...args) => {
  try {
    return await asyncFunction(...args);
  } catch (error) {
    console.error('Async error caught:', error);
    // Aqui você pode definir como tratar o erro (redirecionar, exibir mensagem, etc.)
    throw error; // Propagar o erro para ser tratado em outro lugar, se necessário
  }
};

// Hook para tratar erros em componentes funcionais
export const useErrorHandler = (initialState = null) => {
  const [error, setError] = React.useState(initialState);
  
  const handleError = (err) => {
    console.error('Error handled by useErrorHandler:', err);
    setError(err);
  };
  
  const clearError = () => {
    setError(null);
  };
  
  return [error, handleError, clearError];
};