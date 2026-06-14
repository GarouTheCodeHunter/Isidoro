import React, { useState, useEffect } from 'react';
import PageHeader from "../components/ui/PageHeader";
import FormLayout from "../components/ui/FormLayout";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDayEvents, setSelectedDayEvents] = useState(null);
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  useEffect(() => {
    // Aqui você buscaria as formações e eventos do back-end
    // const fetchEvents = async () => { /* setEvents(response.data) */ };
    // fetchEvents();
  }, [currentDate]);

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    setSelectedDayEvents(null);
  };

  const handleDayClick = (day) => {
    const dayEvents = events.filter(e => {
      const d = new Date(e.date);
      return d.getDate() === day && d.getMonth() === currentDate.getMonth() && d.getFullYear() === currentDate.getFullYear();
    });
    
    setSelectedDayEvents({ day, events: dayEvents });
  };

  return (
    <FormLayout>
      <PageHeader 
        title="Calendário" 
        description="Acompanhe eventos, reuniões e datas importantes da sua paróquia." 
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-slate-100 bg-slate-50/30">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              {monthNames[currentDate.getMonth()]} <span className="text-slate-400 font-medium">{currentDate.getFullYear()}</span>
            </h2>
            <div className="flex gap-2">
              <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-white rounded-lg border border-slate-200 bg-white shadow-sm active:scale-95 transition-all">
                <ChevronLeftIcon className="w-5 h-5 text-slate-600" />
              </button>
              <button onClick={() => changeMonth(1)} className="p-2 hover:bg-white rounded-lg border border-slate-200 bg-white shadow-sm active:scale-95 transition-all">
                <ChevronRightIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 bg-slate-50/50 border-b border-slate-100">
            {weekDays.map(day => (
              <div key={day} className="p-3 text-center font-bold text-slate-400 text-[10px] md:text-xs uppercase tracking-widest">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 min-h-[400px] md:min-h-[500px]">
            {blanks.map(blank => (
              <div key={`blank-${blank}`} className="border-r border-b border-slate-50 bg-slate-50/10"></div>
            ))}
            
            {days.map(day => {
              const isToday = new Date().getDate() === day && 
                              new Date().getMonth() === currentDate.getMonth() && 
                              new Date().getFullYear() === currentDate.getFullYear();
              
              const dayHasEvents = events.some(e => {
                const d = new Date(e.date);
                return d.getDate() === day && d.getMonth() === currentDate.getMonth() && d.getFullYear() === currentDate.getFullYear();
              });

              return (
                <div 
                  key={day} 
                  onClick={() => handleDayClick(day)}
                  className={`border-r border-b border-slate-100 p-2 md:p-3 hover:bg-blue-50/20 transition-all relative group cursor-pointer ${selectedDayEvents?.day === day ? 'bg-blue-50/40' : ''}`}
                >
                  <span className={`text-sm md:text-base font-bold transition-all ${
                    isToday ? 'bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg shadow-md shadow-blue-100' : 'text-slate-600'
                  }`}>
                    {day}
                  </span>
                  
                  {dayHasEvents && (
                    <div className="mt-1 flex justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Day Details */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">
              {selectedDayEvents ? `Compromissos - Dia ${selectedDayEvents.day}` : 'Selecione um dia'}
            </h3>
            {selectedDayEvents && (
              <button onClick={() => setSelectedDayEvents(null)} className="text-slate-400 hover:text-slate-600">
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>

          {selectedDayEvents ? (
            <div className="space-y-4">
              {selectedDayEvents.events.length > 0 ? (
                selectedDayEvents.events.map((e, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                    <p className="font-bold text-slate-800 text-sm">{e.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{e.church_name}</p>
                    <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">{e.type}</p>
                  </div>
                ))
              ) : (
                <div className="py-10 text-center">
                  <p className="text-slate-400 text-sm font-medium">Nenhum evento agendado para este dia.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-slate-400 text-sm font-medium">Clique em um dia no calendário para ver os detalhes.</p>
            </div>
          )}
        </div>
      </div>
    </FormLayout>
  );
}

export default Calendar;
