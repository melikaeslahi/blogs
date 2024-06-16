import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../api/categoryApi";
const Categories = () =>{
    const {data:categories = [] ,isSuccess , isError , isLoading , error} = useGetCategoriesQuery();
     
    let tableContent;
    let  message ;
     
    if(isLoading){
       message = <p>data is loading</p>
    }else if(isSuccess && categories.length > 0){
       tableContent = (categories.map((category , index)=>(
        <TableRow key={index}>
        <TableCell>1</TableCell>
        <TableCell>programing</TableCell>
        <TableCell> programing description </TableCell>
        <TableCell>
            <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
            <TableEditRecord   />
        </TableCell>                  
      </TableRow>
       )))
    }else if(categories.length === 0){
       message = <p>content not found</p>
     }
    else if(isError){  
      message = <p> error is {error} </p>
    }

    return (<>
        <PanelLayout title={'Categories'} link={'categories'}>
          <Table >
            <thead>
                <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Options</TableHeader>
                 </TableRow>
            </thead>
            <tbody>               
              {tableContent}   
            </tbody>
           </Table>
           {message}
        </PanelLayout>
    </>);
}
export default Categories;