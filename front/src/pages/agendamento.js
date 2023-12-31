import ModalConfirmacao from '../components/modal/modalConfirmacao';
import { useState, useEffect, useContext } from 'react';
import RestApiService from '../services/restApiService';
import { PacienteContext } from '../Contexts';

function Agendamento() {
    const [dentistas, setDentistas] = useState([]);
    const [idDentista, setIdDentista] = useState("");

    const [especialidades, setEspecialidades] = useState([]);
    const [idEspecialidade, setIdEspecialidade] = useState("");

    const [idPaciente, setIdPaciente] = useContext(PacienteContext);

    // if (idPaciente === null || idPaciente === "")
    //     throw new Error("Agendamento - idPaciente não encontrado.");

    useEffect(() => {
        async function getAllDentistas() {
            const api = new RestApiService('http://localhost:8000/dentistas');
            let response = await api.getAllAsync();
            setDentistas(response);
            setIdDentista(response[0]._id);
        }
        async function getAllEspecialidades() {
            const api = new RestApiService('http://localhost:8000/especialidades');
            let response = await api.getAllAsync();
            setEspecialidades(response);
            setIdEspecialidade(response[0]._id);
        }
        getAllDentistas();
        getAllEspecialidades();
    }, []);

    const handleChange = (event) => {
        setIdDentista(event.target.value);
    };

    // funcao que faz a mmudanca na entidade especialidade
    const tratarMudancaEspecialidade = (event) => {
        setIdEspecialidade(event.target.value);
    };

    return (
        <>
            <span>o paciente é {idPaciente}</span>
            <div className="col p-5 overflow-auto h-1000">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h1>Agendamento</h1>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <h2>Selecione o seu Dentista:</h2>
                        </div>
                        <div className="seletor">
                            <select className="form-select" aria-label="Default select example" value={idDentista} onChange={handleChange}>
                                {dentistas.map((d, i) => (<option key={i} value={d._id}>{d.nome}</option>))}
                            </select>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Escolha seu procedimento:</h2>
                    </div>
                    <select className="form-select" aria-label="Default select example" value={idEspecialidade} onChange={tratarMudancaEspecialidade}>
                        {especialidades.map((e, i) => (<option key={i} value={e._id}>{e.descricao}</option>))}
                    </select>
                    
                </div>
                <br></br>
                
                <ModalConfirmacao dados={{ idEspecialidade, idDentista, idPaciente }}/>
            </div>
        </>
    );
}
export default Agendamento;