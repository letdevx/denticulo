import './App.css';
import AppHeader from './components/header/header.js';
import {Routes, Route} from 'react-router-dom'
import Agendamento from './pages/agendamento';
import Cadastro from './pages/cadastro';
import Confirmacao from './pages/confirmacao';
import Painel from './pages/painel';
import CadastroHorario from'./pages/cadastroHorario';

function App() {
  let teste;

  if (true) {
    teste = <AppHeader/>;
  }
  else {
    teste = <></>
  }

  return (
    <div className="App">
      {teste}
      <Routes>
        <Route path="/" element={ <Cadastro/> }></Route>
        <Route path="agendamento" element={ <Agendamento/> }></Route>
        <Route path="confirmacao" element={ <Confirmacao/> }></Route>
        <Route path="painel" element={ <Painel/> }></Route>
        <Route path="cadastrohorario" element={ <CadastroHorario/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
