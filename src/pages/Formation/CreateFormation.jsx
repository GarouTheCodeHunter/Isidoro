import React, { useState, useEffect } from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useNavigate } from "react-router-dom";

const CreateFormation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [churches, setChurches] = useState([]);

  // MOCK: Usuário logado
  const currentUser = {
    role: 'coordenador',
    church_id: 1
  };
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      church_id: currentUser.role !== 'operador' ? currentUser.church_id : ""
    }
  });

  // Se não for operador, travar a igreja do usuário
  useEffect(() => {
    if (currentUser.role !== 'operador') {
      setValue("church_id", currentUser.church_id);
    }
  }, [currentUser, setValue]);

  // Busca igrejas ao carregar
  useEffect(() => {
    // const fetchChurches = async () => { /* ... */ };
    // fetchChurches();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Creating formation with data:", data);
      // await api.post('/formations', data);
      // navigate('/formations');
    } catch (error) {
      console.error("Erro ao criar formação", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout>
      <PageHeader
        title="Nova Formação"
        description="Cadastre uma nova formação vinculada a uma igreja específica."
      />
      <FormSection
        icon={BookOpenIcon}
        title="Dados da Formação"
        description="Preencha as informações sobre o curso ou encontro."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Input
            label="Título da Formação"
            {...register("title", { required: "O título é obrigatório." })}
            id="title"
            placeholder="Ex: Teologia para Catequistas"
            error={errors.title?.message}
            className="md:col-span-2"
          />

          <Select
            label="Igreja Sede"
            {...register("church_id", { required: "Selecione uma igreja." })}
            id="church_id"
            options={[
              { value: "", label: "Selecione uma igreja" },
              // Virá da API
            ]}
            error={errors.church_id?.message}
          />

          <Input
            label="Data da Formação"
            type="date"
            {...register("date", { required: "A data é obrigatória." })}
            id="date"
            error={errors.date?.message}
          />

          <Input
            label="Instrutor / Palestrante"
            {...register("instructor", { required: "O nome do instrutor é obrigatório." })}
            id="instructor"
            placeholder="Digite o nome do responsável"
            error={errors.instructor?.message}
          />

          <Input
            label="Carga Horária"
            {...register("duration")}
            id="duration"
            placeholder="Ex: 20h"
            error={errors.duration?.message}
          />

          <Select
            label="Status Inicial"
            {...register("status", { required: "O status é obrigatório." })}
            id="status"
            options={[
              { value: "Inscrições Abertas", label: "Inscrições Abertas" },
              { value: "Em andamento", label: "Em andamento" },
              { value: "Concluído", label: "Concluído" },
            ]}
            error={errors.status?.message}
          />

          <div className="flex flex-col-reverse sm:flex-row gap-2 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/formations" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Criando..." : "Criar Formação"}
            </Button>
          </div>
        </form>
      </FormSection>
    </FormLayout>
  );
};

export default CreateFormation;
