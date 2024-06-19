import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
import FormContainer from "../../components/Inputs/FormContainer";
import Textarea from "../../components/Inputs/Textarea";
import { useNavigate } from "react-router-dom";
import { useAddPostsMutation } from "../../api/postApi";
import { postSchema } from "../../validations/post";
import { useEffect } from "react";
import { useGetAuthorsQuery } from "../../api/authorApi";
import { useGetCategoriesQuery } from "../../api/categoryApi";
import { nanoid } from "@reduxjs/toolkit";

const CreatePost = ()=>{
    const navigate = useNavigate();
    const [addPost , {isSuccess , isLoading}] = useAddPostsMutation();
    const {data:authors} = useGetAuthorsQuery();
    const {data:categories} = useGetCategoriesQuery();

    const initialValues ={
      id:nanoid(),
      title:``, 
      image:``,
      created_at:  new Date(),
      author_id:``,
      text:``,
      category_id:``
    }
     
    useEffect(()=>{
      if(isSuccess)
      navigate('/posts')
    } ,[isSuccess]);

    const handlerSubmit =  async (values)=>{
      try {
         await addPost(JSON.stringify(values)).unwrap();
      } catch (error) {
         console.log(error)
      }
    }

    return (<>
    <CreatePageLayout title={'Create Post'} link={'posts'} >
         <FormContainer btnName={'Create Post'} btnDisabled={isLoading ? true : false} validate={postSchema} initialValues={initialValues} onSubmit={handlerSubmit}>
            <Input type={'text'} title={'Title'} name={'title'} placeholder={'programing'} />
            <Input type={'text'} title={'image'} name={'image'} placeholder={'post image'} />
            <Input type={'text'} title={'createTime'} name={'created_at'} placeholder={'2024'} />
            <Select type={'text'} title={'author name'} options={authors} name={'author_id'} placeholder={'select your name'} />
            <Select type={'select'} title={'category'} options={categories} name={'category_id'} placeholder={'select your category'}  />
            <Textarea type={'textarea'} title={'text'} name={'text'} placeholder={'write your text ...'} />
         </FormContainer>
       </CreatePageLayout>
    </>);
}
export default CreatePost;