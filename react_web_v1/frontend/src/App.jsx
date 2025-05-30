// src\public\script\react_web_v1\frontend\src\App.jsx
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/global.css';
import Header from './components/Header';
import Menu from './components/Nav';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 overflow-hidden">
        <Header />
        <Menu />
        <main className="flex-fill overflow-hidden">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;