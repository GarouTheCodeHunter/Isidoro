import React, { useState, useEffect } from 'react';
import PageHeader from "../components/ui/PageHeader";
import FormLayout from "../components/ui/FormLayout";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Lógica para gerar os dias do mês atual
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  useEffect(() => {
    const fetchEvents = async () => {
      // try { setLoading(true); /* API Call */ } finally { setLoading(false); }
    };
    fetchEvents();
  }, [currentDate]);

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  return (
    <FormLayout>
      <PageHeader 
        title="Calendário" 
        description="Visualize e agende eventos, aulas e reuniões." 
      />

      <div className="w-full bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden mt-4">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-zinc-100 bg-zinc-50/50">
          <h2 className="text-lg md:text-xl font-bold text-blue-600">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => changeMonth(-1)}
              className="p-2 hover:bg-white rounded-lg transition-colors border border-zinc-200 bg-white shadow-sm"
            >
              <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-zinc-600" />
            </button>
            <button 
              onClick={() => changeMonth(1)}
              className="p-2 hover:bg-white rounded-lg transition-colors border border-zinc-200 bg-white shadow-sm"
            >
              <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 text-zinc-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 bg-zinc-50 border-b border-zinc-200">
          {weekDays.map(day => (
            <div key={day} className="p-2 md:p-4 text-center font-bold text-zinc-500 text-[10px] md:text-xs uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 min-h-[300px] md:min-h-[500px]">
          {blanks.map(blank => (
            <div key={`blank-${blank}`} className="border-r border-b border-zinc-50 bg-zinc-50/30"></div>
          ))}
          
          {days.map(day => {
            const isToday = new Date().getDate() === day && 
                            new Date().getMonth() === currentDate.getMonth() && 
                            new Date().getFullYear() === currentDate.getFullYear();
            
            return (
              <div key={day} className="border-r border-b border-zinc-100 p-1 md:p-2 hover:bg-blue-50/30 transition-colors relative group min-h-[60px] md:min-h-[100px]">
                <span className={`text-xs md:text-sm font-medium ${
                  isToday ? 'bg-blue-600 text-white w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full' : 'text-zinc-600'
                }`}>
                  {day}
                </span>
                
                {/* Placeholder para eventos reais da API */}
                <div className="mt-1 space-y-1 overflow-hidden">
                  {/* {events.filter(e => e.day === day).map(...)} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FormLayout>
  );
}

export default Calendar;