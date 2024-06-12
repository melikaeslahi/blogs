const Input = ({type , name ,placeholder , title} )=>{
    return(<>
    <section className="w-full ">
    <label for={name} className="font-mono uppercase font-bold  text-[11px]  text-blue-700  
      bg-white relative px-1 top-2 left-3 w-auto group-focus-within:text-red-600 ">
       {title}
    </label>
    <input type={type} name={name} id={name} className="h-8 text-10 bg-gray-50 border py-55-rem border-blue-400 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500   w-full p-2.5 "
      required="" placeholder={placeholder} />

    </section>
    </>);
}
export default Input;