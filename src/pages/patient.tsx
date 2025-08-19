
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Heart, Phone, User } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

export function Patient() {

  const handleSuccess = () => {
    toast.success("Cadastrado com sucesso!", {
      className: 'custom-toast',  // Aplica a classe personalizada
      position: "bottom-right",
      autoClose: 3000,
    });
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 ">
          <label>
            <h1>Nome completo</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="João Andrade" />
          </label>
          <label>
            <h1>E-mail</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm " type="email" placeholder="jandrade@gmail.com" />
          </label>
          <label>
            <h1>Contato</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm " type="text" placeholder="(19) 99252-5042" />
          </label>

          <label>
            <h1>Data de Nascimento</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm"
              placeholder="18/02/2004" />
          </label>
          <label className="flex flex-col justify-between ">
            <h1>Gênero</h1>
            <select
              id="sexyType"
              className="p-2 border border-gray-600 rounded-md  w-full focus:outline-none focus:border-gray-200 text-sm">
              <option selected >Escolha um gênero</option>
              <option value="US">Masculino</option>
              <option value="CA">Feminino</option>
              <option value="FR">Outro</option>
            </select>
          </label>
          <label className="flex flex-col justify-between ">
            <h1>Tipo Sanguíneo</h1>
            <select
              id="bloodType"
              className="p-2 border border-gray-600 rounded-md  w-full focus:outline-none focus:border-gray-200 text-sm">
              <option selected >Escolha um Tipo Sanguíneo</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>

            </select>
          </label>
          <label className="md:col-span-2">
            <h1>Endereço</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="Rua 01, 425, Jardim do Sol - Artur Nogueira/SP" />
          </label>
        </div>
      </div>

      {/* Contato de Emergência */}
      <div className="flex flex-col gap-4 p-4 bg-[#282828] rounded-lg shadow-md mb-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Phone size={20} className="text-green-500" />
          Contato de Emergência
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label>
            <h1>Nome Responsável</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="Bernardo Andrade" />
          </label>
          <label>
            <h1>Telefone</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="(19) 99242-4827" />
          </label>
          <label>
            <h1>Nome Responsável 2</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="Maria Andrade" />
          </label>
          <label>
            <h1>Telefone 2 </h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="(19) 99457-0124" />
          </label>

        </div>
      </div>

      {/* Informações Médicas */}
      <div className="flex flex-col gap-4 p-4 bg-[#282828] rounded-lg shadow-md mb-4">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Heart size={20} className="text-green-500" />
          Informações Médicas
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <label>
            <h1>Histórico Médico</h1>
            <input className="p-2  py-6  border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="Hipertenção" />
          </label>
          <label>
            <h1>Alergias</h1>
            <input className="p-2  py-6  border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="Camarão" />
          </label>
          <label>
            <h1>Medicamentos em uso</h1>
            <input className="p-2 border border-gray-600 rounded-md w-full focus:outline-none focus:border-gray-200 mt-2 text-sm" type="text" placeholder="Amoxilina, Dipirona" />
          </label>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2">
        <button onClick={handleSuccess}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
          <h1 className="font-semibold">Salvar Paciente</h1>
        </button>
        <button
          className="w-full bg-[#282828] text-white p-3 rounded-lg hover:bg-[#303030] transition-colors cursor-pointer">
          <h1 className="font-semibold">Cancelar</h1>
        </button>
      </div>

      {/* Toast Notifications Container */}
      <ToastContainer />
    </div>
  );
}
