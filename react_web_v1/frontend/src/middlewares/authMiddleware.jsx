import { Navigate } from 'react-router-dom';

// Simulação de um token armazenado no localStorage
const getToken = () => {
  return localStorage.getItem('authToken');
};

// Verificação básica se o usuário está autenticado
export const isAuthenticated = () => {
  const token = getToken();
  // Por enquanto, apenas verifica se existe um token, sem validação
  return !!token;
};

// Middleware de autenticação para rotas protegidas
export const authMiddleware = (Component) => {
  return (props) => {
    // Por enquanto, sempre retorna o componente sem verificação real
    // Quando você quiser implementar a segurança, descomente o código abaixo
    /*
    if (!isAuthenticated()) {
      return <Navigate to="/login" replace />;
    }
    */
    
    return <Component {...props} />;
  };
};

// Função para fazer login (simulação)
export const login = (username, password) => {
  // Simulação de autenticação bem-sucedida
  const fakeToken = `token_${Date.now()}_${username}`;
  localStorage.setItem('authToken', fakeToken);
  localStorage.setItem('user', JSON.stringify({ username }));
  return true;
};

// Função para fazer logout
export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

// Função para obter o usuário atual
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};