import { Heart, Phone, User } from "lucide-react";

export function Patient() {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-0">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Novo Paciente</h1>
        <p className="text-gray-500">Cadastre as informações do novo paciente</p>
      </div>

      {/* Informações Pessoais */}
      <div className="flex flex-col gap-4 p-4 bg-[#282828] rounded-lg shadow-md mb-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <User size={20} className="text-green-500 " />
          Informações Pessoais
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 " type="text" placeholder="Nome Completo" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 " type="email" placeholder="E-mail" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200" type="text" placeholder="Telefone" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200" type="date" placeholder="Data de Nascimento" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200" type="text" placeholder="Gênero" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200" type="text" placeholder="Tipo Sanguíneo" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 md:col-span-2" type="text" placeholder="Endereço" />
        </div>
      </div>

      {/* Contato de Emergência */}
      <div className="flex flex-col gap-4 p-4 bg-[#282828] rounded-lg shadow-md mb-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Phone size={20} className="text-green-500" />
          Contato de Emergência
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-2 border border-gray-600 focus:outline-none focus:border-gray-200  rounded-md w-full" type="text" placeholder="Nome Responsável" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200  " type="text" placeholder="Telefone" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200  " type="text" placeholder="Nome Responsável 2" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200  " type="text" placeholder="Telefone 2" />
        </div>
      </div>

      {/* Informações Médicas */}
      <div className="flex flex-col gap-4 p-4 bg-[#282828] rounded-lg shadow-md mb-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Heart size={20} className="text-green-500" />
          Informações Médicas
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <input className="p-2 py-6 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200   " type="text" placeholder="Histórico Médico" />
          <input className="p-2 py-6 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200   " type="text" placeholder="Alergias" />
          <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200  " type="text" placeholder="Medicamentos em Uso" />
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2">
        <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
          <h1 className="font-semibold">Salvar Paciente</h1>
        </button>
        <button className="w-full bg-[#282828] text-white p-3 rounded-lg hover:bg-[#303030] transition-colors">
          <h1 className="font-semibold">Cancelar</h1>
        </button>
      </div>
    </div>
  );
}
