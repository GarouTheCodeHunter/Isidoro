import React, { useState, useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useParams, useNavigate } from "react-router-dom";

const EditChurch = () => {
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
    const fetchChurch = async () => {
      try {
        setFetching(true);
        // Implementar busca real por ID aqui:
        // const response = await api.get(`/churches/${id}`);
        // const church = response.data;
        // ... set values
      } catch (error) {
        console.error("Erro ao buscar dados da igreja", error);
      } finally {
        setFetching(false);
      }
    };
    fetchChurch();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Updating church data in backend for ID:", id, data);
      // await api.put(`/churches/${id}`, data);
      // navigate('/churchs');
    } catch (error) {
      console.error("Erro ao atualizar igreja", error);
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
        title="Editar Igreja"
        description={`Atualize as informações da igreja ID: ${id}`}
      />
      <FormSection
        icon={HomeIcon}
        title="Dados da igreja"
        description="Atualize as informações da paróquia."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            label="Nome da Igreja"
            {...register("church_name", { required: "Nome da igreja é obrigatório." })}
            id="church_name"
            placeholder="Digite o nome completo da igreja"
            error={errors.church_name?.message}
            className="md:col-span-2"
          />
          <Input
            label="Nome abreviado"
            {...register("church_brev_name")}
            id="church_brev_name"
            placeholder="Ex: Matriz, Capela Sto. Antônio"
            error={errors.church_brev_name?.message}
          />
          <Input
            label="Endereço"
            {...register("church_adress", { required: "Endereço da igreja é necessário." })}
            id="church_adress"
            placeholder="Rua, número, bairro e cidade"
            error={errors.church_adress?.message}
            className="md:col-span-2"
          />
          <Input
            label="Nome do Padre"
            {...register("priest_name", { required: "Nome do padre é obrigatório." })}
            id="priest_name"
            placeholder="Digite o nome do padre"
            error={errors.priest_name?.message}
          />
          <Input
            label="Nome da Paróquia"
            {...register("parish_of_church", { required: "Nome da paróquia é obrigatório." })}
            id="parish_of_church"
            placeholder="Digite o nome da paróquia"
            error={errors.parish_of_church?.message}
          />
          <div className="flex flex-col-reverse sm:flex-row gap-3 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/churchs" className="w-full sm:w-auto">
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

export default EditChurch;

