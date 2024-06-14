import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal =({title, children})=>{
   
   
   return(<>
     <section  className="fixed top-0 flex flex-col justify-start items-center bottom-0 right-0 left-0 z-50 w-full h-full bg-black/60">
        <section className="h-1/4 w-full   ">
           <FontAwesomeIcon className="p-2 text-xl  w-full cursor-pointer" icon={faClose} />
        </section>
        <section className="w-full h-3/4 flex justify-center items-start " >
         <section className="w-80 h-52 flex flex-col items-center justify-start bg-white opacity-100 rounded-lg">
            <h1 className="text-lg text-blue-400 font-bold text-center flex justify-center items-center h-1/2">{title}</h1>
            {children}
         </section>

        </section>
     </section>
   </>);
}
export default Modal;