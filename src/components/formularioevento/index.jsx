import "./formulario-evento.css";
import { CampoDeEntrada } from "../campoentrada";
import { CampoDeFormulario } from "../campoformulario";
import { Label } from "../label";
import { TituloFormulario } from "../tituloformulario";
import { Botao } from "../campoentrada/Botao";
import { ListaSuspensas } from "../ListaSuspensa";

export function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um novo evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual é o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataevento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataevento" name="nomeEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataevento">Data do evento</Label>
          <ListaSuspensas />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
