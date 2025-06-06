// src\public\script\react_web_v1\frontend\src\components\Header\index.jsx
import React, { useState, useEffect } from "react";
import Calendar from '../../components/Tool/Calendar';
import DownModa from '../../components/Modal/SlideUpDownModal';
import "bootstrap-icons/font/bootstrap-icons.css";
import logoProderj from "../../assets/images/ndp/DP_padrao.png";

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = () => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const dateStr = currentDateTime.toLocaleDateString('pt-BR', options);
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
    const timeStr = `${hours}:${minutes}:${seconds}`;
    return `PRODERJ, ${dateStr} | ${timeStr}`;
  };

  return (
    <header className="sticky-top" style={{
      background: 'linear-gradient(to right, #330033, #14007A)',
      padding: '10px',
      zIndex: 1000
    }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3 col-12 text-center text-md-start mb-2 mb-md-0">
            <img src={logoProderj} alt="logoProderj" className="img-fluid" style={{ maxHeight: "40px" }} />
          </div>
          <div className="col-md-3 col-12 text-center mb-2 mb-md-0 text-white">
            Sistema de Gestão do Deposito Público
          </div>
          <div className="col-md-4 col-12 text-center mb-2 mb-md-0 text-white">
            <div className="d-flex justify-content-center mb-2">
              <div className="m-2">
                {formatDateTime()}
              </div>
              <DownModa
                idModal="modalBasic1"
                buttonName="bi bi-calendar-week"
                strTitleModal="Calendário"
                isOpenInitial={false}
                direction='down'
              >
                <Calendar
                  idModal="modalBasic1"
                  buttonName="Básico"
                  strTitleModal="Modal Basic"
                />
              </DownModa>
            </div>
          </div>
          <div className="col-md-2 col-12 text-center text-md-end">
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i className="bi bi-person-circle me-1"></i>
                <span>Usuário</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Perfil</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Sair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;