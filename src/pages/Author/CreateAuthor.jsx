import Input from "../../components/Inputs/Input";
import InputContainer from "../../components/Inputs/InputsContainer";
import CreatePageLayout from "../../components/layouts/CreatePageLayout";

const CreateAuther  =()=>{
    return(<>
       <CreatePageLayout title={'Create Author'} link={'authors'} >
         <InputContainer btnName={'Create Author'}>
            <Input type={'text'} title={'Name'} name={'name'} placeholder={'Melika'} />
            <Input type={'file'} title={'image'} name={'image'} placeholder={'Author Photo'} />
            <Input type={'text'} title={'Biography'} name={'biography'} placeholder={'write here somthing about your..'} />
 

         </InputContainer>
       </CreatePageLayout>
    </>);

}
export default CreateAuther;