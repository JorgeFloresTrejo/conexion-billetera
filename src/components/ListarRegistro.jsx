import React from "react";
import './ListarRegistro.css'

function ListarRegistro(props){

  
 return(
   <div>
      {
        props.listarInformacion.map( elemento =>

            <div key={elemento.id} id="contenedor">
               <p className="informacion"> {elemento.lugarDeFormacion} </p>
               <p className="informacion"> {elemento.categoria} </p>
               <p className="informacion"> {elemento.tituloEstudio} </p>
               <p className="informacion"> {elemento.fechaInicio} </p>
               <p className="informacion"> {elemento.fechaFin} </p>

            </div>
            
        )
     }
   </div>
 )
}

export default ListarRegistro;


















// <div key={elemento.id} id="contenedor">
//         <div className="informacion">
//          <h2>Lugar de formación</h2>
//          {elemento.lugarDeFormacion}     
//         </div>

//         <div className="informacion">
//         <h2>Categoría</h2>
//         {elemento.categoria}
//         </div>

//         <div className="informacion">
//         <h2>Titulo</h2>
//         {elemento.tituloEstudio}
//         </div>
        
//         <div className="informacion">
//         <h2>Fecha inicio</h2>
//         {elemento.fechaInicio}
//         </div>  

//         <div className="informacion">
//         <h2>Fecha fin</h2>
//         {elemento.fechaFin}
//         </div>
        
//     </div>



// import React from 'react'

// function ListaRegistro(props) {

//     const ListarEstudios = props.listarInformacionEstudios.map(item =>
//         <div key={item.id} className="p-2 lg:w-1/4 md:w-1/2">
//             <div className="flex items-center border-gray-200 border p-4 rounded-lg">
//                 {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/> */}
//                 <div className="flex-grow">

//                     <h2 className="text-gray-900 title-font font-medium text-center text-lg mb-8">
//                         {item.lugarDeFormacion}
//                     </h2>

//                     <div className='flex justify-around m-4'>
//                         <h2 className="text-gray-900 title-font font-medium">  {item.categoria} </h2>
//                         <h2 className="text-gray-900 title-font font-medium"> {item.tituloEstudio} </h2>
//                     </div>

//                     <div className='flex justify-around m-2'>
//                         <h2 className="text-gray-900 title-font font-medium"> {item.fechaInicio} </h2>
//                         <h2 className="text-gray-900 title-font font-medium"> {item.fechaFin} </h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );


//     return (
//         <section className="text-gray-600 body-font relative">
//             <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
//                 <div className="flex flex-wrap -m-2">
//                     {ListarEstudios}
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default ListaRegistro;