import './header.css'

function AppHeader() {
    return (
      <header className="container-fluid d-flex justify-content-end App-header"> 
        <div className="d-flex aling-items-center">
            <div>
                <span className="d-block m-0 p-9 text-white"> consultorio</span>
                <small className="m-0 p-0"> plano</small>
            </div>
            <span className="mdi mdi-chevron-down"></span>
            <img src='https://sorrisologia.com.br/documents/37259750/37287069/15627-mais-do-que-tratar-do-seu-sorriso-o-den-slider_medias-2.jpg/186392e9-1639-b3ba-2d73-c1cd82a4608a?t=1622581613231'/>
            <span className='mdo mdi-chevron-down text-white'></span>
        </div>
      </header>
    );
  }
  export default AppHeader;