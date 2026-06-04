import {
  BookOpenIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Items from "../components-data/SidebarItems.json";
import useScreenSize from "../hooks/useScreenSize";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const screenSize = useScreenSize();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleHeaderMenu = () => {
    setToggleMenu(!toggleMenu ? true : false);
  };

  const iconDict = {
    Cog6ToothIcon: Cog6ToothIcon,
    UserGroupIcon: UserGroupIcon,
    BookOpenIcon: BookOpenIcon,
    HomeIcon: HomeIcon,
    UserIcon: UserIcon,
  };

  useEffect(() => {
    if (screenSize.width >= 640 && !toggleMenu) setToggleMenu(true);
  }, [screenSize, toggleMenu]);

  return (
    <aside className="w-full sm:w-55 p-4 bg-blue-600 flex justify-center sm:h-screen">
      <nav className="w-full flex items-center flex-col">
        <Link
          className={
            screenSize.width <= 639
              ? `flex items-center gap-3 font-bold text-2xl font-roboto tracking-wide text-white text-center`
              : "flex font-bold text-2xl font-roboto tracking-wide text-white text-center"
          } to={"/"}
        >
          Isidoro
          {screenSize.width <= 639 ? (
            <button
              className="cursor-pointer"
              onClick={() => handleHeaderMenu()}
            >
              <Bars4Icon className="w-6 h-6 font-bold" />
            </button>
          ) : (
            ""
          )}
        </Link>
        <ul
          id="ulSidebar"
          className={
            toggleMenu
              ? `flex items-center sm:items-start flex-col gap-2 sm:mt-10 mt-5 w-full`
              : `hidden`
          }
        >
          {Items.map((Item) => {
            const IconComponent = iconDict[Item.Icon];
            return (
              <li
                key={Item.id}
                className="flex px-2 py-2 gap-3 cursor-pointer w-full text-white hover:bg-blue-800/50 rounded-2xl transition-all"
              >
                {IconComponent && (
                  <IconComponent className="h-6 w-6 font-bold" />
                )}
                <Link className="font-bold" to={Item.url}>
                  {Item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
