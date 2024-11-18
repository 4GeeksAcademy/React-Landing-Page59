// Paso 1: importar react 
import React from 'react'; 



// Paso 2 crear el componente jsx (funcion)
function Navbar () {
  return(
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Mi Sitio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto.</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  
   )
  
}


  // Paso 3 exportar el componente

  export default Navbar