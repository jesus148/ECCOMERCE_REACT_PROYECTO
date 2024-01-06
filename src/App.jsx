

// usando los hooks
import {useState} from 'react';


//iconos
import { IoMdMenu , IoIosSearch  } from "react-icons/io";
import { FaUser , FaPlusCircle , FaChevronDown, FaRegTrashAlt } from "react-icons/fa";
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


  


  // FORMA DE UTLIZAR LOS CLASSNAME :NO ES RECOMDABLE 
  // osea esta constante se usara dentro de un class name que dara casi el mimso resultado 
  const classBtn= "text-[#4BC22BFF] py-2 px-4 rounded-xl border border-gray-400";




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

<main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4  pb-20 '>



   <div className='lg:col-span-6 md:p-8'>

    {/* HEADER */}
    <header >


{/* TITULO Y EL INPUT PARA BUSCAR , para centrar este div */}
<div className='flex flex-col md:flex-row md:justify-between md:items-center  gap-4 mb-6' >
      <div>
        <h1 className='text-2xl text-gray-100'>Wenjech</h1>
        <p className='text-gray-500'>14 diciembre del 2023</p>
      </div>
      <form>
      {/* {`w-full  ${ showMenu ? "z-10" : "z-50" } : al hacer movil dar click el input el bar sale primero */}
        <div className={`w-full  ${ showMenu ? "z-10" : "z-50" }  relative  `}>
        <IoIosSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
        {/* dando estilos al cursos del input , osea donde se escribe */}
          <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none' 
          placeholder='Buscar'/>
        </div>
      
      </form>
</div>

 {/* TABS */}

<nav className='text-gray-300 flex items-center  justify-between  lg:justify-start border-b mb-6 lg:gap-4'>
  <a href="#" className='relative py-2 pr-2 before:w-1/2 before:h-1 before:absolute before:bg-[#52F577] before:left-0 before:rounded-full before:-bottom-[1px] text-[#52F577]'>Comida Caliente</a>
  <a href="#" className='py-2 pr-2 '>Platos Frios</a>
  <a href="#" className='py-2 pr-2'>Sopa</a>
  <a href="#" className='py-2'>Parilla</a>
</nav>



    
    
    </header>

    {/* title content */}

<div className='flex items-center justify-between mb-8'>
  <h2 className='text-xl text-gray-300'> Elegir Platos</h2>
  <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
  <FaChevronDown  />

  </button>
</div>





{/* CONTENIDO  */}

<div className='p-8  grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 '>





  {/* card */}
  <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
 {/* cuando el elemento esta en public solo lo importar defrente */}
 {/* object-cover : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento */}
       <img src="pollo.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
       <p className='text-xl'> Plato con pollo frito y palta </p>
       <span> $2,29</span>
       <p className='text-gray-600'>20 platos disponibles</p>
  </div>


  {/* card */}
  <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
 {/* cuando el elemento esta en public solo lo importar defrente */}
 {/* object-cover : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento */}
       <img src="pollo.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
       <p className='text-xl'> Plato con pollo frito y palta </p>
       <span> $2,29</span>
       <p className='text-gray-600'>20 platos disponibles</p>
  </div>


  {/* card */}
  <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
 {/* cuando el elemento esta en public solo lo importar defrente */}
 {/* object-cover : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento */}
       <img src="pollo.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
       <p className='text-xl'> Plato con pollo frito y palta </p>
       <span> $2,29</span>
       <p className='text-gray-600'>20 platos disponibles</p>
  </div>



  {/* card */}
  <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
 {/* cuando el elemento esta en public solo lo importar defrente */}
 {/* object-cover : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento */}
       <img src="pollo.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
       <p className='text-xl'> Plato con pollo frito y palta </p>
       <span> $2,29</span>
       <p className='text-gray-600'>20 platos disponibles</p>
  </div>



  {/* card */}
  <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
 {/* cuando el elemento esta en public solo lo importar defrente */}
 {/* object-cover : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento */}
       <img src="pollo.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
       <p className='text-xl'> Plato con pollo frito y palta </p>
       <span> $2,29</span>
       <p className='text-gray-600'>20 platos disponibles</p>
  </div>

  
  {/* card */}
  <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
 {/* cuando el elemento esta en public solo lo importar defrente */}
 {/* object-cover : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento */}
       <img src="pollo.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
       <p className='text-xl'> Plato con pollo frito y palta </p>
       <span> $2,29</span>
       <p className='text-gray-600'>20 platos disponibles</p>
  </div>



  
</div>



   </div>












{/*   parte rigth */}

   <div className='lg:col-span-2  fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full z-50'>
    {/* ORDENES  */}
      <div className='relative pt-16 text-gray-300 p-8 h-full'>
       {/* PARTE DE ARRIBA DEL CAR ENCABEZADO */}
      <IoCloseCircleOutline className='absolute left-4 top-4 p-4 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
      <h1 className='text-2xl my-4'>Ordenes #151416</h1>

{/* BOTONOS DEBAJO  */}
      <div className='flex items-center gap-4 flex-wrap mb-8'>
        <button className='bg-[#4BC22BFF] text-white py-2 px-4 rounded-xl'>
           Cenar
        </button>
        <button className='text-[#4BC22BFF] py-2 px-4 rounded-xl border border-gray-400'>
           Vamos
        </button>

        {/* FORMA DE UTILIZAR EL CLASSNAME LINEA 51 ATRAVES DE UNA CONSTANTE */}
        {/* <button className={classBtn}>
           Delivery
        </button> */}
        <button className='text-[#4BC22BFF] py-2 px-4 rounded-xl border border-gray-400'>
           Delivery
        </button>
      </div>





      {/* car  item*/}

    <div>

        <div className='grid grid-cols-6 mb-4 p-4'>
          <h5 className='col-span-4'>Item</h5>
          <h5>Qty</h5>
          <h5>Precio</h5>
        </div>



      {/* product */}

      <div className='bg-[#262837] p-4 rounded-xl'>
        <div className='grid grid-cols-6 mb-4'>


        {/* product description */}
          <div className='flex items-center gap-3 col-span-4'>
            {/* cuando las files estaticos estan en public solo lo importas defrente */}
            {/* object-fit:cover : cover- La imagen mantiene su relación de aspecto. y llena la dimensión dada. La imagen se recortará para ajustarse */}
            <img src="pollo.png" alt="" className='w-10 h-10 object-cover' />
            <div>
            <h5 className='text-sm'>Plato dinner....</h5>
            <p className='text-xs text-gray-500'>$2.29</p>
            </div>  
    
          </div>
      
        {/* cantidad o qty  */}
        <div className='text-center'>
          <span>2</span>  
        </div>
        {/* price */}
        <div className='text-center'>
          <span>$4.58</span>
        </div>
        </div>
        {/* nota  */}
        <div className='grid grid-cols-6 items-center gap-2'>
          <form className='col-span-5'>
              <input type="text" className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none' placeholder='orden anotada'/>

          </form>
          <div >
            <button className='border border-red-500 p-2 rounded-lg'><FaRegTrashAlt  className=' text-red-500'/></button>
          </div>

        </div>


      </div>







      </div>



{/* submit payment - envio pago */}

    <div className='bg-[#262837] absolute  w-full  p-4 bottom-0 left-0'> 
    <div className='flex items-center justify-between mb-4'>
      <span className='text-gray-500'> Discount</span>
      <span> $0</span>

     </div>


     <div className='flex items-center justify-between'>
      <span  className='text-gray-500'> Discount</span>
      <span> $0</span>

     </div>
    
    
    
    
    </div>






      </div>
   </div>






  



</main>

     </div>
  )
}

export default App
