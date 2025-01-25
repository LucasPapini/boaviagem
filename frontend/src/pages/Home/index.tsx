import { useEffect, useState } from "react";

import * as H from "./styles";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Loader from "../../components/Loader";
import CardList from "../../components/Card/CardList";
import CustomModal from "../../components/CustomModal";


import useGetListAPI from '../../hooks/service/useGetListAPI';
import usePostRouter from '../../hooks/service/usePostRouter';

import { ToastContainer, toast } from 'react-toastify';
import { AirplaneTilt, XCircle } from "@phosphor-icons/react";
import Input from "../../components/Input";

export function Home() {
  const [roteiro, setRoteiro] = useState({
    origem: [],
    destino: []
  });

  const [form, setForm] = useState({
    origem: "",
    destino: "",
  });

  const [formCadastro, setFormCadastro] = useState({
    origem: "",
    destino: "",
    valor: ""
  });

  const [loading, setLoading] = useState(false);

  const [rotaNaoCadastrada, setRotaNaoCadastrada] = useState(false);

  const [rotasDisponiveis, setRotasDisponiveis] = useState([]);

  const { listaAeropostos,
    listaRotas } = useGetListAPI();
  const { sendRouter, create } = usePostRouter();

  const showToastError = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);

      if (!form.origem || !form.destino) {
        showToastError('Os campos origem e destino são obrigatórios.');
        return;
      }

      const enviaRota = await sendRouter(form);
      setRotasDisponiveis(enviaRota)

    } catch (error) {
      setRotaNaoCadastrada(true);
      showToastError(`Error: ${error?.response?.data[0]?.error}`)
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  const handleSetValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "destino" && value === form.origem) {
      showToastError('Você não pode selecionar a mesma origem e destino!');
      return;
    }

    if (name === "origem" && value === form.destino) {
      showToastError('Você não pode selecionar a mesma origem e destino!');
      return;
    }
    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleGetListOptionsAPI = async () => {
    try {
      setLoading(true);
      const origem = await listaAeropostos();
      const destino = await listaRotas();
      setRoteiro({
        ...roteiro,
        origem,
        destino
      })
    } catch (error) {
      toast.error(`Error: ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    } finally {
      setLoading(false);
    }
  }

  /**
   * PARA CADASTAR NOVA ROTA
   * @param event
   * @returns
   */
  const handleMontarObjParaEnvioDeNovaRota = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    if (!name || !value) {
      showToastError('Campos vazios, verifique o formulário novamente.');
      return;
    }

    setFormCadastro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      if (!formCadastro.origem || !formCadastro.destino || !formCadastro.valor) {
        showToastError("Todos os campos devem ser preenchidos.");
        return;
      }

      const newRouter = await create(formCadastro);

      console.log("newRouter: ", newRouter);

      if (newRouter.length > 0) {
        setRotaNaoCadastrada(false);
        toast.success(`${newRouter[0]?.mensagem}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        })
      }
    } catch (error) {
      toast.error(`Error: ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  /**
   * FIM
   */

  useEffect(() => {
    handleGetListOptionsAPI();
  }, []);

  return (
    <H.HomeContainer>
      <ToastContainer />
      {loading && <Loader message={""} />}

      <Card>
        <div className="titulo__row_card">
          <h4>Selecione a rota da sua viagem</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <H.HomeRowCard>
            <Select
              options={roteiro?.origem}
              value={form.origem}
              title={"Origem"}
              name="origem"
              onChange={handleSetValueInput}
            />

            <Select
              options={roteiro?.destino}
              value={form.destino}
              title={"Destino"}
              name="destino"
              onChange={handleSetValueInput}
            />
          </H.HomeRowCard>
          <div className="button__row_card">
            <Button
              title="Buscar"
              type="submit"
            />
          </div>
        </form>
      </Card>

      {rotasDisponiveis.length > 0 && (
        <H.HomeRowCardList>
          {rotasDisponiveis.map((item, index) => (
            <CardList key={index}>
              <AirplaneTilt size={32} color="#7E7E7E" />
              <p>
                <strong>
                  {item?.path.join(" → ")}
                </strong>
              </p>
              <p>Custo: ${item.cost}</p>
            </CardList>
          ))}
        </H.HomeRowCardList>
      )}

      {rotaNaoCadastrada && (<>
        <CustomModal
          isOpen={rotaNaoCadastrada}
          onRequestClose={() => setRotaNaoCadastrada(false)}
        >
          <div className="header">
            <button onClick={() => setRotaNaoCadastrada(false)} >
              <XCircle size={32} color="#ff0000" />
            </button>
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className="body">
              <h3>Realize o cadastro da rota não localizada preenchendo os campos abaixo:</h3>
              <span>Somento o valor da viagem!</span>

              <label>Origem</label>
              <Input
                type="text"
                placeholder="Origem, Ex: CDG"
                value={formCadastro?.origem || ""}
                name="origem"
                onChange={handleMontarObjParaEnvioDeNovaRota}
              />
              {/** Mantenho o historico da rota que não foi localizada*/}
              {form?.origem && <p className="historic">Origem anterior: {form?.origem}</p>}

              <label>Destino</label>
              <Input
                type="text"
                placeholder="Destino, EX: SCL"
                value={formCadastro?.destino || ""}
                name="destino"
                onChange={handleMontarObjParaEnvioDeNovaRota}
              />
              {/** Mantenho o historico da rota que não foi localizada*/}
              {form?.destino && <p className="historic">Destino anterior: {form?.destino}</p>}

              <label>Valor</label>
              <Input
                type="text"
                placeholder="EX: 15"
                value={formCadastro?.valor || ""}
                name="valor"
                onChange={handleMontarObjParaEnvioDeNovaRota}
              />
            </div>

            <div className="footer">
              <button className="cancelar" onClick={() => setRotaNaoCadastrada(false)}>Cancelar</button>
              <button className="cadastrar">Cadastrar</button>
            </div>
          </form>
        </CustomModal>
      </>)
      }
    </H.HomeContainer >
  );
}
