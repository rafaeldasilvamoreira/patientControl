import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function Dashboard() {

  const navigate = useNavigate();

  const card = [
    {
      title: "Total de pacientes",
      value: "150",
      icon: "users",
      progress: 75,
      monthPrevious: "10% mais que o mês anterior"
    },
    {
      title: "Novos esse mês",
      value: "20",
      icon: "user-plus",
      progress: 50,
      monthPrevious: "5% mais que o mês anterior"
    },
    {
      title: "Consultas agendadas",
      value: "5",
      icon: "calendar-check",
      progress: 30,
      monthPrevious: "15% menos que o mês anterior"
    },
    {
      title: "Pacientes ativos",
      value: "20",
      icon: "credit-card",
      progress: 60,
      monthPrevious: "10% mais que o mês anterior"
    }
  ]

  const patientRecent = [
    {
      name: "John Doe",
      email: "jhondoe@gmail.com",
      dateRegister: "01/10/2023",
      status: "Cadastrado"
    },
    {
      name: "Jane Smith",
      email: "jane@gmail.com",
      dateRegister: "04/05/2024",
      status: "Cadastrado"
    },
    {
      name: "Alice Johnson",
      email: "alice@gmail.com",
      dateRegister: "12/06/2025",
      status: "Cadastrado"
    },
    {
      name: "Bob Brown",
      email: "bob@gmail.com",
      dateRegister: "15/07/2025",
      status: "Cadastrado"
    },
  ];

  return (

    <div className="flex flex-col gap-6 " >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Dashboard </h1>
        <p className="text-gray-500">Visão geral do sistema de controle de pacientes</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {card.map((item, index) => (
          <div key={index} className="bg-[#282828] p-4 rounded-lg shadow-md mb-4 ">
            <div className="flex items-center justify-between">
              <div className="flex  font-semibold justify-between w-full">
                <h2 className="">{item.title}</h2>
                <p className="text-gray-400 ">{item.value}</p>
              </div>
              <div className={`icon-${item.icon} text-2xl`}></div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-600 h-2 rounded-full">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{item.monthPrevious}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center " >
        <div>
          <h2 className="text-xl font-semibold ">Pacientes Recentes</h2>
          <p className="text-gray-500">Últimos pacientes cadastrados no sistema</p>
        </div>

        <button className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
          onClick={() => {
            navigate("patient");
          }}>
          <UserPlus size={20} />
           <h1 className="hidden md:block">Novo Paciente</h1>
        </button>

      </div>
      <div className="bg-[#282828] rounded-lg shadow-md p-4">
        {patientRecent.map((patient, index) => (
          <div key={index} className="flex bg-[#282828] p-2 justify-between border-b  border-gray-600 hover:bg-gray-700 transition-colors">
            <div className="flex flex-col">
              <h3 className="font-semibold">{patient.name}</h3>
              <p className="text-gray-400 text-sm">Email: {patient.email}</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-gray-400 text-sm">{patient.dateRegister}</p>
              <p className={`text-sm ${patient.status === "Cadastrado" ? "text-green-500" : "text-red-500"}`}>
                {patient.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}