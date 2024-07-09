import Input from "../../components/Inputs/Input";
import InputContainer from "../../components/Inputs/FormContainer";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
import FormContainer from "../../components/Inputs/FormContainer";
import { json, useNavigate, useParams } from "react-router-dom";
import { useEditCategoryMutation, useGetCategoryQuery } from "../../api/categoryApi";
import { useEffect } from "react";
import { categorySchema } from "../../validations/category";
const EditCategory = () =>{
   const navigate = useNavigate();
   const {categoryId} = useParams();
   const {data:category , isSuccess:success , isLoading:loading} = useGetCategoryQuery(categoryId);
   const [editCategory , {isLoading , isSuccess}] = useEditCategoryMutation();

   const initialValues = {
      id:`${category?.id}`,
      name:`${category?.name}`,
      description:`${category?.description}`,
   }
   
   useEffect(()=>{
      if (isSuccess)
      navigate('/categories'); 
   } , [isSuccess])

   const handlerSubmit = async (values)=>{
      try {
         await editCategory({values , categoryId} ).unwrap();
      } catch (error) {
         console.log(error)
      }
   }

    return (<>
      {loading ? <p>data is loading</p> : success ? 
      <CreatePageLayout title={'Edit Category'} link={'categories'} >
       <FormContainer btnName={'Edit Author'}
        btnDisabled={isLoading? true : false} 
        initialValues={initialValues}
         validate={categorySchema}  
         handlerSubmit={handlerSubmit} >
          <Input type={'text'} title={'Name'} name={'name'} placeholder={'Programing'} />
          <Input type={'text'} title={'description'} name={'description'} placeholder={'programing is awsome.'} />
       </FormContainer>
     </CreatePageLayout>
      : <p>data not found</p> }
       
    </>);
}
export default EditCategory;