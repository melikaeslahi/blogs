import { ErrorMessage } from "formik";
import Label from "./Label";

const InputContainer = ({children , name ,title})=>{
    return(<>
       <section className="w-full ">
          <Label htmlFor={name}>{title}</Label>
            {children}
          <ErrorMessage name={name} component={'div'} />
    </section>
    </>)
}
export default InputContainer;