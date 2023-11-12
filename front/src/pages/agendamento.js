import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Agendamento() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                </div>
                <Button variant="primary" onClick={handleShow}>
                    Busacar Horário
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Agendar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        </>
    );
}
export default Agendamento;