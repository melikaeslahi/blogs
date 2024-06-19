import Input from "../../components/Inputs/Input";
import InputContainer from "../../components/Inputs/FormContainer";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
import FormContainer from "../../components/Inputs/FormContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEditAuthorMutation, useGetAuthorQuery } from "../../api/authorApi";
import { useEffect } from "react";
import { authorSchema } from "../../validations/author";

const EditAuthor = () =>{
    const navigate = useNavigate();
    const {authorId} = useParams(); 
    const {data:author , isLoading :loading , isSuccess: success} = useGetAuthorQuery(authorId);
    const [editAuthor , {isSuccess , isLoading}] = useEditAuthorMutation();
    
     
    const initialValues = { 
      id:`${author?.id}`,
      name:`${author?.name}`,
      image:`${author?.image}`,
      bio: `${author?.bio}`
    }
    useEffect(()=>{
       if (isSuccess) {
         navigate('/authors')
       }
    })

    const handlerSubmit = async (values)=>{
      try {
          await editAuthor({ values:JSON.stringify(values) , authorId});
      } catch (error) {
         console.log(error);
      }
    }
    return (<>

    {success ? <CreatePageLayout title={'Edit Author'} link={'authors'} >
         <FormContainer btnName={'Edit Author'} btnDisabled={isLoading ? true : false } onSubmit={handlerSubmit} initialValues={initialValues} validate={authorSchema}  >
            <Input type={'text'} title={'Name'} name={'name'} placeholder={'Melika'} />
            <Input type={'text'} title={'image'} name={'image'} placeholder={'Author Photo'} />
            <Input type={'text'} title={'Biography'} name={'bio'} placeholder={'write here somthing about yourself..'} />
         </FormContainer>
       </CreatePageLayout>: loading ? <p>data is loading</p> : <p>data not found</p> }
       
    </>);
}
export default EditAuthor;