const Label =({htmlFor , children }) =>{
    return(<>
       <label  htmlFor={htmlFor} className="font-mono uppercase font-bold  text-[11px]  text-blue-700  
      bg-white relative px-1 top-2 left-3 w-auto group-focus-within:text-red-600 ">
       {children}
    </label>
    </>);
}
export default Label;