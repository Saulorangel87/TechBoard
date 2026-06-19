import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioDeEventos } from "./components/formularioevento";
import { Tema } from "./components/Tema";

const CHAVE_STORAGE = "techboard:eventos";

const eventosPadrao = [
  {
    capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
    tema: { id: 1, nome: "front-end" },
    data: new Date(),
    titulo: "Mulheres no Front",
  },
];

function carregarEventosSalvos() {
  const eventosSalvos = localStorage.getItem(CHAVE_STORAGE);

  if (!eventosSalvos) {
    return eventosPadrao;
  }

  try {
    const eventos = JSON.parse(eventosSalvos);
    // O JSON não guarda objetos Date, então reconvertemos a string de volta
    return eventos.map(function (evento) {
      return { ...evento, data: new Date(evento.data) };
    });
  } catch {
    return eventosPadrao;
  }
}

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência Artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState(carregarEventosSalvos);

  useEffect(function () {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(eventos));
  }, [eventos]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <Banner />
      <FormularioDeEventos temas={temas} aoSumbmeter={adicionarEvento} />
      <section className="container">
        {temas.map(function (tema) {
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos.filter(function (evento) {
                  return evento.tema.id == tema.id
                })
                .map(function (evento, indice) {
                  return <CardEvento evento={evento} key={indice} />
                })}
              </div>
            </section>
          )
        })}
      </section>

      {/* <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  );
}

export default App;
