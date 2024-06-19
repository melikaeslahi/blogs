import Input from "../../components/Inputs/Input";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
import FormContainer from "../../components/Inputs/FormContainer";
import {  useNavigate } from "react-router-dom";
import { useAddCategoryMutation } from "../../api/categoryApi";
import { nanoid } from "@reduxjs/toolkit";
import { categorySchema } from "../../validations/category";
import { useEffect } from "react";
const CreateCategory = () =>{
    const navigate = useNavigate();
    const [addCategory , {isSuccess, isLoading , isError}] = useAddCategoryMutation();
    

    const initialValues={
        id:nanoid(),
        name:``,
        description:``
    }

    useEffect(()=>{
        if(isSuccess)
        navigate('/categories');
    },[isSuccess])

    const handlerSubmit = async (values)=>{
       try {
       const data = await addCategory(JSON.stringify(values)).unwrap();
       } catch (error) {
         console.log(error)
       }
    }


    return (<>
     <CreatePageLayout title={'Create Category'} link={'categories'} >
         <FormContainer btnName={'Create Author'} btnDisabled={isLoading ? true : false} validate={categorySchema} initialValues={initialValues} onSubmit={handlerSubmit}>
            <Input type={'text'} title={'Name'} name={'name'} placeholder={'Programing'} />
            <Input type={'text'} title={'description'} name={'description'} placeholder={'programing is awsome.'} />
         </FormContainer>
       </CreatePageLayout>
    </>);
}
export default CreateCategory;