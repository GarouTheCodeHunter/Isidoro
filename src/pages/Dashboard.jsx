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
  <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 w-full">
    <div className={`p-3 md:p-4 rounded-lg shrink-0 ${color} shadow-sm`}>
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </div>
    <div className="overflow-hidden">
      <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-wider">{title}</p>
      {loading ? (
        <div className="h-6 w-16 bg-slate-100 animate-pulse rounded mt-1"></div>
      ) : (
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-0.5 tracking-tight">{value}</h3>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, churches: 0, classes: 0, formations: 0 });
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Implementar chamada real de API aqui:
        // const response = await api.get('/dashboard/stats');
        // setStats(response.data.stats);
        // setActivities(response.data.recentActivities);
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
        description="Resumo geral das atividades do sistema Isidoro." 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-2">
        <StatCard 
          title="Usuários" 
          value={stats.users} 
          icon={UserIcon} 
          color="bg-blue-600" 
          loading={loading}
        />
        <StatCard 
          title="Igrejas" 
          value={stats.churches} 
          icon={HomeIcon} 
          color="bg-emerald-600" 
          loading={loading}
        />
        <StatCard 
          title="Turmas" 
          value={stats.classes} 
          icon={UserGroupIcon} 
          color="bg-violet-600" 
          loading={loading}
        />
        <StatCard 
          title="Formações" 
          value={stats.formations} 
          icon={BookOpenIcon} 
          color="bg-orange-600" 
          loading={loading}
        />
      </div>

      <div className="w-full mt-4 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg md:text-xl font-bold mb-6 text-slate-900 tracking-tight">Atividades Recentes</h2>
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => <div key={i} className="h-14 bg-slate-50 animate-pulse rounded-lg"></div>)}
          </div>
        ) : activities.length > 0 ? (
          <div className="space-y-3">
            {activities.map((activity) => (
              <div key={activity.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                  <p className="text-sm md:text-base font-medium text-slate-700">{activity.text}</p>
                </div>
                <span className="text-slate-400 font-medium text-[10px] md:text-xs uppercase tracking-wider pl-5 sm:pl-0">{activity.time}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center bg-slate-50/50 rounded-lg border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium text-sm">Nenhuma atividade recente encontrada.</p>
          </div>
        )}
      </div>
    </FormLayout>
  );
}

export default Dashboard;