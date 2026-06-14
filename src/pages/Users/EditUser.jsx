import { UserIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setFetching(true);
        // Simulação de busca de dados do usuário
        // const response = await api.get(`/users/${id}`);
        // const user = response.data;
        // setValue("name", user.name);
        // setValue("lastName", user.lastName);
        // setValue("email", user.email);
        // setValue("role", user.role);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário", error);
      } finally {
        setFetching(false);
      }
    };
    fetchUser();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Updating data in backend for ID:", id, data);
      // await api.put(`/users/${id}`, data);
      // navigate('/users');
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <FormLayout>
        <div className="w-full flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </FormLayout>
    );
  }

  return (
    <FormLayout>
      <PageHeader
        title="Editar Usuário"
        description="Atualize as informações do usuário selecionado."
      />
      <FormSection
        icon={UserIcon}
        title="Dados do usuário"
        description={`Editando perfil do ID: ${id}`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            label="Nome"
            {...register("name", { required: "Nome obrigatório." })}
            id="name"
            placeholder="Digite o primeiro nome"
            error={errors.name?.message}
          />
          <Input
            label="Sobrenome"
            {...register("lastName", { required: "Sobrenome obrigatório." })}
            id="lastName"
            placeholder="Digite o sobrenome"
            error={errors.lastName?.message}
          />
          <Input
            label="Email"
            type="email"
            {...register("email", { required: "Email obrigatório." })}
            id="email"
            placeholder="exemplo@email.com"
            error={errors.email?.message}
            className="md:col-span-2"
          />
          <Select
            label="Função"
            {...register("role", { required: "Cargo obrigatório." })}
            id="role"
            options={[
              { value: "", label: "Selecione uma função" },
              { value: "catequista", label: "Catequista" },
              { value: "coordenador", label: "Coordenador" },
            ]}
            error={errors.role?.message}
            className="md:col-span-2"
          />
          <div className="flex flex-col-reverse sm:flex-row gap-3 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/users" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </form>
      </FormSection>
    </FormLayout>
  );
};

export default EditUser;

