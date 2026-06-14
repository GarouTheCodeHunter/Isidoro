import React, { useState, useEffect } from 'react';
import PageHeader from "../../components/ui/PageHeader";
import FormLayout from "../../components/ui/FormLayout";
import Button from "../../components/ui/Button";
import { PlusIcon, UserIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // MOCK: Usuário logado
  const currentUser = {
    role: 'operador', // Mudar para 'coordenador' para testar restrições
    church_id: 1
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Na API real, passaríamos o church_id se não fosse operador
        // const response = await api.get('/users', { params: { church_id: currentUser.role !== 'operador' ? currentUser.church_id : undefined } });
        
        // Simulação de filtragem por Tenant (Igreja)
        // const allUsers = response.data;
        // const filtered = currentUser.role === 'operador' ? allUsers : allUsers.filter(u => u.church_id === currentUser.church_id);
        // setUsers(filtered);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentUser.role, currentUser.church_id]);

  const canCreate = currentUser.role === 'operador';
  const canEdit = (user) => {
    if (currentUser.role === 'operador') return true;
    if (currentUser.role === 'coordenador' && user.role === 'catequista' && user.church_id === currentUser.church_id) return true;
    return false;
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      console.log("Delete user ID:", id);
    }
  };

  return (
    <FormLayout>
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-end gap-4">
        <PageHeader 
          title="Usuários" 
          description={currentUser.role === 'operador' ? "Gerencie todos os usuários do sistema." : "Gerencie os catequistas da sua igreja."} 
        />
        {canCreate && (
          <Button to="/users/create" className="w-full sm:w-auto shadow-sm">
            <PlusIcon className="w-5 h-5" />
            Novo Usuário
          </Button>
        )}
      </div>

      <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Nome</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Igreja</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Email</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider">Função</th>
                <th className="p-4 md:p-5 font-bold text-slate-400 text-xs uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                [1, 2, 3].map(i => (
                  <tr key={i}>
                    <td colSpan="5" className="p-5"><div className="h-10 bg-slate-50 animate-pulse rounded-lg w-full"></div></td>
                  </tr>
                ))
              ) : users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="group hover:bg-slate-50/30 transition-colors">
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                          <UserIcon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-slate-800 text-base">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 text-slate-500 font-medium text-sm">{user.church_name || "Não vinculada"}</td>
                    <td className="p-4 md:p-5 text-slate-500 font-medium text-sm">{user.email}</td>
                    <td className="p-4 md:p-5">
                      <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        user.role === 'Coordenador' ? 'bg-violet-100 text-violet-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4 md:p-5 text-right">
                      {canEdit(user) && (
                        <div className="flex justify-end gap-1">
                          <Link to={`/users/edit/${user.id}`} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Editar">
                            <PencilSquareIcon className="w-5 h-5" />
                          </Link>
                          {currentUser.role === 'operador' && (
                            <button onClick={() => handleDelete(user.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Excluir">
                              <TrashIcon className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-16 text-center">
                    <p className="text-slate-400 font-medium text-sm">Nenhum usuário encontrado.</p>
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


export default Users;