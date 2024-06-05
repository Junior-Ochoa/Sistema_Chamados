import { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import InputMask from 'react-input-mask';

import './customers.css'

export default function Customers() {
  const [nome, setNome] = useState("");
  // const [cnpj, setCnpj] = useState("");
  const [tipoPessoa, setTipoPessoa] = useState("");
  const [documento, setDocumento] = useState("");
  const [endereco, setEndereco] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (
      nome !== "" &&
      documento !== "" &&
      tipoPessoa !== "" &&
      endereco !== ""
    ) {
      await addDoc(collection(db, "customers"), {
        nomeFantasia: nome,
        tipoPessoa: tipoPessoa,
        documento: documento,
        endereco: endereco,
      })
        .then(() => {
          setNome("");
          setDocumento("");
          setTipoPessoa("");
          setEndereco("");
          toast.success("Cliente cadastrado");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Erro ao fazer o cadastro");
        });
    } else {
      toast.error("Preencha todos os campos");
    }
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title nome="Adicionar um novo cliente">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Tipo de pessoa</label>
            <select
              type="text"
              placeholder="Selecione..."
              value={tipoPessoa}
              onChange={(e) => {
                setTipoPessoa(e.target.value);
                setDocumento("");
              }}
            >
              <option value="">Selecione...</option>
              <option value="Fisica">Física</option>
              <option value="Juridica">Jurídica</option>
            </select>

            {tipoPessoa === "Juridica" && (
              <div>
                <label>CNPJ</label>
                <InputMask
                  mask="99.999.999/9999-99"
                  type="text"
                  placeholder="Digite o CNPJ"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  className="tipo"
                />
              </div>
            )}

            {tipoPessoa === "Fisica" && (
              <div>
                <label>R.G</label>
                <InputMask
                  mask="99.999.999-9"
                  type="text"
                  placeholder="Digite o R.G"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  className="tipo"
                />
              </div>
            )}

            <label>Endereço</label>
            <input
              type="text"
              placeholder="Digite o endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />

            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
