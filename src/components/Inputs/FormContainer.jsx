import { Formik , Form } from "formik";

const FormContainer =({children , handlerSubmit , btnName ,initialValues ,validate ,btnDisabled}) =>{
    return(<>
     <section className=" w-full flex justify-center items-center">
      <section className="flex justify-between items-start w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-5 rounded-lg mb-5  shadow-[0px_0px_5px_0px_rgba(179,179,179,1)]">
        <Formik 
                initialValues={initialValues} 
                 validationSchema={validate}
                onSubmit={values=>handlerSubmit(values)}
                className="flex justify-center items-start w-full">
          <Form className="flex flex-col justify-start items-center w-full">
            <section className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-1  w-full">
               {children}  
            </section>
       <section className="w-full flex justify-center items-center mt-5">
        <button 
           type="submit"
         
           disabled={btnDisabled}
           className=" px-4 py-2 text-xs bg-blue-400 text-white border border-blue-400 rounded-md hover:bg-blue-700 hover:text-white"
           >{btnName}</button>
           </section>
           </Form>
        </Formik>
      </section> 
    </section>
    </>);
}
export default FormContainer;