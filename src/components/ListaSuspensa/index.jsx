import "./Lista-suspensa.css";

export function ListaSuspensas ({ itens, ...rest }) {

  return (
    <select {...rest} className='lista-suspensa' defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
