import {Link} from "react-router-dom";
import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import {useGetAuthorsQuery } from "../../api/authorApi";

const Authors = () =>{

  const {data:authors = [] , isSuccess , isLoading , isError , error} =  useGetAuthorsQuery();

  let tableContent;
  let message;

  if (isLoading) {
    message = <p>data is loading</p>
  }else if (isSuccess) {
    if(authors.length > 0){
      tableContent = (authors.map((author , index)=>(
        <TableRow key={index}>
        <TableCell>{author.id}</TableCell>
        <TableCell>{author.name}</TableCell>
        <TableCell>{author.image}</TableCell>
        <TableCell> {author.biography}</TableCell>
        <TableCell>
            <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
            <TableEditRecord id={1} />
        </TableCell>
      </TableRow>
      )));
     
    } else{
      message = <p>Content Not Found</p>
    }
    
    
  }else if(isError){
     message = <p>error is {error.error} </p>
    
  }
    return (<>
        <PanelLayout title={'Authors'} link={'authors'}>
          <Table >
            <thead>
                <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Image</TableHeader>
                    <TableHeader>Biography</TableHeader>
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
export default Authors;