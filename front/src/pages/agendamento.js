import ModalConfirmacao from '../components/modal/modalConfirmacao';
import { useState, useEffect } from 'react';
import RestApiService from '../services/restApiService';

function Agendamento() {
    const [dentistas, setDentistas] = useState([]);
    const [dentista, setDentista] = useState({});

    useEffect(() => {
        async function getAllDentistas() {
            const api = new RestApiService('http://localhost:8000/dentistas');
            let response = await api.getAllAsync();
            setDentistas(response);
            setDentista(response[0]);
        }
        getAllDentistas();
    }, []);

    const handleChange = (event) => {
        setDentista(event.target.value);
    };
    
    return (
        <>
            <div className="col p-5 overflow-auto h-100">
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
                            <select className="form-select" aria-label="Default select example" value={dentista._id || ""} onChange={handleChange}>
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
                    <select className="form-select" aria-label="Default select example">
                        <option value="0">consulta</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <br></br>
                </div>
                

                <ModalConfirmacao/>
            </div>

        </>
    );
}
export default Agendamento;