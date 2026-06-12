import "./App.css";

function FormularioDeEvenetos() {

  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">
          Qual é o nome do evento?
        </label>
        <input type="text" id="nome" placeholder="Summer dev hits"/>
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <section>
        <img src="/banner.png" alt="banner" />
      </section>
      <FormularioDeEvenetos />
    </main>
  );
}

export default App;
