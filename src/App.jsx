

// usando los hooks
import {useState} from 'react';


//iconos
import { IoMdMenu , IoIosSearch} from "react-icons/io";
import { FaUser , FaPlusCircle } from "react-icons/fa";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";




//COMPONENTE
import Sidebar  from './components/shared/SideBar';


function App() {
 

  //PARTE LOGICA DEL COMPONENTE 



  //USANDO HOOKS DE ESTADO
  //recordando el false se le da showMenu osea la variable
  const [showMenu , setShowMenu]=useState(false);
  const [showOrder , setShowOrder]=useState(false);



  const toogleMenu = () =>{
    setShowMenu(!showMenu);
  }





  //PARTE DEL RENDERIZADO DEL COMPONENTE
  return (

     <div className='bg-[#262837] w-full min-h-screen'>
    

    {/* showMenu={showMenu} : esta dentro de 1 variable */}
    <Sidebar showMenu={showMenu}/>



    {/* menu movil  */}
    {/* notas de tawilwind :
    lg:hidden : apartir del lg tamaño se esconde  */}
<nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tr-xl rounded-tl-xl">
<button className="p-2"><FaUser /></button>
  <button className="p-2"><FaPlusCircle /></button>
  <button className="p-2"><BiSolidCircleThreeQuarter /></button>
  {/* cuando da click aparace el sidebar */}
  <button onClick={toogleMenu} className="text-white  p-2">
    {/* ternario pa mostrar el icono */}
   {showMenu?  <IoCloseCircleOutline />: <IoMdMenu /> } </button>
</nav>



{/* ESCRITORIO  */}
{/* grid-cols-1: son columnas para que se puedan ver ,solo 1 columna  */}
{/* col-span: son para unir colmnas */}

<main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
   <div className='lg:col-span-6 '>
    <header className='p-4'>
      <div>
        <h1 className='text-2xl text-gray-300'>Wenjech</h1>
        <p className='text-gray-500'>14 diciembre del 2023</p>
      </div>
      <form>
        <div className='w-full relative' >
        <IoIosSearch className='absolute' />
          <input type="text" className='bg-white' />
        </div>
      </form>
    </header>
   </div>
   <div className='lg:col-span-2  fixed lg:static right-0'>hola</div>
</main>



     </div>
  )
}

export default App
