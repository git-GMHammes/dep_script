// src\public\script\react_web_v1\frontend\src\pages\Home\index.jsx
import React from "react";

// Dados de exemplo
const leiloes = [
  { data: "2025-06-01", hora: "10:00" },
  { data: "2025-06-15", hora: "14:00" },
  { data: "2025-06-20", hora: "09:30" },
  { data: "2025-07-05", hora: "16:00" },
  { data: "2025-07-18", hora: "11:15" },
];

const agendamentosTJ = [
  { data: "2025-06-02", hora: "09:00" },
  { data: "2025-06-18", hora: "16:00" },
  { data: "2025-06-25", hora: "14:30" },
  { data: "2025-07-03", hora: "10:45" },
  { data: "2025-07-12", hora: "15:20" },
];

const lotes = [
  { numero: 123, titulo: "Lote de Computadores", data: "2025-05-29", hora: "15:30" },
  { numero: 124, titulo: "Lote de Móveis", data: "2025-05-28", hora: "11:10" },
  { numero: 125, titulo: "Equipamentos de Escritório", data: "2025-05-27", hora: "13:45" },
  { numero: 126, titulo: "Veículos Oficiais", data: "2025-05-26", hora: "08:20" },
  { numero: 127, titulo: "Material de Construção", data: "2025-05-25", hora: "16:50" },
];

const alertas = [
  { tipo: "danger", icone: "bi-journal-text", mensagem: "Atualização interna: manutenção agendada." },
  { tipo: "info", icone: "bi-bell", mensagem: "Lembrete: Enviar relatório mensal." },
  { tipo: "warning", icone: "bi-exclamation-triangle", mensagem: "Sistema de backup será executado às 02:00h." },
  { tipo: "success", icone: "bi-check-circle", mensagem: "Migração de dados concluída com sucesso." },
  { tipo: "info", icone: "bi-info-circle", mensagem: "Nova versão do sistema disponível para atualização." },
];

const funcionarios = [
  { nome: "João Silva", acesso: "2025-05-30 12:12" },
  { nome: "Maria Oliveira", acesso: "2025-05-30 09:04" },
  { nome: "Carlos Santos", acesso: "2025-05-30 08:35" },
  { nome: "Ana Costa", acesso: "2025-05-30 07:22" },
  { nome: "Pedro Ferreira", acesso: "2025-05-29 18:45" },
];

const documentos = [
  { numero: 456, tipo: "Contrato", data: "2025-05-29" },
  { numero: 457, tipo: "Procuração", data: "2025-05-28" },
  { numero: 458, tipo: "Certidão", data: "2025-05-27" },
  { numero: 459, tipo: "Ofício", data: "2025-05-26" },
  { numero: 460, tipo: "Relatório", data: "2025-05-25" },
];

const Home = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {/* Card 1 - Leilões */}
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-3 text-primary">
                <i className="bi bi-hammer me-2"></i>
                Leilões 2
              </h5>
              <div className="flex-grow-1">
                {leiloes.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {leiloes.map((item, idx) => (
                      <li key={`leilao-${idx}`} className="list-group-item border-0 px-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="bi bi-calendar3 me-2 text-muted"></i>
                            {item.data}
                          </span>
                          <span className="badge bg-primary">{item.hora}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-center">Nenhum leilão agendado</p>
                )}
              </div>
            </div>
            <div className="card-footer bg-transparent text-center">
              <small className="text-muted">Próximos leilões</small>
            </div>
          </div>
        </div>

        {/* Card 2 - Agendamentos TJ */}
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-3 text-success">
                <i className="bi bi-building me-2"></i>
                Agendamentos TJ
              </h5>
              <div className="flex-grow-1">
                {agendamentosTJ.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {agendamentosTJ.map((item, idx) => (
                      <li key={`agenda-${idx}`} className="list-group-item border-0 px-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="bi bi-calendar3 me-2 text-muted"></i>
                            {item.data}
                          </span>
                          <span className="badge bg-success">{item.hora}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-center">Nenhum agendamento</p>
                )}
              </div>
            </div>
            <div className="card-footer bg-transparent text-center">
              <small className="text-muted">Agendas do Tribunal</small>
            </div>
          </div>
        </div>

        {/* Card 3 - Últimos Lotes */}
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-3 text-warning">
                <i className="bi bi-boxes me-2"></i>
                Últimos Lotes
              </h5>
              <div className="flex-grow-1">
                {lotes.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-sm table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Nº</th>
                          <th>Título</th>
                          <th>Data</th>
                          <th>Hora</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lotes.map((lote, idx) => (
                          <tr key={`lote-${lote.numero}-${idx}`}>
                            <td className="fw-bold text-primary">{lote.numero}</td>
                            <td className="text-truncate" style={{ maxWidth: '120px' }} title={lote.titulo}>
                              {lote.titulo}
                            </td>
                            <td>
                              <small>{lote.data}</small>
                            </td>
                            <td>
                              <small>{lote.hora}</small>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted text-center">Nenhum lote encontrado</p>
                )}
              </div>
            </div>
            <div className="card-footer bg-transparent text-center">
              <small className="text-muted">Novos lotes cadastrados</small>
            </div>
          </div>
        </div>

        {/* Card 4 - Alertas do Sistema */}
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-3 text-danger">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Alertas do Sistema
              </h5>
              <div className="flex-grow-1">
                {alertas.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {alertas.map((alerta, idx) => (
                      <li key={`alerta-${idx}`} className="list-group-item border-0 px-0">
                        <div className={`alert alert-${alerta.tipo} mb-2 py-2`} role="alert">
                          <i className={`bi ${alerta.icone} me-2`}></i>
                          <small>{alerta.mensagem}</small>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-center">Nenhum alerta no momento</p>
                )}
              </div>
            </div>
            <div className="card-footer bg-transparent text-center">
              <small className="text-muted">Alertas e lembretes</small>
            </div>
          </div>
        </div>

        {/* Card 5 - Últimos Funcionários */}
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-3 text-info">
                <i className="bi bi-people me-2"></i>
                Últimos Funcionários
              </h5>
              <div className="flex-grow-1">
                {funcionarios.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {funcionarios.map((funcionario, idx) => (
                      <li key={`funcionario-${idx}`} className="list-group-item border-0 px-0">
                        <div className="d-flex align-items-center">
                          <div className="avatar bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                               style={{ width: '40px', height: '40px', fontSize: '16px' }}>
                            {funcionario.nome.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </div>
                          <div className="flex-grow-1">
                            <div className="fw-bold">{funcionario.nome}</div>
                            <small className="text-muted">
                              <i className="bi bi-clock me-1"></i>
                              {funcionario.acesso}
                            </small>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-center">Nenhum acesso recente</p>
                )}
              </div>
            </div>
            <div className="card-footer bg-transparent text-center">
              <small className="text-muted">Acessos recentes</small>
            </div>
          </div>
        </div>

        {/* Card 6 - Últimos Documentos */}
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-3 text-secondary">
                <i className="bi bi-file-earmark-text me-2"></i>
                Últimos Documentos
              </h5>
              <div className="flex-grow-1">
                {documentos.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-sm table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Nº</th>
                          <th>Tipo</th>
                          <th>Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {documentos.map((doc, idx) => (
                          <tr key={`doc-${doc.numero}-${idx}`}>
                            <td className="fw-bold text-secondary">{doc.numero}</td>
                            <td>
                              <span className="badge bg-light text-dark">{doc.tipo}</span>
                            </td>
                            <td>
                              <small>{doc.data}</small>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted text-center">Nenhum documento encontrado</p>
                )}
              </div>
            </div>
            <div className="card-footer bg-transparent text-center">
              <small className="text-muted">Documentos gerados</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;