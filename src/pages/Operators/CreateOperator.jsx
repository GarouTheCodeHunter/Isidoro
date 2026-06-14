import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useNavigate } from "react-router-dom";

const CreateOperator = () => {
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
      console.log("Creating operator:", data);
      // await api.post('/operators', data);
      // navigate('/operators');
    } catch (error) {
      console.error("Erro ao cadastrar operador", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout>
      <PageHeader
        title="Novo Operador"
        description="Cadastre um novo administrador para gerenciar o sistema Isidoro."
      />
      <FormSection
        icon={ShieldCheckIcon}
        title="Dados de Acesso"
        description="Informações para login administrativo."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Input
            label="Nome Completo"
            {...register("name", { required: "Nome é obrigatório." })}
            id="name"
            placeholder="Digite o nome do operador"
            error={errors.name?.message}
            className="md:col-span-2"
          />
          <Input
            label="Email"
            type="email"
            {...register("email", { required: "Email é obrigatório." })}
            id="email"
            placeholder="admin@isidoro.com"
            error={errors.email?.message}
            className="md:col-span-2"
          />
          <Input
            label="Senha"
            type="password"
            {...register("password", { required: "Senha é obrigatória.", minLength: 8 })}
            id="password"
            placeholder="Crie uma senha forte"
            error={errors.password?.message}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            {...register("confirmPassword", { 
              required: "Confirmação é necessária.",
              validate: v => v === password || "As senhas não coincidem"
            })}
            id="confirmPassword"
            placeholder="Repita a senha"
            error={errors.confirmPassword?.message}
          />
          
          <div className="flex flex-col-reverse sm:flex-row gap-2 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/operators" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Cadastrando..." : "Criar Operador"}
            </Button>
          </div>
        </form>
      </FormSection>
    </FormLayout>
  );
};

export default CreateOperator;
