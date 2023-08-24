import './App.css'
import DatosCuenta from './components/DatosCuenta';
import Formulario from './components/Formulario'
import InstalarMetamask from './components/InstalarMetamask';
import Nav from './components/Nav'
import React, {useState, useEffect} from 'react';
import smartContractRegistro from "./smartContract/registro.json";
import Swal from 'sweetalert2'
import withReactContent from 'react-sweetalert2';
import Web3 from "web3";
import ListaRegistro from './components/ListarRegistro';

function App() {

  console.log(smartContractRegistro);

const [Metamask, setMetamask] = useState(false);

const [web3, setWeb3] = useState(null);
const [account, setAccount] = useState(null);
const [balance, setBalance] = useState(null);
const [contract, setContract] = useState(null);
const [buttonWallet, setButtonWallet] = useState(false);
const [listarInformacionEstudios, setListarInformacionEstudios] = useState([]);

const MySwal = withReactContent(Swal)

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
      setButtonWallet(false);

      const contractInstance = new web3Instance.eth.Contract(
        smartContractRegistro,
        smartContractRegistro && "0x34D44DBc2c73B0eCb4bC738bfB850f92AaB89ae2"
      );
       //Creamos una instancia
      setContract(contractInstance);
      // console.log("contractInstance ==> ", contractInstance);
      

    }catch(error){
      console.error(error);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Has rechazado la solicitud de conexión con tu wallet'
      });
    }
  } else{
    setMetamask(false);
  }
  console.log("Conectar wallet");
};

const ListarRegistros = async () => {
  // console.log("contract==>",contract);
  if (contract) {
    try {
      const contadorRegistros = await contract.methods.registroCounter().call();

      let arrayEstudio = [];
      for (let i = 1; i <= contadorRegistros; i++) {
        const inforestudio = await contract.methods.estudios(i).call();
        if (inforestudio.categoria != " ") {
          const estudio = {
            categoria: inforestudio.categoria,
            creatAtl: inforestudio.creatAtl,
            fechaFin: inforestudio.fechaFin,
            fechaInicio: inforestudio.fechaInicio,
            id: inforestudio.id,
            lugarDeFormacion: inforestudio.lugarDeFormacion,
            tituloEstudio: inforestudio.tituloEstudio,
            verificacion: inforestudio.verificacion
          };
          arrayEstudio.push(estudio);
        };
      };

      console.log(arrayEstudio);

      setListarInformacionEstudios(arrayEstudio);

    } catch (error) {
      console.error('Error al actualizar el valor:', error);
    }
  }
};

useEffect(() => {ListarRegistros(); }, [contract]);

 // Validar que en el navegador del usuario esté la extensión de metamask y el resultado se pasa al useState: setMetamask
useEffect(()=>{
  async function wallet(){
    if(typeof window.ethereum !== 'undefined'){
      setMetamask(true);
      setButtonWallet(true);
    };
  };
  wallet();
}, []);

  return (
    <div>
   {
      Metamask ?(
      <>
        <Nav conectarwallet = {conectarWallet}/>
        <Formulario direccion={account} contrato={contract}/>
        <DatosCuenta cuenta = {account} balance = {balance}/>
        <ListaRegistro listarInformacion={listarInformacionEstudios}/>
      </>
      ):(
        <InstalarMetamask />
      )

    }
        </div>
  )
}

export default App
