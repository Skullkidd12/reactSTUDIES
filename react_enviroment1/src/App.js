import "./App.css";

let Dados = true;
const EU = () => {
  if (Dados == true) {
    return (
      <>
        <h1> Nome: Renan</h1>
        <h1> Sobrenome: Araujo</h1>
        <h2> Idade: 24</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>Usuario nao cadastrado</h1>
      </>
    );
  }
};

const App = () => {
  return (
    <div className="App">
      <p> dados do usuário: </p>
      <EU />
      <EU />
      <EU />
      <EU />
    </div>
  );
};

export default App;
