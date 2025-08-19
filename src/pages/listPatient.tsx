import { Eye, SquarePen, Trash, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function ListPatient() {

  const navigate = useNavigate();

  const patientRegister = [
    {
      name: "John Doe",
      email: "jhondoe@gmail.com",
      dateRegister: "01/10/2023",
      age: "30",
      bloodType: "O+",
    },
    {
      name: "Jane Smith",
      email: "jane@gmail.com",
      dateRegister: "04/05/2024",
      age: "30",
      bloodType: "A+",
    },
    {
      name: "Alice Johnson",
      email: "alice@gmail.com",
      dateRegister: "12/06/2025",
      age: "30",
      bloodType: "A",
    },
    {
      name: "Bob Brown",
      email: "bob@gmail.com",
      dateRegister: "15/07/2025",
      age: "30",
      bloodType: "B-",
    },
  ];

  return (
    <div className="flex flex-col gap-6 " >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Pacientes </h1>
          <p className="text-gray-500">Gerencie todos os pacientes cadastrados</p>
        </div>
        <button className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
          onClick={() => {
            navigate("/patient");
          }}>
          <UserPlus size={20} />
          <h1 className="hidden md:block">Novo Paciente</h1>
        </button>
      </div>

      <div className="bg-[#282828] rounded-lg shadow-md p-4">
        <input className="flex w-full p-2 border border-gray-600 focus:outline-none focus:border-gray-200 rounded-md" type="text" placeholder="Buscar pacientes por nome, email ou telefone... " />
      </div>
      <div className="bg-[#282828] rounded-lg shadow-md p-4 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-4">Paciente</th>
              <th className="py-4 hidden md:table-cell">Contato</th>
              <th className="py-4 hidden md:table-cell">Idade</th>
              <th className="py-4 hidden md:table-cell">Tipo Sanguíneo</th>
              <th className="py-4 hidden md:table-cell">Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {patientRegister.map((patient, index) => (
              <tr key={index} className="border-b   border-gray-600 hover:bg-gray-700 transition-colors">
                <td className="py-4">{patient.name}</td>
                <td className="py-4 hidden md:table-cell">{patient.email}</td>
                <td className="py-4 hidden md:table-cell">{patient.age}</td>
                <td className="py-4 hidden md:table-cell text-red-500/80">{patient.bloodType}</td>
                <td className="py-4 hidden md:table-cell">{patient.dateRegister}</td>
                <td className="py-4">
                  <div className="flex gap-4 ">
                    <Eye className="text-green-500 cursor-pointer" size={20} />
                    <SquarePen className="text-gray-400 cursor-pointer" size={20} />
                    <Trash className="text-red-400 cursor-pointer" size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}