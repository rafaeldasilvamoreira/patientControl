import { Eye, SquarePen, Trash } from 'lucide-react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Patient {
  name: string;
  email: string;
  dateRegister: string;
  age: string;
  bloodType: string;
}

interface SkeletonPatientProps {
  loading: boolean;
  data: Patient[];
}

const SkeletonPatient: React.FC<SkeletonPatientProps> = ({ loading, data }) => {
  return (
    <div className="bg-[#282828] rounded-lg shadow-md p-4 overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-4">Paciente</th>
            <th className="py-4 hidden md:table-cell">E-mail</th>
            <th className="py-4 hidden md:table-cell">Idade</th>
            <th className="py-4 hidden md:table-cell">Tipo Sanguíneo</th>
            <th className="py-4 hidden md:table-cell">Cadastro</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (  
            // Simulando 5 skeletons
            [...Array(5)].map((_, index) => (
              <tr key={index} className='border-b border-gray-600'>
                <td className="py-4 ">
                  <Skeleton height={20} width={150} baseColor="#444" highlightColor="#666" />
                </td>
                <td className="py-4 hidden md:table-cell">
                  <Skeleton height={20} width={200} baseColor="#444" highlightColor="#666" />
                </td>
                <td className="py-4 hidden md:table-cell">
                  <Skeleton height={20} width={20} baseColor="#444" highlightColor="#666" />
                </td>
                <td className="py-4 hidden md:table-cell">
                  <Skeleton height={20} width={20} baseColor="#444" highlightColor="#666" />
                </td>
                <td className="py-4 hidden md:table-cell">
                  <Skeleton height={20} width={120} baseColor="#444" highlightColor="#666" />
                </td>
                <td className="py-4">
                  <div className="flex gap-4">
                    <Skeleton  height={20} width={20} baseColor="#444" highlightColor="#666" />
                    <Skeleton  height={20} width={20} baseColor="#444" highlightColor="#666" />
                    <Skeleton  height={20} width={20} baseColor="#444" highlightColor="#666" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            data.map((patient, index) => (
              <tr key={index} className="border-b border-gray-600 hover:bg-gray-700 transition-colors">
                <td className="py-4">{patient.name}</td>
                <td className="py-4 hidden md:table-cell">{patient.email}</td>
                <td className="py-4 hidden md:table-cell">{patient.age}</td>
                <td className="py-4 hidden md:table-cell text-red-500/80">{patient.bloodType}</td>
                <td className="py-4 hidden md:table-cell">{patient.dateRegister}</td>
                <td className="py-4">
                  <div className="flex gap-4">
                    <Eye className="text-green-500 cursor-pointer" size={20} />
                    <SquarePen className="text-gray-400 cursor-pointer" size={20} />
                    <Trash className="text-red-400 cursor-pointer" size={20} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonPatient;
