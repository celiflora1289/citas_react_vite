//segundo componente 
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    //el states se declara dentro del componente pero antes del return. Y el state que vamos a definir aqui va estar solo en formulario y desde se vera como 
    //podemos usarlo en otro lado
    const [nombre, setNombre] = useState(''); // el use estates siempre nos va a retorna una variable  y una funcion
    // console.log(nombre);
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setfecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false); // esto es para la alerta y mostrar que los campos no estan llenos

    
    useEffect(()=>{
      if( Object.keys(paciente).length>0){// es una forma de comprobar si un objeto tiene algo y es una forma de comprovar si viene vacio o no
        //console.log(paciente)
        setNombre(paciente.nombre)// aqui en este componenye se llena cuando le damos editar se llena el formulario
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setfecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
    }, [paciente])

    const generarId = () =>{
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)

      return random + fecha
    }
   
    const handleSubmit = (e) => {
      e.preventDefault();
      //VALIDACION DEL FORMULARIO
      if([nombre, propietario, email, fecha, sintomas].includes('')){
          console.log('Hay al menos un campo vacio')
          setError(true)
          return;
      }
      setError(false)
     // console.log('Enviando formulario')
     //construir un objeto de paciente
     const objetoPaciente={
      nombre,
      propietario,
      email,
      fecha, 
      sintomas
     }

     if(paciente.id){
       //Editando paciente
       objetoPaciente.id=paciente.id
       const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados);
        setPaciente({})
     }else{
       //nUEVO registro
      objetoPaciente.id = generarId();
      //setPacientes(objetoPaciente) // tomar una copia delo que hay en el state y ponerlo en el objeto de paciente y nos vamos a APP.jsx
      setPacientes([...pacientes, objetoPaciente]);// metodo imutable que nos genra un nuevo arreglo, //agregamos los registros y despues 
     }
    
    //reseteamos los states con el set
    //REinicia el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setfecha('')
    setSintomas('')


    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

          <form
              onSubmit={handleSubmit} 
              className="bg-white shadow-md rounded-lg py-10 px-5">

            {error && <Error >'Todos los campos son obligatorios'</Error>}  
            
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
              <input 
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
              value={nombre} //aqui metemos el nombre que es la variable de usestate
              onChange={ (e) => setNombre(e.target.value) }//onChange Cada que el onchange se registre va a ir escribiendo en el state de nombre osea la variable, con la funcion modificadora setNombre
              />
            </div>


            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
              
              <input 
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
              value={propietario} 
              onChange={ (e) => setPropietario(e.target.value) }
              />
            </div>

            
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email </label>
              
              <input 
              id="email"
              type="email"
              placeholder="Email contacto propietario"
              className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
              value={email} 
              onChange={ (e) => setEmail(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta </label>
              
              <input 
              id="alta"
              type="date"
              className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
              value={fecha} 
              onChange={ (e) => setfecha(e.target.value) }
              />
            </div>


            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Sintomas </label>
              <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas" 
              value={sintomas} 
              onChange={ (e) => setSintomas(e.target.value) }
              />
            </div>

            <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={paciente.id ? 'Editar paciente' : 'agregar paciente'}
            ></input>  
              
          </form>
    </div>
  )
}

export default Formulario
