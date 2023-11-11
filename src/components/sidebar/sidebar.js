import { Link } from "react-router-dom";
import logo from './dente.png'
import "./sidebar.css"

function Sidebar(){
    return (
        <div className="d-flex" id="wrapper">
          {/* Barra lateral */}
          <nav className="col-md-2  d-md-block bg-dark sidebar">
            <div className="sidebar-sticky align-items-center">
              <div>
                <img className="logo-dente" src={logo}/>
              </div>  
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="agendameto">
                    <span className="mdi mdi-calendar-check"></span>
                    <text>Agendamento</text>
                  </Link>  
                </li>
              </ul>
            </div>
          </nav>
    
          {/* Conteúdo principal */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {/* Seu conteúdo principal vai aqui */}
            <h1 className="mt-2">Conteúdo Principal</h1>
          </main>
        </div>
      );
    }
  

export default Sidebar; 