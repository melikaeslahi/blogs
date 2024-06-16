import Input from "../../components/Inputs/Input";
import InputContainer from "../../components/Inputs/InputsContainer";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";

const CreateCategory = ()=>{
    return (<>
    <CreatePageLayout title={'Edit  Post'} link={'posts'} >
         <InputContainer btnName={'Edit Post'}>
            <Input type={'text'} title={'Title'} name={'title'} placeholder={'programing'} />
            <Input type={'file'} title={'image'} name={'image'} placeholder={'post image'} />
            <Input type={'text'} title={'createTime'} name={'create_at'} placeholder={'2024'} />
            <Input type={'textarea'} title={'Article'} name={'article'} placeholder={'your text ...'} />
            <Input type={'text'} title={'author name'} name={'author_id'} placeholder={'select your name'} />
            <Input type={'select'} title={'category'} name={'category_id'} placeholder={'select your category'} />
         </InputContainer>
       </CreatePageLayout>
    </>);
}
export default CreateCategory;