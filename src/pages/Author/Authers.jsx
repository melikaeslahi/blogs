import Table from "../../components/Table/Table";
import PanelLayout from "../../components/layouts/PanelLayout";

const Authors = () =>{
    return (<>
    <PanelLayout title={'Authors'} link={'author'}>
       <Table />
    </PanelLayout>
    </>);
}
export default Authors;