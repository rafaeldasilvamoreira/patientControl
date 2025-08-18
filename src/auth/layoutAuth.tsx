import { Activity } from "lucide-react";
import { Outlet } from "react-router-dom";

export function LayoutAuth() {
    return (
        <div className="flex flex-col  h-screen bg-[#202020] text-gray-300">
            <div className="flex flex-1 flex-col items-center justify-center h-screen text-center">
                <div className="flex items-center justify-center  text-3xl font-bold text-white mb-2">
                    <Activity strokeWidth={3} className="text-green-500 animate-pulse" />
                    HEALIX
                </div>
                <h2 className="text-sm font-semibold text-gray-500 mb-2">
                    Bem-vindo à sua plataforma de saúde inteligente
                </h2>                
                <div className=" flex items-center justify-center pt-10 ">
                    <Outlet />
                </div>
            </div>
            <div>
                <p className="text-xs text-gray-500 text-center mb-2">
                    © 2024 Healix. Todos os direitos reservados.
                </p>
            </div>

        </div>
    );
}