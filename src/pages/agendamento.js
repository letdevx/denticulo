function Agendamento(){
    return(
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
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione o seu Dentista</option>
                            <option value="1">Dr.petrucio</option>
                            <option value="2">Dr. marisa</option>
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
                <select class="form-select" aria-label="Default select example">
                            <option selected>consulta</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                </select>
                <br></br>
                <button type="button" class="btn btn-success">Buscar horario</button>
            </div>
        </div>

    );
}
export default Agendamento;