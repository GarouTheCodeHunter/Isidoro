import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const {
    name,
    lastname,
    email,
    password,
    repeatedPassword,
    role,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full gap-5 items-center flex flex-col">
      <div className="flex max-w-6xl w-full flex-col gap-2 sm:p-0 pl-15">
        <h1 className="text-4xl font-semibold">Criar novo usuário</h1>
        <p className="text-zinc-700">
          Preencha os dados abaixo para cadastrar um novo usuário no sistema.
        </p>
      </div>
      <div className="w-[80%] max-w-6xl bg-white flex flex-col p-5 rounded">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-5 ml-4 p-5">
            <UserIcon className="w-13 h-13 p-2 text-blue-800 bg-blue-300/50 rounded-full" />
            <div>
              <h1 className="font-bold">Dados do usuário</h1>
              <p className="text-zinc-600">
                Informações para acesso ao sistema.
              </p>
            </div>
          </div>
          <hr className="text-gray-400 w-full self-center"></hr>
          <form
            onSubmit={() => onSubmit}
            className="grid grid-cols-2 gap-5 ml-4 p-5"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold mb-2">
                Nome
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Nome obrigatório.",
                  maxLength: 10,
                  minLength: 4,
                })}
                id="name"
                name="name"
                placeholder="Digite o primeiro nome"
                className="p-5 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-bold mb-2">
                Ultimo nome
              </label>
              <input
                type="text"
                {...register("lastName", {
                  required: "Ultimo nome obrigatório.",
                  maxLength: 10,
                  minLength: 3,
                })}
                id="lastName"
                name="lastName"
                placeholder="Digite o sobrenome"
                className="p-5 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="email" className="font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email obrigatório.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Endereço de email inválido.",
                  },
                })}
                id="email"
                name="email"
                placeholder="Digite o e-mail do usuário"
                className="p-5 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold mb-2">
                Senha
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Senha obrigatória.",
                  minLength: 8,
                })}
                id="password"
                name="password"
                placeholder="Digite a senha"
                className="p-5 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col sm:w-full">
              <label htmlFor="repeatedPassword" className="font-bold mb-2">
                Repetir a senha
              </label>
              <input
                type="password"
                {...register("reapetedPassword", {
                  required: "Senha obrigatória.",
                  minLength: 8,
                })}
                id="repeatedPassword"
                name="repeatedPassword"
                placeholder="Repita a senha"
                className="p-5 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col col-span-2 sm:w-full">
              <label htmlFor="role" className="font-bold mb-2">
                Função
              </label>
              <select
                {...register("role", {
                  required: "Cargo obrigatório.",
                })}
                id="role"
                name="role"
                placeholder="Selecione uma função"
                className="p-5 rounded border-gray-400 border"
              >
                <option value="catequista">Catequista</option>
                <option value="coordenador">Coordenador</option>
              </select>
            </div>
          </form>
          <div className="flex gap-2 items-center w-full justify-end pr-4">
            <Link
              to={"/"}
              className="p-4 text-center border-black border hover:bg-zinc-200 transition-colors cursor-pointer rounded"
            >
              Cancelar
            </Link>
            <button className="p-4 bg-blue-500 border-gray-200 border text-white hover:bg-blue-600 font-bold transition-colors cursor-pointer rounded">
              Cadastrar usuário
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateUser;
