

// usando los hooks
import {useState} from 'react';


//iconos
import { IoMdMenu , IoIosSearch} from "react-icons/io";
import { FaUser , FaPlusCircle , FaChevronDown } from "react-icons/fa";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";





//COMPONENTE
import Sidebar  from './components/shared/SideBar';



//FORMA DE TRABAJAR EN FRONTEND 
//FIRST MOBILE : primero lo haces para movil luego para escritorio
//FIRST DESKTOP: primero para escritorio




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
{/* col-span: son para unir colmnas 2*/}
{/* top-1/2: 50 por ciento en el top hacia abajo */}
{/* translate-y-1/2: centre verticalmente  n el eje de las y */}
{/* flex flex-col : cajas flexibles , en forma de columna */}
{/* gap-4 : separa ya sea columnas o filas en una grilla o tabla  osea es el espacio de filas y columnas en una grilla*/}

<main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 '>
   <div className='lg:col-span-6 '>

    {/* HEADER */}
    <header className='p-4'>


{/* TITULO Y EL INPUT PARA BUSCAR , para centrar este div */}
<div className='flex flex-col md:flex-row md:justify-between md:items-center  gap-4 mb-6' >
      <div>
        <h1 className='text-2xl text-gray-100'>Wenjech</h1>
        <p className='text-gray-500'>14 diciembre del 2023</p>
      </div>
      <form>
        <div className={`w-full  ${ showMenu ? "z-10" : "z-50" }  relative  `}>
        <IoIosSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
        {/* dando estilos al cursos del input , osea donde se escribe */}
          <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none' 
          placeholder='Buscar'/>
        </div>
      
      </form>
</div>

 {/* TABS */}

<nav className='text-gray-300 flex items-center  justify-between border-b'>
  <a href="#" className='relative py-2 pr-2 before:w-1/2 before:h-1 before:absolute before:bg-[#52F577] before:left-0 before:rounded-full before:-bottom-[1px] text-[#52F577]'>Comida Caliente</a>
  <a href="#" className='py-2 pr-2 '>Platos Frios</a>
  <a href="#" className='py-2 pr-2'>Sopa</a>
  <a href="#" className='py-2'>Parilla</a>
</nav>


{/* title content */}

<div className='flex items-center justify-between'>
  <h2 className='text-xl text-gray-300'> Elegir Platos</h2>
  <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
  <FaChevronDown  />

  </button>
</div>
    
    
    </header>
   </div>



   <div className='lg:col-span-2  fixed lg:static right-0 '>hola</div>



</main>



     </div>
  )
}

export default App
