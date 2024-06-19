import Input from "../../components/Inputs/Input";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
import FormContainer from "../../components/Inputs/FormContainer";
import Select from "../../components/Inputs/Select";
import Textarea from "../../components/Inputs/Textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation, useGetPostQuery } from "../../api/postApi";
import { useGetAuthorsQuery } from "../../api/authorApi";
import { useGetCategoriesQuery } from "../../api/categoryApi";
import { postSchema } from "../../validations/post";
import { useEffect } from "react";

const EditPost = () =>{

    const navigate = useNavigate();
    const {postId} = useParams();
    const {data:post , isLoading:loading , isSuccess:success} = useGetPostQuery(postId);
    const [editPost , {isLoading , isSuccess}] =  useEditPostMutation();
    const {data:authors} =  useGetAuthorsQuery();
    const {data:categories} = useGetCategoriesQuery();

    const initialValues = {
        id:`${post?.id}`,
        title:`${post?.title}`,
        image:`${post?.image}`,
        created_at:`${post?.created_at}`,
        text:`${post?.text}`,
        author_id:`${post?.author_id}`,
        category_id:`${post?.category_id}`

    }

     useEffect(()=>{
       if(isSuccess)
       navigate('/posts');
     } , [isSuccess]) 

    const handlerSubmit = async(values)=>{
        try {
            await editPost({values: JSON.stringify(values) , postId}).unwrap();
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
    {loading ? <p>data is loading</p> : success ? 
      <CreatePageLayout title={'Edit  Post'} link={'posts'} >
      <FormContainer btnName={'Edit Post'} btnDisabled={isLoading?true : false } validate={postSchema} initialValues={initialValues} onSubmit={handlerSubmit} >
         <Input type={'text'} title={'Title'} name={'title'} placeholder={'programing'} />
         <Input type={'text'} title={'image'} name={'image'} placeholder={'post image'} />
         <Input type={'text'} title={'createTime'} name={'created_at'} placeholder={'2024'} />
         <Textarea type={'textarea'} title={'text'} name={'text'} placeholder={'your text ...'} />
         <Select type={'text'} title={'author name'} options={authors} name={'author_id'} placeholder={'select your name'} />
         <Select type={'text'} title={'category'} options={categories} name={'category_id'} placeholder={'select your category'} />
      </FormContainer>
    </CreatePageLayout>

    : <p>data not found</p> }
       </>);
}
export default EditPost;