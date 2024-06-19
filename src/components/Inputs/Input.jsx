import { Field } from "formik";
 
import InputContainer from "./InputsContainer";
 

const Input = ({type , name ,placeholder , title } )=>{
    return(<>
  <InputContainer name={name} title={title}>
    <Field 
     type={type}
     name={name} 
     id={name}
     className="h-8 text-10 bg-gray-50 border py-55-rem border-blue-400 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500   w-full p-2.5 "
      required="" 
      placeholder={placeholder} /> 
   </InputContainer>
    </>);
}
export default Input;