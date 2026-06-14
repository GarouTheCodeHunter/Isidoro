import {
  BookOpenIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Items from "../components-data/SidebarItems.json";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // MOCK: Usuário logado (Isso viria de um AuthContext no futuro)
  const user = {
    role: 'operador', // 'operador', 'coordenador', 'catequista'
    church_id: 1,
    name: 'Admin Isidoro'
  };

  const iconDict = {
    Cog6ToothIcon: Cog6ToothIcon,
    UserGroupIcon: UserGroupIcon,
    BookOpenIcon: BookOpenIcon,
    HomeIcon: HomeIcon,
    UserIcon: UserIcon,
    CalendarDateRangeIcon: CalendarDateRangeIcon,
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Filtragem de itens por permissão
  const filteredItems = Items.filter(item => {
    if (user.role === 'operador') return true; // Operador vê tudo
    
    // Coordenador e Catequista não vêem Operadores nem Igrejas (gestão global)
    if (item.url === '/operators' || item.url === '/churchs') return false;
    
    return true;
  });

  return (
    <>
      {/* ... (Mobile Header permanece igual) ... */}
      <div className="lg:hidden bg-blue-600 p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <Link to="/" className="text-white font-bold text-xl tracking-tight">
          ISIDORO
        </Link>
        <button 
          onClick={toggleSidebar}
          className="text-white p-2 rounded-lg hover:bg-blue-500 transition-colors"
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-blue-600 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col shadow-xl lg:shadow-none
      `}>
        <div className="p-6 hidden lg:block">
          <Link to="/" className="font-bold text-2xl tracking-tight block text-center">
            ISIDORO
          </Link>
        </div>

        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          <ul className="space-y-1 font-medium">
            {filteredItems.map((Item) => {
              const IconComponent = iconDict[Item.Icon];
              const isActive = location.pathname.startsWith(Item.url);
              
              return (
                <li key={Item.id}>
                  <Link
                    to={Item.url}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm md:text-base
                      ${isActive 
                        ? "bg-white text-blue-600 shadow-sm font-semibold" 
                        : "hover:bg-blue-500 text-blue-50"}
                    `}
                  >
                    {IconComponent && (
                      <IconComponent className={`w-5 h-5 shrink-0 ${isActive ? "text-blue-600" : "text-blue-200"}`} />
                    )}
                    <span>{Item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-500/50">
          <div className="bg-blue-700/30 rounded-lg p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center font-bold text-white text-xs uppercase">
              {user.name.substring(0, 2)}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate">{user.name}</p>
              <p className="text-[10px] text-blue-200 truncate font-medium uppercase tracking-widest">{user.role}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};


export default Sidebar;


