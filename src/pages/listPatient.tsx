import  { useState, useEffect } from 'react';
import {UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SkeletonPacient from './skeletons/skeletonPatient'; 

export function ListPatient() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Após 3 segundos, simula o carregamento dos dados
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Pacientes</h1>
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
        <input
          className="flex w-full p-2 border border-gray-600 focus:outline-none focus:border-gray-200 rounded-md"
          type="text"
          placeholder="Buscar pacientes por nome ou email..."
        />
      </div>

      {/* Chame o SkeletonLoader aqui */}
      <SkeletonPacient
       loading={loading} data={patientRegister} />
    </div>
  );
}
