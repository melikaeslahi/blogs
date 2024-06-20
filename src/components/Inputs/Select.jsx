import {  Field } from "formik";
 
import InputContainer from "./InputsContainer";

const Select = ({name , options ,placeholder , title  })=>{
    return(
         <>
          <InputContainer title={title} name={name}>
              <Field as="select" name={name} id={name} className="h-8 text-xs bg-gray-50 border py-55-rem border-blue-400 text-gray-900 rounded-lg focus:outline-blue-500 focus:border-blue-500   w-full p-2.5 "
                required="" placeholder={placeholder}>
                <option className="h-full">select your {title}</option>
                {options?.map((option , index)=>(
                  <>     
                        <option
                        key={option.id+index} 
                        value={option.id}>
                        {option.name}
                        </option>  
                  </> 
                  ))}
                </Field>  
           </InputContainer>
                  </>
    )
}
export default Select;