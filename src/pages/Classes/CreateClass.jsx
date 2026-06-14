import React, { useState, useEffect } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import PageHeader from "../../components/ui/PageHeader";
import FormSection from "../../components/ui/FormSection";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import FormLayout from "../../components/ui/FormLayout";
import { useNavigate } from "react-router-dom";

const CreateClass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [churches, setChurches] = useState([]);
  const [catechists, setCatechists] = useState([]);

  // MOCK: Usuário logado
  const currentUser = {
    role: 'coordenador', // Se for coordenador, a igreja já vem travada
    church_id: 1,
    church_name: 'Matriz Santo Antônio'
  };
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      church_id: currentUser.role !== 'operador' ? currentUser.church_id : ""
    }
  });

  const selectedChurch = watch("church_id");

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

  // Busca catequistas quando a igreja é selecionada
  useEffect(() => {
    if (selectedChurch) {
      console.log("Fetching catechists for church ID:", selectedChurch);
      // const fetchCatechists = async () => { /* ... */ };
      // fetchCatechists();
    } else {
      setCatechists([]);
    }
  }, [selectedChurch]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Creating class with data:", data);
      // await api.post('/classes', data);
      // navigate('/classes');
    } catch (error) {
      console.error("Erro ao criar turma", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout>
      <PageHeader
        title="Nova Turma"
        description="Cadastre uma nova turma vinculada a uma igreja e seus catequistas."
      />
      <FormSection
        icon={UserGroupIcon}
        title="Dados da Turma"
        description="Defina o nome, a igreja sede e os responsáveis."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Input
            label="Nome da Turma"
            {...register("name", { required: "Nome da turma é obrigatório." })}
            id="name"
            placeholder="Ex: Crisma 2024 - Tarde"
            error={errors.name?.message}
            className="md:col-span-2"
          />

          <Select
            label="Igreja"
            {...register("church_id", { required: "Selecione uma igreja." })}
            id="church_id"
            options={[
              { value: "", label: "Selecione uma igreja" },
              // Virá da API
            ]}
            error={errors.church_id?.message}
          />

          <Select
            label="Catequista Responsável"
            {...register("catechist_id", { required: "Selecione um catequista." })}
            id="catechist_id"
            disabled={!selectedChurch}
            options={[
              { value: "", label: selectedChurch ? "Selecione um catequista" : "Selecione uma igreja primeiro" },
              // Virá da API filtrado por igreja
            ]}
            error={errors.catechist_id?.message}
          />

          <div className="flex flex-col-reverse sm:flex-row gap-2 items-center w-full justify-end md:col-span-2 mt-4">
            <Button variant="secondary" to="/classes" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Criando..." : "Criar Turma"}
            </Button>
          </div>
        </form>
      </FormSection>
    </FormLayout>
  );
};

export default CreateClass;
