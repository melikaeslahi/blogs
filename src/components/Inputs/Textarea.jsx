import {  Field } from "formik";
 
import InputContainer from "./InputsContainer";

const  Textarea = ({name ,placeholder , title ,className })=>{
    return(
         <>
          <InputContainer title={title} name={name}>
              <Field as='textarea'
               name={name} 
               id={name} 
               rows={'10'}
               className={`${className} h-8 text-xs bg-gray-50 border py-55-rem border-blue-400
               text-gray-900 rounded-lg focus:outline-blue-500 focus:border-blue-500 w-full p-2.5`}
               required=""
               placeholder={placeholder}>
                  
                </Field>  
           </InputContainer>
                  </>
    )
}
export default Textarea;