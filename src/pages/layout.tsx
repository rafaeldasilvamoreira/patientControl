import {
  Activity,
  AlignJustify,  
  LayoutDashboard,
  LogOut,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import Profile from "../assets/profile.jpg";
import { useState } from "react";

export function LayoutPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-[#202020] text-gray-300 h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`bg-[#1A1A1A] w-full md:w-xs p-2 absolute md:static z-20 transform 
      ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 transition-transform duration-300 ease-in-out h-full flex flex-col`}>
        <h1 className="flex justify-center items-center text-2xl font-bold mt-4">
          <Activity strokeWidth={3}  className="text-green-500 animate-pulse"/>HEALIX
        </h1>

        {/* Navegação com espaço flexível */}
        <div className="flex flex-col gap-2 mt-6 flex-grow">
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="flex items-center hover:bg-[#252525] p-2 rounded-md w-full gap-2 focus:bg-[#303030] cursor-pointer"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button
            onClick={() => {
              navigate("/patient");
              setMenuOpen(false);
            }}
            className="flex items-center hover:bg-[#252525] p-2 rounded-md w-full gap-2 focus:bg-[#303030] cursor-pointer"
          >
            <UserPlus size={20} />
            Novo Paciente
          </button>
          <button
            onClick={() => {
              navigate("list");
              setMenuOpen(false);
            }}
            className="flex items-center hover:bg-[#252525] p-2 rounded-md w-full gap-2 focus:bg-[#303030] cursor-pointer"
          >
            <Users size={20} />
            Pacientes
          </button>
        </div>

        {/* Perfil fixado ao rodapé */}
        <div className="bg-[#282828] flex items-center justify-between p-2 rounded-md">
          <div className="flex items-center gap-2">
            <img src={Profile} className="h-10 w-10 rounded-full" alt="Profile" />
            <div className="flex flex-col">
              <p className="text-md ">User Name</p>
              <p className="text-sm text-gray-500">email@email.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mr-2">
            <Settings className="hover:animate-pulse cursor-pointer" size={20} />
            <LogOut onClick={() => {navigate("/auth/login") }}
            className="hover:text-red-500 cursor-pointer" size={20} />
          </div>
        </div>
      </div>

      {/* Botão hamburguer para mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="flex justify-between items-center px-6 md:hidden p-4 bg-[#1A1A1A] ">
        <h1 className="flex justify-center items-center text-2xl font-bold  ">
          <Activity strokeWidth={3}  className="text-green-500 animate-pulse"/>HEALIX
        </h1>
        <AlignJustify strokeWidth={3} />
      </button>

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10">
        <Outlet  />
      </div>
    </div>
  );
}
