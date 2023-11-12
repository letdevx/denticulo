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
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      Corpinho da modal
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
