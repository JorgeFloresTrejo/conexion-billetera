import './formulario.css'
import React, {useState} from 'react';


function Formulario() {

  const inicialDatos = {
    informacion: '',
    categoria: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: ''
  }


    const [datos, setDatos] = useState(inicialDatos);

    const enviar = (e) => {
      e.preventDefault();


      setDatos(inicialDatos);
      
    }

    const manejarFormulario = ({target: {name, value}})=>{

        setDatos({...datos, [name]: value})

    }

  return (
    <>
      <form onSubmit={enviar}>
         <label className='texto-centrado' htmlFor="informacion">Lugar de formación</label>
         <input type="text"  id='informacion' name="informacion" value={datos.informacion} onChange={manejarFormulario}/>
         {datos.informacion.length >= 8 ? ""  : "Campo requerido"}

         <br></br>
         <label className='texto-centrado' htmlFor="categoria">Categoría</label>
         <input type="text" id='categoria' name="categoria"  value={datos.categoria} onChange={manejarFormulario}/>
         {datos.categoria.length >= 8 ? ""  : "Campo requerido"}

         <br></br>
         <label className='texto-centrado' htmlFor="titulo">Título</label>
         <input type="text" id='titulo' name="titulo" value={datos.titulo} onChange={manejarFormulario}/>
         {datos.titulo.length  >= 8 ? ""  : "Campo requerido"}

         <br></br>
         <label className='texto-centrado' htmlFor="fecha_inicio">Fecha inicio</label>
         <input type="date" id='fecha_inicio' name="fecha_inicio" value={datos.fecha_inicio} onChange={manejarFormulario}/>
         {datos.fecha_inicio.length >= 8 ? ""  : "Campo requerido"}

         <br></br>
         <label className='texto-centrado' htmlFor="fecha_final">Fecha final</label>
         <input type="date" id='fecha_final' name="fecha_final" value={datos.fecha_final} onChange={manejarFormulario}/>
         {datos.fecha_final.length >= 8 ? ""  : "Campo requerido"}

         <br />
         <br />
         
         <button> Registrar</button>
      </form>

    </>
  )
}

export default Formulario