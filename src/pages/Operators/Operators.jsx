import React, { useState, useEffect } from 'react';
import PageHeader from "../../components/ui/PageHeader";
import FormLayout from "../../components/ui/FormLayout";
import Button from "../../components/ui/Button";
import { PlusIcon, UserIcon, PencilSquareIcon, TrashIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Operators = () => {
  const [operators, setOperators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        setLoading(true);
        // Implementar chamada real de API aqui:
        // const response = await api.get('/operators');
        // setOperators(response.data);
      } catch (error) {
        console.error("Erro ao buscar operadores", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOperators();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este operador?")) {
      console.log("Delete operator ID:", id);
    }
  };

  return (
    <FormLayout>
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-end gap-4">
        <PageHeader 
          title="Operadores" 
          description="Gerencie os administradores que possuem acesso total ao sistema." 
        />
        <Button to="/operators/create" className="w-full sm:w-auto shadow-sm">
          <PlusIcon className="w-5 h-5" />
          Novo Operador
        </Button>
      </div>

      <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Nome</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Email</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Acesso</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                [1, 2].map(i => (
                  <tr key={i}>
                    <td colSpan="4" className="p-5"><div className="h-10 bg-slate-50 animate-pulse rounded-lg w-full"></div></td>
                  </tr>
                ))
              ) : operators.length > 0 ? (
                operators.map((op) => (
                  <tr key={op.id} className="group hover:bg-slate-50/30 transition-colors">
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                          <ShieldCheckIcon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-slate-800 text-base">{op.name}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 text-slate-500 font-medium text-sm">{op.email}</td>
                    <td className="p-4 md:p-5">
                      <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700">
                        ADMIN
                      </span>
                    </td>
                    <td className="p-4 md:p-5 text-right">
                      <div className="flex justify-end gap-1">
                        <Link to={`/operators/edit/${op.id}`} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Editar">
                          <PencilSquareIcon className="w-5 h-5" />
                        </Link>
                        <button onClick={() => handleDelete(op.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Excluir">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-16 text-center">
                    <p className="text-slate-400 font-medium text-sm">Nenhum operador cadastrado.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </FormLayout>
  );
}

export default Operators;
