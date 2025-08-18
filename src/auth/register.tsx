 import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  
const navigate = useNavigate();

  return (
    <div>
      <div className="flex w-sm flex-col items-center justify-center  text-center px-4">
        <h1 className="text-2xl font-semibold">Criar nova conta</h1>
        <div className="flex flex-col items-center justify-center mt-4 gap-4 w-full ">
          <input className="p-2 bg-[202020] border  rounded-lg w-full" type="text" placeholder="Nome" />
          <input className="p-2 bg-[202020] border  rounded-lg w-full" type="email" placeholder="E-mail" />
          <input className="p-2 bg-[202020] border  rounded-lg w-full" type="password" placeholder="Senha" />
          <input className="p-2 bg-[202020] border  rounded-lg w-full" type="password" placeholder="Confirmar Senha" />
          <button  onClick={() => {navigate("/") }} className="bg-green-500 w-full font-semibold p-2 rounded-lg">Criar</button>
        </div>
        <div className="flex items-center justify-between mt-4 gap-1  ">
          <button>Já tenho uma conta!</button>
          <button onClick={() => {navigate("/auth/login ") }}
          className="underline decoration-2 cursor-pointer decoration-green-500">Fazer Login</button>
        </div>
      </div>
    </div>
  );
}