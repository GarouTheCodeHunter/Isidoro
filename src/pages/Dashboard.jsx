import React, { useState, useEffect } from 'react';
import PageHeader from "../components/ui/PageHeader";
import FormLayout from "../components/ui/FormLayout";
import { 
  UserGroupIcon, 
  HomeIcon, 
  BookOpenIcon, 
  UserIcon 
} from "@heroicons/react/24/outline";

const StatCard = ({ title, value, icon: Icon, color, loading }) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-zinc-200 flex items-center gap-4 w-full">
    <div className={`p-3 rounded-full shrink-0 ${color}`}>
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </div>
    <div className="overflow-hidden">
      <p className="text-zinc-500 text-xs md:text-sm font-medium truncate">{title}</p>
      {loading ? (
        <div className="h-8 w-16 bg-zinc-100 animate-pulse rounded mt-1"></div>
      ) : (
        <h3 className="text-xl md:text-2xl font-bold text-zinc-800">{value}</h3>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, churches: 0, classes: 0, formations: 0 });
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando chamada de API para carregar dados reais
    const fetchData = async () => {
      try {
        setLoading(true);
        // await fetchStats(); 
        // await fetchActivities();
        // setStats({ users: 12, churches: 4, classes: 8, formations: 15 });
        // setActivities([{ id: 1, text: "Novo usuário cadastrado: João Silva", time: "há 2 horas" }]);
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <FormLayout>
      <PageHeader 
        title="Dashboard" 
        description="Bem-vindo ao Isidoro. Aqui está um resumo do sistema." 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-4">
        <StatCard 
          title="Usuários" 
          value={stats.users} 
          icon={UserIcon} 
          color="bg-blue-500" 
          loading={loading}
        />
        <StatCard 
          title="Igrejas" 
          value={stats.churches} 
          icon={HomeIcon} 
          color="bg-green-500" 
          loading={loading}
        />
        <StatCard 
          title="Turmas" 
          value={stats.classes} 
          icon={UserGroupIcon} 
          color="bg-purple-500" 
          loading={loading}
        />
        <StatCard 
          title="Formações" 
          value={stats.formations} 
          icon={BookOpenIcon} 
          color="bg-orange-500" 
          loading={loading}
        />
      </div>

      <div className="w-full mt-6 bg-white p-5 md:p-8 rounded-lg shadow-sm border border-zinc-200">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-zinc-800">Atividades Recentes</h2>
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => <div key={i} className="h-12 bg-zinc-50 animate-pulse rounded"></div>)}
          </div>
        ) : activities.length > 0 ? (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-zinc-50 last:border-0 gap-1">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <p className="text-zinc-700 text-sm md:text-base">{activity.text}</p>
                </div>
                <span className="text-zinc-400 text-xs sm:text-sm pl-5 sm:pl-0">{activity.time}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="text-zinc-400">Nenhuma atividade recente encontrada.</p>
          </div>
        )}
      </div>
    </FormLayout>
  );
}

export default Dashboard;