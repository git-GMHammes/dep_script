import React from "react";
import { NavLink } from "react-router-dom";

// Função para retornar o ícone do menu principal
function getMenuIcon(label) {
    switch (label) {
        case "Catálogo": return <i className="bi bi-journals me-2"></i>;
        case "Circulação": return <i className="bi bi-arrow-left-right me-2"></i>;
        case "Tramitação": return <i className="bi bi-repeat me-2"></i>;
        case "Acionamento": return <i className="bi bi-lightning-charge me-2"></i>;
        case "Relatório": return <i className="bi bi-bar-chart-line me-2"></i>;
        case "Tabela": return <i className="bi bi-table me-2"></i>;
        case "Auditoria": return <i className="bi bi-shield-check me-2"></i>;
        default: return null;
    }
}

// Função para retornar o ícone do item do menu
function getItemIcon(item) {
    switch (item) {
        case "Novo Depósito Público": return <i className="bi bi-inbox me-2"></i>;
        case "Buscar lote": return <i className="bi bi-search me-2"></i>;
        case "Importar dados do processo": return <i className="bi bi-cloud-arrow-up me-2"></i>;
        case "Novo lote": return <i className="bi bi-plus-square me-2"></i>;
        case "Upload documento": return <i className="bi bi-upload me-2"></i>;
        case "Agendar recebimento": return <i className="bi bi-calendar-plus me-2"></i>;
        case "Buscar agendamento": return <i className="bi bi-search me-2"></i>;
        case "Buscar movimento": return <i className="bi bi-search me-2"></i>;
        case "Cancelar agendamento": return <i className="bi bi-x-circle me-2"></i>;
        case "Desfazer lote": return <i className="bi bi-arrow-counterclockwise me-2"></i>;
        case "Destruir lote": return <i className="bi bi-trash me-2"></i>;
        case "Expedir lote": return <i className="bi bi-truck me-2"></i>;
        case "Realocar lote": return <i className="bi bi-arrow-repeat me-2"></i>;
        case "Receber lote": return <i className="bi bi-box-arrow-in-down me-2"></i>;
        case "Separar lote": return <i className="bi bi-diagram-3 me-2"></i>;
        case "Baixar movimento": return <i className="bi bi-download me-2"></i>;
        case "Buscar movimentação": return <i className="bi bi-search me-2"></i>;
        case "Encaminhar processo": return <i className="bi bi-arrow-right-circle me-2"></i>;
        case "Gerar movimento": return <i className="bi bi-gear me-2"></i>;
        case "Movimentar lote": return <i className="bi bi-arrow-left-right me-2"></i>;
        case "Registrar recebimento": return <i className="bi bi-check2-circle me-2"></i>;
        case "Acionar tarefa": return <i className="bi bi-play-circle me-2"></i>;
        case "Alterar tarefa": return <i className="bi bi-pencil-square me-2"></i>;
        case "Buscar acionamento": return <i className="bi bi-search me-2"></i>;
        case "Cancelar acionamento": return <i className="bi bi-x-circle me-2"></i>;
        case "Executar tarefa": return <i className="bi bi-check-circle me-2"></i>;
        case "Solicitar tarefa": return <i className="bi bi-clipboard-plus me-2"></i>;
        case "Suspender tarefa": return <i className="bi bi-pause-circle me-2"></i>;
        case "Buscar relatório": return <i className="bi bi-search me-2"></i>;
        case "Gerar relatório": return <i className="bi bi-file-earmark-bar-graph me-2"></i>;
        case "Visualizar relatório": return <i className="bi bi-eye me-2"></i>;
        case "Buscar tabela": return <i className="bi bi-search me-2"></i>;
        case "Gerar tabela": return <i className="bi bi-table me-2"></i>;
        case "Visualizar tabela": return <i className="bi bi-eye me-2"></i>;
        case "Buscar auditoria": return <i className="bi bi-search me-2"></i>;
        case "Gerar auditoria": return <i className="bi bi-shield-plus me-2"></i>;
        case "Visualizar auditoria": return <i className="bi bi-eye me-2"></i>;
        default: return null;
    }
}

const menus = [
    {
        label: "Catálogo",
        items: [
            { name: "Novo Depósito Público", path: "#" },
            { name: "Buscar lote", path: "#" },
            { name: "Importar dados do processo", path: "#" },
            { name: "Novo lote", path: "#" },
            { name: "Upload documento", path: "#" },
        ],
    },
    {
        label: "Circulação",
        items: [
            { name: "Agendar recebimento", path: "/agendarrecebimento" },
            { name: "Buscar agendamento", path: "#" },
            { name: "Buscar movimento", path: "#" },
            { name: "Cancelar agendamento", path: "#" },
            { name: "Desfazer lote", path: "#" },
            { name: "Destruir lote", path: "#" },
            { name: "Expedir lote", path: "#" },
            { name: "Realocar lote", path: "#" },
            { name: "Receber lote", path: "#" },
            { name: "Separar lote", path: "#" },
        ],
    },
    {
        label: "Tramitação",
        items: [
            { name: "Baixar movimento", path: "#" },
            { name: "Buscar movimentação", path: "#" },
            { name: "Encaminhar processo", path: "#" },
            { name: "Gerar movimento", path: "#" },
            { name: "Movimentar lote", path: "#" },
            { name: "Registrar recebimento", path: "#" },
        ],
    },
    {
        label: "Acionamento",
        items: [
            { name: "Acionar tarefa", path: "#" },
            { name: "Alterar tarefa", path: "#" },
            { name: "Buscar acionamento", path: "#" },
            { name: "Cancelar acionamento", path: "#" },
            { name: "Executar tarefa", path: "#" },
            { name: "Solicitar tarefa", path: "#" },
            { name: "Suspender tarefa", path: "#" },
        ],
    },
    {
        label: "Relatório",
        items: [
            { name: "Buscar relatório", path: "#" },
            { name: "Gerar relatório", path: "#" },
            { name: "Visualizar relatório", path: "#" },
        ],
    },
    {
        label: "Tabela",
        items: [
            { name: "Buscar tabela", path: "#" },
            { name: "Gerar tabela", path: "#" },
            { name: "Visualizar tabela", path: "#" },
        ],
    },
    {
        label: "Auditoria",
        items: [
            { name: "Buscar auditoria", path: "#" },
            { name: "Gerar auditoria", path: "#" },
            { name: "Visualizar auditoria", path: "#" },
        ],
    },
];

const Nav = () => (
    <nav className="navbar navbar-expand-lg bg-light text-bg-success" >
        <div className="container-fluid">
            <span className="navbar-brand fw-bold text-secondary">SGDP</span>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {menus.map((menu) => (
                        <li className="nav-item dropdown" key={menu.label}>
                            <span
                                className="nav-link dropdown-toggle"
                                id={`${menu.label}-dropdown`}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: "pointer" }}
                            >
                                {getMenuIcon(menu.label)}
                                {menu.label}
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby={`${menu.label}-dropdown`}
                            >
                                {menu.items.map((item) => (
                                    <li key={item.name}>
                                        <NavLink
                                            className="dropdown-item bg-light text-secondary"
                                            to={item.path}
                                        >
                                            {getItemIcon(item.name)}
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li className="nav-item">
                        <NavLink
                            className="nav-link fw-bold bg-light text-danger"
                            to="#"
                        >
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Sair
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;