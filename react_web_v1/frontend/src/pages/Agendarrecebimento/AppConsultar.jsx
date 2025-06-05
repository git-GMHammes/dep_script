import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import HformInputTextLetters from "../../components/HForm/HformInputTextLetters";
import HformInputTextMask from "../../components/HForm/HformInputTextMask";
import HformInputTextNumber from "../../components/HForm/HformInputTextNumber";

export default function AppConsultar() {
  // Inicializa o hook do formulário
  const methods = useForm({
    mode: "onTouched", // pode ajustar para "onChange", "onSubmit", etc.
    defaultValues: {
      nome: "",
      telefone: "",
      cpf: "",
      idade: "",
      valor: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title mb-4">Consultar Dados</h3>
              {/* FormProvider precisa envolver o form */}
              <FormProvider {...methods}>
                <form className="was-validated" onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
                  <HformInputTextLetters
                    name="nome"
                    label="Nome Completo"
                    required
                    tipoTexto="Nome"
                    maxLength={80}
                    autoFocus
                  />

                  <HformInputTextMask
                    name="telefone"
                    label="Telefone Celular"
                    tipoMask="TelefoneCelular"
                    required
                  />

                  <HformInputTextMask
                    name="cpf"
                    label="CPF"
                    tipoMask="CPF"
                    required
                  />

                  <HformInputTextNumber
                    name="idade"
                    label="Idade"
                    tipoNumero="Inteiro"
                    required
                    maxLength={3}
                    minLength={1}
                  />

                  <HformInputTextNumber
                    name="valor"
                    label="Valor Monetário"
                    tipoNumero="Monetario"
                    required
                  />

                  <button type="submit" className="btn btn-primary mt-3 w-100">
                    Consultar
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}