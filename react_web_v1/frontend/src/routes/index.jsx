// src\public\script\react_web_v1\frontend\src\routes\index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

// Testes
import TesteSession from '../pages/Teste/SessionCookie';

// Serecatrias
import SecretariaListar from '../pages/Secretaria/AppListar';
import SecretariaCadastrar from '../pages/Secretaria/AppCadastrar';
import SecretariaAtualizar from '../pages/Secretaria/AppAtualizar';
import SecretariaConsultar from '../pages/Secretaria/AppConsultar';

// Contratos
import ContratoListar from '../pages/Contrato/AppListar';
import ContratoCadastrar from '../pages/Contrato/AppCadastrar';
import ContratoAtualizar from '../pages/Contrato/AppAtualizar';
import ContratoConsultar from '../pages/Contrato/AppConsultar';

import CirculacaoAgendarRecebimento from '../pages/Agendarrecebimento/AppConsultar';

import { authMiddleware } from '../middlewares/authMiddleware.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Rotas principais */}
      <Route path="/teste-session" element={<TesteSession />} />

      {/* Rota Recebimento */}
      <Route path="/agendarrecebimento" element={<CirculacaoAgendarRecebimento />} />

      {/* Rotas protegidas */}

      {/* Rotas de Secretaria */}
      <Route path="/secretarias" element={<SecretariaListar />} />
      <Route path="/secretarias/cadastrar" element={<SecretariaCadastrar />} />
      <Route path="/secretarias/atualizar/:id" element={<SecretariaAtualizar />} />
      <Route path="/secretarias/consultar/:id" element={<SecretariaConsultar />} />

      {/* Rotas de Contrato */}
      <Route path="/contratos" element={<ContratoListar />} />
      <Route path="/contratos/cadastrar" element={<ContratoCadastrar />} />
      <Route path="/contratos/atualizar/:id" element={<ContratoAtualizar />} />
      <Route path="/contratos/consultar/:id" element={<ContratoConsultar />} />

      {/* Rota de fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
