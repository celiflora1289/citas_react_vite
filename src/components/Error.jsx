//rafce
const Error = ({children}) => {// children es un patron muy comun a children se le puede pasar multiples de codigo html dentro del componente Error
  return (
    <div>
         <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                  {children} 
              </div>
      
    </div>
  )
}

export default Error
