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
function MainContent() {
  return (<input className="btn"
  type="button"
  value="valor"/>)
}
ReactDOM.render(<MainContent /> , document.querySelector("#root"));

