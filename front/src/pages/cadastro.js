import Dente from "../assets/gravura.png"
import "./cadastro.css"

const Cadastro = () => {
    return (
        <div className = "container-fluid h-100 bg-primary">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-6  text-left my-auto">
                    <img className="ilustracao"src = {Dente}/>
                </div>
                <div className="col-6">
                    <div className="box col-8">
                        <h2 className= "text-center">Odontologia</h2> 
                        <h3 className= "text-center"> É hora de cuidar do seu sorriso </h3>
                        <br></br>
                        <br></br>
                        <input type = "text" className="form-control form-control=lg mb-3" 
                        placeholder="Nome completo"
                        />    
                        <input type= "email" className="fform-control form-control=lg mb-3" 
                        placeholder="Email"
                        />    
                        <input type= "password" className="form-control form-control=lg mb-3" 
                        placeholder="Telefone"
                        /> 
                        <input type= "password" className="form-control form-control=lg mb-3" 
                        placeholder="CPF"
                        /> 
                        <button className="btn btn-lg btn-block btn-secondary">Agende sua consulta</button>             
                    </div>
                </div>
            </div> 
        </div>
    )
}; 
export default Cadastro;