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

  const iconDict = {
    Cog6ToothIcon: Cog6ToothIcon,
    UserGroupIcon: UserGroupIcon,
    BookOpenIcon: BookOpenIcon,
    HomeIcon: HomeIcon,
    UserIcon: UserIcon,
    CalendarDateRangeIcon: CalendarDateRangeIcon,
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-blue-700 p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <Link to="/" className="text-white font-black text-2xl tracking-tighter">
          ISIDORO
        </Link>
        <button 
          onClick={toggleSidebar}
          className="text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-blue-700 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col shadow-2xl lg:shadow-none
      `}>
        <div className="p-8 hidden lg:block">
          <Link to="/" className="font-black text-3xl tracking-tighter block text-center">
            ISIDORO
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-3 font-medium">
            {Items.map((Item) => {
              const IconComponent = iconDict[Item.Icon];
              const isActive = location.pathname.startsWith(Item.url);
              
              return (
                <li key={Item.id}>
                  <Link
                    to={Item.url}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200
                      ${isActive 
                        ? "bg-white text-blue-700 shadow-lg scale-[1.02]" 
                        : "hover:bg-blue-600/50 text-blue-50"}
                    `}
                  >
                    {IconComponent && (
                      <IconComponent className={`w-7 h-7 shrink-0 ${isActive ? "text-blue-700" : "text-blue-200"}`} />
                    )}
                    <span className="text-lg font-bold">{Item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-blue-600/50">
          <div className="bg-blue-800/40 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Administrador</p>
              <p className="text-xs text-blue-200 truncate">admin@isidoro.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

