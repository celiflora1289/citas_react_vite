import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]); // va a estar lleno de objetos con la informacion de cada paciente
  const [paciente, setPaciente] = useState({});// array objeto vacio

  // Una vez convertido a string estamos ocasionando que pierda lo datos se puede ver en -> aplication-stored y ahi ciene la URL []
  //vacio  y la solucion es: 
  useEffect( () => {
    const obtenerLS = () => { 
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // lo que se que haya obtenido se va a colocar en el storage
      setPacientes(pacientesLS)

    }

  },[])// cuando le pasamos arreglo vacio quiere decir que se ejecute una sola vez 

  useEffect( () => { // de esta manera se pasa un objeto a tipo cadena o string
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) =>{
    //console.log('Eliminando paciente', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes = {setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente ={eliminarPaciente}
          />
        </div>
      </div>
  )
}

export default App
