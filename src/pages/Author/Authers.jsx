import {Link} from "react-router-dom";
import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import {useDeleteAuthorMutation, useGetAuthorsQuery } from "../../api/authorApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsModal } from "../../slice/utilSlice";

const Authors = () =>{

  const {data:authors = [] , isSuccess , isLoading , isError , error} =  useGetAuthorsQuery();
  const [deleteId , setDeleteId] = useState(null);
  const [deleteAuthor] = useDeleteAuthorMutation();
  const dispatch = useDispatch();
  let tableContent;
  let message;
   
  
  const handlerOpenModal = (id)=>{
      dispatch(setIsModal(true));
      setDeleteId(id);
  }



  if (isLoading) {
    message = <p>data is loading</p>
  }else if (isSuccess) {
    if(authors.length > 0){
      tableContent = (authors.map((author , index)=>(
        <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{author.name}</TableCell>
        <TableCell>{author.image}</TableCell>
        <TableCell> {author.bio}</TableCell>
        <TableCell>
            <button type="button" onClick={()=>handlerOpenModal(author.id)} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </button>
            <TableEditRecord id={author.id} />
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
        <PanelLayout onDelete={()=>deleteAuthor(deleteId)} title={'Authors'} link={'authors'}>
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