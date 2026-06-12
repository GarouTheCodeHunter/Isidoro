import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreateChurch = () => {
  const {
    church_name,
    church_brev_name,
    church_adress,
    church_cnpj,
    priest_name,
    parish_of_church,
    church_,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="gap-5 w-full items-center flex flex-col justify-center">
      <div className="flex w-[90%] flex-col gap-2 sm:p-0">
        <h1 className="text-4xl font-semibold">Cadastrar Igreja</h1>
        <p className="text-zinc-700">
          Preencha os dados abaixo para cadastrar uma nova igreja no sistema.
        </p>
      </div>
      <div className="w-[90%] bg-white flex flex-col p-5 rounded">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-5 ml-4 p-5">
            <HomeIcon className="w-13 h-13 p-2 text-blue-800 bg-blue-300/50 rounded-full" />
            <div>
              <h1 className="font-bold">Dados da igreja</h1>
              <p className="text-zinc-600">
                Informações para atribuir catequistas e crismandos/batizandos.
              </p>
            </div>
          </div>
          <hr className="text-gray-400 w-full self-center"></hr>
          <form
            onSubmit={() => onSubmit}
            className="grid grid-cols-2 gap-5 ml-4 p-5"
          >
            <div className="flex flex-col lg:col-span-1 col-span-2">
              <label htmlFor="church_name" className="font-bold mb-2">
                Nome da Igreja
              </label>
              <input
                type="text"
                {...register("church_name", {
                  required: "Nome da igreja é obrigatório.",
                  maxLength: 100,
                  minLength: 30,
                })}
                id="church_name"
                name="church_name"
                placeholder="Digite o nome da igreja"
                className="lg:p-5 p-3 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col lg:col-span-1 col-span-2">
              <label htmlFor="church_brev_name" className="font-bold mb-2">
                Nome da igreja abreviado
              </label>
              <input
                type="text"
                {...register("church_brev_name", {
                  maxLength: 100,
                  minLength: 30,
                })}
                id="church_brev_name"
                name="church_brev_name"
                placeholder="Digite o nome abreviado da igreja"
                className="lg:p-5 p-3 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="church_adress" className="font-bold mb-2">
                Endereço 
              </label>
              <input
                type="text"
                {...register("church_adress", {
                  required: "Endereço da igreja é necessário.",
                  maxLength: 100,
                  minLength: 30,
                })}
                id="church_adress"
                name="church_adress"
                placeholder="Digite o e-mail do usuário"
                className="lg:p-5 p-3 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="priest_name" className="font-bold mb-2">
                Nome do Padre
              </label>
              <input
                type="text"
                {...register("priest_name", {
                  required: "Nome do padre é obrigatório.",
                  minLength: 8,
                })}
                id="priest_name"
                name="priest_name"
                placeholder="Digite o nome do padre"
                className="lg:p-5 p-3 rounded border-gray-400 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="parish_of_church" className="font-bold mb-2">
                Nome da Paróquia
              </label>
              <input
                type="text"
                {...register("reapetedPassword", {
                  required: "Nome da paróquia da igreja obrigatório.",
                  minLength: 8,
                })}
                id="parish_of_church"
                name="parish_of_church"
                placeholder="Digite o nome da paróquia da igreja"
                className="lg:p-5 p-3 rounded border-gray-400 border"
              />
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
              Cadastrar paróquia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateChurch;
