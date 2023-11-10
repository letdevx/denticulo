import './App.css';
import AppHeader from './components/header/header.js';
import {Routes, Route} from 'react-router-dom'
import Agendamento from './pages/agendamento';
import Cadastro from './pages/cadastro';
import Confirmacao from './pages/confirmacao';
import Painel from './pages/painel';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Routes>
        <Route path="/" element={ <Cadastro/> }></Route>
        <Route path="agendamento" element={ <Agendamento/> }></Route>
        <Route path="confirmacao" element={ <Confirmacao/> }></Route>
        <Route path="painel" element={ <Painel/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
