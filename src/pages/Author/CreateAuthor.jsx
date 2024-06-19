import Input from "../../components/Inputs/Input";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
import FormContainer from "../../components/Inputs/FormContainer";
import { useAddAuthorMutation } from "../../api/authorApi";
import { authorSchema } from "../../validations/author";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const CreateAuther  =()=>{
  const navigate = useNavigate();
  const [addAuthor , {isLoading , isSuccess  }] = useAddAuthorMutation();

    const initialValues = {
      id:nanoid(),
      name:``,
      image:``,
      bio:``
    }

     
    useEffect(()=>{
      if (isSuccess) {
         navigate('/authors');
      }
    },[isSuccess])

   const  handlerSubmit = async (values)=>{
      try {
            const data=  await addAuthor(JSON.stringify(values)).unwrap();         
      } catch (error) {
         console.log(error)
      }   
   }

    return(<>
       <CreatePageLayout title={'Create Author'} link={'authors'} >
         <FormContainer btnName={'Create Author'} btnDisabled={isLoading ? true : false }  validate={authorSchema} initialValues={initialValues} onSubmit={handlerSubmit} >
            <Input type={'text'} title={'Name'} name={'name'} placeholder={'Melika'} />
            <Input type={'text'} title={'image'} name={'image'} placeholder={'Author Photo'} />
            <Input type={'text'} title={'Biography'} name={'bio'} placeholder={'write here somthing about your..'} />
         </FormContainer>
       </CreatePageLayout>
    </>);

}
export default CreateAuther;