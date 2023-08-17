import './formulario.css'
import React, {useState} from 'react';


function Formulario() {


    const [datos, setDatos] = useState({
        informacion_lugar: '',
        categoria: '',
        titulo: '',
        fecha_inicio: '',
        fecha_final: ''
    });
    const enviar = (event) => {
        console.log(event.target.name);
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.informacion_lugar] : event.target.value
        })
    }

  return (
     
    <>
      <form>
         <label className='texto-centrado' htmlFor="informacion">Lugar de formación</label>
         <input type="text" required id='informacion' name="informacion"/>
         <br></br>
         <label className='texto-centrado' htmlFor="categoria">Categoría</label>
         <input type="text" id='categoria' name="categoria"/>
         <br></br>
         <label className='texto-centrado' htmlFor="titulo">Título</label>
         <input type="text" id='titulo' name="titulo"/>
         <br></br>
         <label className='texto-centrado' htmlFor="fecha_inicio">Fecha inicio</label>
         <input type="date" id='fecha_inicio' name="fecha_inicio"/>
         <br></br>
         <label className='texto-centrado' htmlFor="fecha_final">Fecha final</label>
         <input type="date" id='fecha_final' name="fecha_final"/>
         <br />
         <br />
         <button type='submit' onSubmit={enviar}> Registrar</button>
      </form>

    </>
  )
}

export default Formulario