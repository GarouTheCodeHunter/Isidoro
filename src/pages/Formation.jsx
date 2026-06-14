import React, { useState, useEffect } from 'react';
import PageHeader from "../components/ui/PageHeader";
import FormLayout from "../components/ui/FormLayout";
import Button from "../components/ui/Button";
import { PlusIcon, BookOpenIcon, ClockIcon } from "@heroicons/react/24/outline";

const Formation = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        setLoading(true);
        // Implementar chamada real de API aqui:
        // const response = await api.get('/formations');
        // setFormations(response.data);
      } catch (error) {
        console.error("Erro ao buscar formações", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFormations();
  }, []);

  return (
    <FormLayout>
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-end gap-4">
        <PageHeader 
          title="Formações" 
          description="Gerencie as formações para catequistas da sua paróquia." 
        />
        <Button to="/formations/create" className="w-full sm:w-auto shadow-sm">
          <PlusIcon className="w-5 h-5" />
          Nova Formação
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mt-2">
        {loading ? (
          [1, 2, 3].map(i => <div key={i} className="h-60 bg-white animate-pulse rounded-xl border border-slate-100"></div>)
        ) : formations.length > 0 ? (
          formations.map((formacao) => (
            <div key={formacao.id} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg shrink-0">
                    <BookOpenIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                    formacao.status === 'Concluído' ? 'bg-green-100 text-green-700' : 
                    formacao.status === 'Em andamento' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {formacao.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-800 tracking-tight leading-tight">{formacao.titulo}</h3>
                <p className="text-slate-500 font-medium text-sm">Instrutor: {formacao.instrutor}</p>
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-400">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{formacao.duracao}</span>
                </div>
                <button className="text-blue-600 font-bold text-sm hover:underline">Ver Detalhes</button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 text-center bg-white rounded-xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">Nenhuma formação disponível no momento.</p>
          </div>
        )}
      </div>
    </FormLayout>
  );
}

export default Formation;
