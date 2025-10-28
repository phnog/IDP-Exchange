import React, { useState } from "react";

interface Formulario {
  nome: string;
  curso: string;
  telefone: string;
  email: string;
}

interface FormPageProps {
  formulario: Formulario;
  onFormChange: (form: Formulario) => void;
}

const FormPage: React.FC<FormPageProps> = ({ formulario, onFormChange }) => {
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  function formatarTelefone(value: string) {
    const numeros = value.replace(/\D/g, "");
    if (numeros.length <= 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trimEnd();
    } else {
      return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trimEnd();
    }
  }

  function validarTelefone(value: string) {
    const numeros = value.replace(/\D/g, "");
    if (numeros.length < 10 || numeros.length > 11) {
      setErroTelefone("Telefone inválido. Use 10 ou 11 dígitos.");
    } else {
      setErroTelefone("");
    }
  }

  function validarEmail(value: string) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(value)) {
      setErroEmail("E-mail inválido.");
    } else {
      setErroEmail("");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "telefone") {
      const telefoneFormatado = formatarTelefone(value);
      onFormChange({ ...formulario, telefone: telefoneFormatado });
      validarTelefone(telefoneFormatado);
    } else if (name === "email") {
      onFormChange({ ...formulario, email: value });
      validarEmail(value);
    } else {
      onFormChange({ ...formulario, [name]: value });
    }
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    onFormChange({ ...formulario, [name]: value });
  }

  return (
    <React.Fragment>
      <h2>Falta pouco para descobrir seu destino! 🚀</h2>
      <div className="formulario">
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          value={formulario.nome}
          onChange={handleChange}
        />
        <select
          name="curso"
          value={formulario.curso}
          onChange={handleSelectChange}
        >
          <option value="">Selecione um curso</option>
          <option value="direito">Direito</option>
          <option value="irel">Relações Internacionais</option>
          <option value="administracao">Administração</option>
          <option value="economia">Economia</option>
          <option value="publicidade">Publicidade</option>
          <option value="arquitetura">Arquitetura</option>
          <option value="cic">Ciência da Computação (CIC)</option>
          <option value="software">Engenharia de Software</option>
          <option value="psicologia">Psicologia</option>
        </select>

        <input
          type="tel"
          placeholder="Telefone"
          name="telefone"
          value={formulario.telefone}
          onChange={handleChange}
          maxLength={15}
        />
        {erroTelefone && <span style={{ color: "red" }}>{erroTelefone}</span>}
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
        {erroEmail && <span style={{ color: "red" }}>{erroEmail}</span>}
      </div>
    </React.Fragment>
  );
};

export default FormPage;
