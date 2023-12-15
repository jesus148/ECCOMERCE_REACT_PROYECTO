


import React from "react";



//IMPORTAR EL ICONO , usamos el tipo de icon Simple Icons
// en el https://react-icons.github.io/react-icons/icons?name=si
import { RiHome2Fill , RiChatSmile2Fill,RiGitRepositoryFill , RiMailFill , RiMegaphoneFill,RiSettings4Line  } from "react-icons/ri";

import { AiOutlineLogout } from "react-icons/ai";


//Sidebar : barra de navegacion de lado 
//recordar ojo : usamos tailwind solo le das clikc en el class para saber su funcion 


// vocabulario tailwind: 
// lg:left-0  : apartir del tamaño lg se ve en el left 
// -left-full : algo como no se muestra al 100% en el left , osea lo esconde

const Sidebar = (props) =>{

    //PARTE LOGICA DEL COMPONENTE 



    //valor del props se pone 1 constante 
    const {showMenu} =props;







    //PARTE DEL RENDERIZADO

    //${ showMenu ? "left-0" :"-left-full"} usamos el ternario
    return <div className={ `bg-[#1F1D28]  fixed lg:left-0 top-0 w-28 h-full flex  flex-col justify-between rounded-tr-xl rounded-br-xl -left-full ${ showMenu ? "left-0" :"-left-full"}`}> 



<div>
<ul className="pl-4">

<li>

       

<div className=" ">      
<h1 className='text-xl text-steam uppercase font-bold text-center py-4 pr-4'>WenJech</h1>

</div>


</li>


<li className="bg-[#262837] p-4 rounded-tl-xl   rounded-bl-xl">
    <a href="#"  className="bg-[#4BC22BFF] p-4  rounded-xl text-white flex justify-center"> <RiHome2Fill  className="text-2xl"/></a>
</li>





<li className="hover:bg-[#262837] group  p-4 rounded-tl-xl   rounded-bl-xl  transition-colors">
    <a href="#"  className="group-hover:bg-[#4BC22BFF]  p-4  rounded-xl text-[#4BC22BFF] flex justify-center group-hover:text-white "> <RiChatSmile2Fill  className="text-2xl"/></a>
</li>





{/* group 
Cuando necesite diseñar un elemento según el estado de algún elemento principal , marque el elemento principal con la groupclase y use group-*modificadores como group-hoverpara diseñar el elemento de destino: 
osea basicamente es para relacionar los hoover pero es usan en elementos de padre e hijo recomendado*/}

<li className="hover:bg-[#262837] group  p-4 rounded-tl-xl   rounded-bl-xl  transition-colors">
    <a href="#"  className="group-hover:bg-[#4BC22BFF]  p-4  rounded-xl text-[#4BC22BFF]  flex justify-center group-hover:text-white  transition-colors"> <RiGitRepositoryFill  className="text-2xl"/></a>
</li>


<li className="hover:bg-[#262837] group  p-4 rounded-tl-xl   rounded-bl-xl  transition-colors">
    <a href="#"  className="group-hover:bg-[#4BC22BFF]  p-4  rounded-xl text-[#4BC22BFF]  flex justify-center group-hover:text-white  transition-colors"> <RiMailFill  className="text-2xl"/></a>
</li>
<li className="hover:bg-[#262837] group  p-4 rounded-tl-xl   rounded-bl-xl  transition-colors">
    <a href="#"  className="group-hover:bg-[#4BC22BFF]  p-4  rounded-xl text-[#4BC22BFF]  flex justify-center group-hover:text-white  transition-colors"> <RiMegaphoneFill  className="text-2xl"/></a>
</li>
<li className="hover:bg-[#262837] group  p-4 rounded-tl-xl   rounded-bl-xl  transition-colors">
    <a href="#"  className="group-hover:bg-[#4BC22BFF]  p-4  rounded-xl text-[#4BC22BFF]  flex justify-center group-hover:text-white  transition-colors"> <RiSettings4Line  className="text-2xl"/></a>
</li>




</ul>
</div>










<div>
    <ul className="pl-4">
    <li className="hover:bg-[#262837] group  p-4 rounded-tl-xl   rounded-bl-xl  transition-colors">
    <a href="#"  className="group-hover:bg-[#4BC22BFF]  p-4  rounded-xl text-[#4BC22BFF]  flex justify-center group-hover:text-white  transition-colors"> <AiOutlineLogout className="text-2xl" /></a>
</li>
    </ul>
</div>








    </div>;

}; 


export default Sidebar;

