
import { useNavigate } from "react-router-dom";

export function LoginPage() {

  const navigate = useNavigate();

  return (

    <div className="flex w-sm flex-col items-center justify-center p-6 text-center px-4  ">
      <h1 className="text-2xl font-semibold">Faça seu Login</h1>
      <div className="flex flex-col items-center justify-center mt-4 gap-4 w-full ">
        <input className="p-2 bg-[202020] border  rounded-lg w-full" type="text" placeholder="E-mail" />
        <input className="p-2 bg-[202020] border  rounded-lg w-full" type="email" placeholder="Senha" />
        <button onClick={() => { navigate("/") }} className="bg-green-500 w-full font-semibold p-2 rounded-lg">Entrar</button>
      </div>
      <div className="flex justify-between items-center  mt-4  w-full">
        <button>Esqueceu a senha?</button>
        <button onClick={() => { navigate("/auth/register ") }}
          className="underline decoration cursor-pointer decoration-green-500">Cadastre-se</button>
      </div>
    </div>

  );
}