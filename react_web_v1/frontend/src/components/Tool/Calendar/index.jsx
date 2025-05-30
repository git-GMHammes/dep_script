import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Arquivo CSS com estilos personalizados

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);

    // Dias da semana abreviados com uma letra
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    // Nomes dos meses em português
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    useEffect(() => {
        generateCalendar();
    }, [currentDate]);

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Primeiro dia do mês
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayWeekday = firstDayOfMonth.getDay();

        // Último dia do mês
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysCount = lastDayOfMonth.getDate();

        // Array para guardar todos os dias a serem exibidos
        const days = [];

        // Adicionar dias vazios para completar a primeira semana
        for (let i = 0; i < firstDayWeekday; i++) {
            days.push(null);
        }

        // Adicionar todos os dias do mês
        for (let i = 1; i <= daysCount; i++) {
            days.push(i);
        }

        setDaysInMonth(days);
    };

    // Navegação entre meses
    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Formatar o dia com dois dígitos
    const formatDay = (day) => {
        return day ? day.toString().padStart(2, '0') : '';
    };

    // Verificar se um dia é o dia atual
    const isCurrentDay = (day) => {
        const today = new Date();
        return day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();
    };

    // Verificar se um dia é fim de semana (sábado ou domingo)
    const isWeekend = (day, index) => {
        if (!day) return false;
        // Calculamos o dia da semana considerando o índice na linha da semana
        const dayOfWeek = index % 7;
        // 0 = domingo e 6 = sábado
        return dayOfWeek === 0 || dayOfWeek === 6;
    };

    // Agrupar dias em semanas
    const weeks = [];
    let week = [];

    daysInMonth.forEach((day, index) => {
        week.push(day);
        if ((index + 1) % 7 === 0 || index === daysInMonth.length - 1) {
            weeks.push(week);
            week = [];
        }
    });

    return (
        <div className="calendar-soft">
            <div className="calendar-header">
                <button className="nav-btn" onClick={prevMonth}>
                    &laquo;
                </button>
                <div className="month-title">
                    <div>{monthNames[currentDate.getMonth()]}</div>
                    <div className="year">{currentDate.getFullYear()}</div>
                </div>
                <button className="nav-btn" onClick={nextMonth}>
                    &raquo;
                </button>
            </div>

            <table className="calendar-table">
                <thead>
                    <tr>
                        {weekdays.map((day, index) => (
                            <th key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, dayIndex) => {
                                const isWeekendDay = isWeekend(day, dayIndex + (weekIndex * 7));
                                return (
                                    <td key={dayIndex} className={isWeekendDay ? 'weekend' : ''}>
                                        {day && (
                                            <div className={`day-cell ${isCurrentDay(day) ? 'current-day' : ''}`}>
                                                {formatDay(day)}
                                            </div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="calendar-footer">
                Hoje: {new Date().getDate().toString().padStart(2, '0')}/
                {(new Date().getMonth() + 1).toString().padStart(2, '0')}/
                {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default Calendar;