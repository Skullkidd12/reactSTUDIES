/*function colocarBoloblo() {
  let root = document.querySelector("#root");
  let novop = document.createElement("p");
  novop.innerHTML = "BOLOLO";
  root.append(novop);
}
colocarBoloblo();*/

/*ReactDOM.render(
  <ul>
    <li>uma</li>
    <li>duas</li>
    <li>tres</li>
  </ul>,
  document.querySelector("#root")
);*/

//ReactDOM.RENDER//

/*function Bololo() {
  return <input className="btn" type="button" value="valor" />;
}
ReactDOM.render(<Bololo />, document.querySelector("#root"));
*/

/*const h1 = document.createElement("h1");
h1.textContent = "imperativo";
h1.className = "imperativoClass";

document.querySelector("#root").append(h1);*/

/*const gay = (
  <h1 className="chamada" id="chamada">
    isso é JSX
  </h1>
);

ReactDOM.render(gay, document.querySelector("#root"));*/

const root = document.querySelector("#root");
const navBar = (
  <nav>
    <h1>SITE MALUCO</h1>
    <ul>
      <li> Pricing </li>
      <li> About </li>
      <li> Contact </li>
    </ul>
  </nav>
);

ReactDOM.render(navBar, root);
