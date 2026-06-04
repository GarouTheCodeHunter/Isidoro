import React from "react";
import { useForm } from "react-hook-form";

const CreateUser = () => {
  const {
    name,
    lastname,
    email,
    password,
    repeatedPassword,
    church,
    role,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={() => onSubmit}>
      <input
        type="text"
        {...register("name", {
            required: "Nome obrigatório.",
            maxLength: 10,
            minLength: 4,
        })}
        id="name"
        name="name"
        placeholder="Primeiro nome:"
      ></input>
      <input
        type="text"
        {...register("lastName", {
            required: "Ultimo nome obrigatório.",
            maxLength: 10,
            minLength: 3,
        })}
        id="lastName"
        name="lastName"
        placeholder="Ultimo nome:"
      ></input>
      <input 
        type="email"
        {...register("email", {
            required: "Email obrigatório.",
            pattern: {
                value: /^[A-Z0-9._%+-]@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de email inválido."
                }
        })} 
        id="email" 
        name="email"
        placeholder="Email:" />
      <input
        type="password"
        {...register("password", {
            required: "Senha obrigatória.",
            minLength: 8,
        })}
        id="password"
        name="password"
        placeholder="Senha:"
      />
      <input
        type="password"
        {...register("reapetedPassword", {
            required: "Senha obrigatória.",
            minLength: 8,
        })}
        id="repeatedPassword"
        name="repeatedPassword"
        placeholder="Repita a senha:"
      />
      <input type="sele" />
    </form>
  );
};

export default CreateUser;
