import React from "react";
import './DatosCuenta.css';
function DatosCuenta(props){

    return(
        <>
        <h1>Datos de la cuenta</h1>
         {/* <div>
            <ul>
                <li>{props.cuenta}</li>
                <li>{props.balance}</li>
            </ul>
         </div> */}

         <table border={1}>
            <thead>
                <tr>
                    <th>Cuenta</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.cuenta}</td>
                    <td>{props.balance}</td>
                </tr>
            </tbody>
         </table>

        </>
    )
}

export default DatosCuenta