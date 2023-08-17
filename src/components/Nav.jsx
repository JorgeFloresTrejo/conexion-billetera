import React from 'react'
import './index.css'


function Nav(props) {

  return (
    <>
      <nav>
        <div><h2>Blockchaininverse</h2></div>
         <button onClick={props.conectarwallet}>Connect wallet</button>
      </nav>
    </>
  )
}

export default Nav
