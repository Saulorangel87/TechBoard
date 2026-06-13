import "./formulario-evento.css";
import { CampoDeEntrada } from "../campoentrada";
import { CampoDeFormulario } from "../campoformulario";
import { Label } from "../label";
import { TituloFormulario } from "../tituloformulario";

export function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um novo evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual é o nome do evento?</Label>
        <CampoDeEntrada
          type="text"
          id="nome"
          placeholder="Summer dev hits"
          name="nomeEvento"
        />
      </CampoDeFormulario>
    </form>
  );
}
