import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import { Link } from "react-router-dom";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../api/categoryApi";
import { useDispatch } from "react-redux";
import { setIsModal } from "../../slice/utilSlice";
import { useState } from "react";
const Categories = () =>{
    const {data:categories = [] ,isSuccess , isError , isLoading , error} = useGetCategoriesQuery();
    const dispatch = useDispatch(); 
    const [deleteId , setDeleteId] =  useState(null);
    const [deleteCategory] = useDeleteCategoryMutation();
    let tableContent;
    let  message ;

    const handlerOpenModal =(id)=>{
        dispatch(setIsModal(true));
        setDeleteId(id);
    }

     
    if(isLoading){
       message = <p>data is loading</p>
    }else if(isSuccess && categories.length > 0){
       tableContent = (categories.map((category , index)=>(
        <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{category.name}</TableCell>
        <TableCell>  {category.description} </TableCell>
        <TableCell>
            <button  onClick={()=>handlerOpenModal(category.id)} 
            className="p-2 text-xs bg-red-600 text-white"> 
            <FontAwesomeIcon icon={faTrash} /> 
            </button>
            <TableEditRecord  id={category.id} />
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
        <PanelLayout onDelete={()=>deleteCategory(deleteId)} title={'Categories'} link={'categories'}>
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