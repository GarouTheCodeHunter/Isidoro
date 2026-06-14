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
        // Simulação de chamada de API
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
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4">
        <PageHeader 
          title="Formações" 
          description="Acompanhe e gerencie as formações para catequistas." 
        />
        <Button to="/formations/create" className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <PlusIcon className="w-5 h-5" />
          Nova Formação
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mt-4">
        {loading ? (
          [1, 2, 3].map(i => <div key={i} className="h-64 bg-white animate-pulse rounded-lg border border-zinc-200"></div>)
        ) : formations.length > 0 ? (
          formations.map((formacao) => (
            <div key={formacao.id} className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-zinc-200 flex flex-col justify-between hover:border-blue-300 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <BookOpenIcon className="w-10 h-10 text-blue-600 bg-blue-50 p-2 rounded-lg" />
                  <span className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded uppercase ${
                    formacao.status === 'Concluído' ? 'bg-green-100 text-green-700' : 
                    formacao.status === 'Em andamento' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {formacao.status}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 text-zinc-800">{formacao.titulo}</h3>
                <p className="text-zinc-600 text-sm mb-4">Instrutor: {formacao.instrutor}</p>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-zinc-500">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-xs md:text-sm">{formacao.duracao}</span>
                </div>
                <button className="text-blue-600 font-bold text-sm hover:underline">Ver Detalhes</button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-lg border border-dashed border-zinc-300">
            <p className="text-zinc-400">Nenhuma formação disponível no momento.</p>
          </div>
        )}
      </div>
    </FormLayout>
  );
}

export default Formation;