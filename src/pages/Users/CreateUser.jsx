import { UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Sending data to backend:", data);
      // await api.post('/users', data);
      // navigate('/users');
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout>
      <PageHeader
        title="Criar novo usuário"
        description="Preencha os dados abaixo para cadastrar um novo usuário no sistema."
      />
      <FormSection
        icon={UserIcon}
        title="Dados do usuário"
        description="Informações para acesso ao sistema."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Input
            label="Nome"
            {...register("name", {
              required: "Nome obrigatório.",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            })}
            id="name"
            placeholder="Digite o primeiro nome"
            error={errors.name?.message}
          />
          <Input
            label="Sobrenome"
            {...register("lastName", {
              required: "Sobrenome obrigatório.",
            })}
            id="lastName"
            placeholder="Digite o sobrenome"
            error={errors.lastName?.message}
          />
          <Input
            label="Email"
            type="email"
            {...register("email", {
              required: "Email obrigatório.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de email inválido.",
              },
            })}
            id="email"
            placeholder="exemplo@email.com"
            error={errors.email?.message}
            className="md:col-span-2"
          />
          <Input
            label="Senha"
            type="password"
            {...register("password", {
              required: "Senha obrigatória.",
              minLength: { value: 8, message: "Mínimo 8 caracteres" },
            })}
            id="password"
            placeholder="Crie uma senha forte"
            error={errors.password?.message}
          />
          <Input
            label="Repetir a senha"
            type="password"
            {...register("repeatedPassword", {
              required: "Confirmação de senha obrigatória.",
              validate: value => value === password || "As senhas não coincidem"
            })}
            id="repeatedPassword"
            placeholder="Confirme a senha"
            error={errors.repeatedPassword?.message}
          />
          <Select
            label="Igreja"
            {...register("church_id", {
              required: "Vínculo com uma igreja é obrigatório.",
            })}
            id="church_id"
            options={[
              { value: "", label: "Selecione uma igreja" },
              // Dados virão da API de igrejas
            ]}
            error={errors.church_id?.message}
            className="md:col-span-2"
          />
          <Select
            label="Função"
            {...register("role", {
              required: "Cargo obrigatório.",
            })}
            id="role"
            options={[
              { value: "", label: "Selecione uma função" },
              { value: "catequista", label: "Catequista" },
              { value: "coordenador", label: "Coordenador" },
            ]}
            error={errors.role?.message}
            className="md:col-span-2"
          />

          <div className="flex flex-col-reverse sm:flex-row gap-2 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/users" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar usuário"}
            </Button>
          </div>
        </form>

      </FormSection>
    </FormLayout>
  );
};

export default CreateUser;


