import "./formulario-evento.css";
import { CampoDeEntrada } from "../campoentrada";
import { CampoDeFormulario } from "../campoformulario";
import { Label } from "../label";
import { TituloFormulario } from "../tituloformulario";
import { Botao } from "../campoentrada/Botao";
import { ListaSuspensas } from "../ListaSuspensa";

export function FormularioDeEventos({ temas, aoSumbmeter }) {
  function aoFormSubmit(formData) {
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataevento")),
      titulo: formData.get("nomeEvento"),
    };
    aoSumbmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmit}>
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
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="http://..."
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataevento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataevento" name="dataevento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensas id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
