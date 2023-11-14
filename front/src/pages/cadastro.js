import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dente from "../assets/gravura.png"
import "./cadastro.css"

const Cadastro = () => {
    return (
        <div className="container-fluid h-100 bg-primary">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-6  text-left my-auto">
                    <img className="ilustracao" src={Dente} alt="dente" />
                </div>
                <Form className="col-6">
                    <div className="box col-8">
                        <div>
                            <h2 className= "text-center">Odontologia</h2>
                            <h4 className= "text-center"> É hora de cuidar do seu sorriso </h4>
                        </div>
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome completo</Form.Label>
                            <Form.Control type="text" placeholder="Nome completo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formTelefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="email" placeholder="Telefone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF" />
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Agende sua consulta
                        </Button>
                    </div>
                </Form>
            </div>
            <br/>
        </div>
    )
};
export default Cadastro;