import Input from "../../components/Inputs/Input";
import InputContainer from "../../components/Inputs/InputsContainer";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";
const EditCategory = () =>{
    return (<>
       <CreatePageLayout title={'Create Category'} link={'categories'} >
         <InputContainer btnName={'Create Author'}>
            <Input type={'text'} title={'Name'} name={'name'} placeholder={'Programing'} />
            <Input type={'text'} title={'description'} name={'discription'} placeholder={'programing is awsome.'} />
         </InputContainer>
       </CreatePageLayout>
    </>);
}
export default EditCategory;