import React, { useState, useEffect } from "react";
import PageHeader from "../../components/ui/PageHeader";
import FormLayout from "../../components/ui/FormLayout";
import Button from "../../components/ui/Button";
import { PlusIcon, HomeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Churchs = () => {
  const [churches, setChurches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChurches = async () => {
      try {
        setLoading(true);
        // Simulação de chamada de API
        // const response = await api.get('/churches');
        // setChurches(response.data);
      } catch (error) {
        console.error("Erro ao buscar igrejas", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChurches();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta igreja?")) {
      console.log("Delete church ID:", id);
      // api.delete(`/churches/${id}`)
    }
  };

  return (
    <FormLayout>
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4">
        <PageHeader 
          title="Igrejas" 
          description="Gerencie as paróquias e comunidades cadastradas." 
        />
        <Button to="/churchs/create" className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <PlusIcon className="w-5 h-5" />
          Nova Igreja
        </Button>
      </div>

      <div className="w-full bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200">
                <th className="p-4 font-bold text-zinc-700 text-sm">Nome</th>
                <th className="p-4 font-bold text-zinc-700 text-sm">Padre</th>
                <th className="p-4 font-bold text-zinc-700 text-sm">Localização</th>
                <th className="p-4 font-bold text-zinc-700 text-sm text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="border-b border-zinc-100">
                    <td colSpan="4" className="p-4"><div className="h-6 bg-zinc-50 animate-pulse rounded w-full"></div></td>
                  </tr>
                ))
              ) : churches.length > 0 ? (
                churches.map((church) => (
                  <tr key={church.id} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <HomeIcon className="w-8 h-8 text-blue-500 bg-blue-50 p-1.5 rounded-full shrink-0" />
                        <span className="font-medium text-zinc-800 text-sm md:text-base">{church.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-zinc-600 text-sm md:text-base">{church.priest}</td>
                    <td className="p-4 text-zinc-600 text-sm md:text-base">{church.location}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link to={`/churchs/edit/${church.id}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                          <PencilSquareIcon className="w-5 h-5" />
                        </Link>
                        <button onClick={() => handleDelete(church.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-10 text-center text-zinc-400">
                    Nenhuma igreja cadastrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </FormLayout>
  );
};

export default Churchs;

