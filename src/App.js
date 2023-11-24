import { Fragment } from "react";
import Header from "./componentes/Header";
import Router from "./rotas";
import Global from "./styles/Global";

function App() {
  return (
    <Fragment>
      <Global />
      <Header />
      <Router />  
    </Fragment>
      )
}

export default App;
