import './App.css'
import DatosCuenta from './components/DatosCuenta';
import Formulario from './components/Formulario'
import InstalarMetamask from './components/InstalarMetamask';
import Nav from './components/Nav'
import React, {useState, useEffect} from 'react';
import smartContractRegistro from "./smartContract/registro.json";
import Web3 from "web3";

function App() {

  console.log(smartContractRegistro);

const [Metamask, setMetamask] = useState(false);

const [web3, setWeb3] = useState(null);
const [account, setAccount] = useState(null);
const [balance, setBalance] = useState(null)
const [contract, setContract] = useState(null);

const conectarWallet = async () => {
  if(typeof window.ethereum !== 'undefined'){
    // Instancia de la web 3 y se le pasa al useState: setWeb3
    const web3Instance = new Web3(window.ethereum);
    setWeb3(web3Instance);

    try{
      await window.ethereum.enable();

      //Obtener la dirección de la cuenta actual
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts);

      //Obtener el saldo de la cuenta, a getBalance(accounts[0]) se le pasa como parametro la dirección de la cuenta
      const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
      console.log(balanceWei);
      //Representar el saldo de la cuenta en Wei
      const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether');
      setBalance(balanceEth);

      const contractInstance = new web3Instance.eth.Contract(
        smartContractRegistro,
        smartContractRegistro && "0x34D44DBc2c73B0eCb4bC738bfB850f92AaB89ae2"
      );
       //Creamos una instancia
      setContract(contractInstance);
      console.log("contractInstance ==> ", contractInstance);
      

    }catch(error){
      console.error(error);
    }
  } else{
    setMetamask(false);
  }
  console.log("Conectar wallet");
}

const ListarRegistros = async () => {
  console.log("contract ==> ", contract);
  if(contract){
    try{
      const contadorRegistro = await contract.methods.registroCounter().call();
      console.log("contadorRegistro ==> ", contadorRegistro);
    }catch(error){
      console.error('Error al actualizar el valor');
    }

  }
};

useEffect(() => {ListarRegistros(); }, [contract]);

 // Validar que en el navegador del usuario esté la extensión de metamask y el resultado se pasa al useState: setMetamask
useEffect(()=>{
  async function wallet(){
    if(typeof window.ethereum !== 'undefined'){

      setMetamask(true);

    } else{
      setMetamask(false);
    }
  };
  wallet();
}, []);

  return (
    <div>
   {
      Metamask ?(
      <>
        <Nav conectarwallet = {conectarWallet}/>
        <Formulario />
        <DatosCuenta cuenta = {account} balance = {balance}/>
      </>
      ):(
        <InstalarMetamask />
      )

    }
        </div>
  )
}

export default App
