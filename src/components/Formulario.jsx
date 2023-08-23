import './formulario.css'
import React, {useState} from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'react-sweetalert2'


function Formulario(props) {

  const MySwal = withReactContent(Swal);

  const inicialDatos = {
    informacion: '',
    categoria: '',
    titulo: '',
    fecha_inicio: '',
    fecha_final: ''
  }


    const [datos, setDatos] = useState(inicialDatos);

    const enviar = async (e) => {
      e.preventDefault();

      // llamamos a nuestro smart contract y utilizamos el metodo/Function para crear nuestra tarea "crearRegistro"
      try{
        const result = await props.contract.methods.crearRegistro(
          datos.informacion,
          datos.categoria,
          datos.titulo,
          datos.fecha_inicio,
          datos.fecha_final
        ).send({from:props.account});

        if(result.status){
          MySwal.fire(
            {
              position: 'top-end',
              icon: 'success',
              title: 'Tu registro fue exito',
              showConfirmButton: false,
              timer: 2500
            }
          )

          setDatos(inicialDatos);
        }
        else{
          errorTransacion();
        }

      }catch(error){
        errorTransacion();
      }
    };

    const errorTransacion = () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡La transacción no fue completa, vuelve a intentar más tarde!!'
      })
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