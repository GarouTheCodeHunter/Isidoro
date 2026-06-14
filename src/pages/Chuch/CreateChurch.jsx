import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useNavigate } from "react-router-dom";

const CreateChurch = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Sending data to backend:", data);
      // await api.post('/churches', data);
      // navigate('/churchs');
    } catch (error) {
      console.error("Erro ao cadastrar igreja", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout>
      <PageHeader
        title="Cadastrar Igreja"
        description="Preencha os dados abaixo para cadastrar uma nova igreja no sistema."
      />
      <FormSection
        icon={HomeIcon}
        title="Dados da igreja"
        description="Informações para atribuir catequistas e crismandos/batizandos."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Input
            label="Nome da Igreja"
            {...register("church_name", {
              required: "Nome da igreja é obrigatório.",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            })}
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
            label="CNPJ (Opcional)"
            {...register("church_cnpj")}
            id="church_cnpj"
            placeholder="00.000.000/0000-00"
            error={errors.church_cnpj?.message}
          />
          <Input
            label="Endereço"
            {...register("church_adress", {
              required: "Endereço da igreja é necessário.",
            })}
            id="church_adress"
            placeholder="Rua, número, bairro e cidade"
            error={errors.church_adress?.message}
            className="md:col-span-2"
          />
          <Input
            label="Nome do Padre"
            {...register("priest_name", {
              required: "Nome do padre é obrigatório.",
            })}
            id="priest_name"
            placeholder="Digite o nome do padre responsável"
            error={errors.priest_name?.message}
          />
          <Input
            label="Nome da Paróquia"
            {...register("parish_of_church", {
              required: "Nome da paróquia é obrigatório.",
            })}
            id="parish_of_church"
            placeholder="Digite o nome da paróquia vinculada"
            error={errors.parish_of_church?.message}
          />
          <div className="flex flex-col-reverse sm:flex-row gap-2 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/churchs" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar igreja"}
            </Button>
          </div>
        </form>

      </FormSection>
    </FormLayout>
  );
};

export default CreateChurch;


