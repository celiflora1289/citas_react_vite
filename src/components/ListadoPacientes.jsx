//tercer componente
//import {useEffect} from 'react'
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

 /* useEffect(()=>{
    if(pacientes.length>0){
      console.log('Nuevo paciente')
    }
  },[pacientes])*/
 // console.log(pacientes && pacientes.length)

    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
        <>
        
        {pacientes.map(paciente=>(//siempre que vamos a tener un listado hay que tener un key, pero es una mala paractica en react
             <Paciente
              key={paciente.id}
             paciente={paciente}
             setPaciente={setPaciente}
             eliminarPaciente ={eliminarPaciente}
             />
        ))} 
        </>
        ):(
          <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
            </p>
          </>
        )}

        
      </div>
    )
  }
  
  export default ListadoPacientes