import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faTrash } from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import { Link } from "react-router-dom";
import { useDeletePostMutation, useGetPostsQuery } from "../../api/postApi";
import { data } from "autoprefixer";
import ShowTime from "../../components/ShowTime";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setIsModal } from "../../slice/utilSlice";
import ShowAuthor from "../../components/ShowAuthor";
import ShowCategory from "../../components/ShowCategory";


const  Posts = () =>{

   const {data:posts=[] , isSuccess , isError , isLoading ,error } = useGetPostsQuery();
   const dispatch = useDispatch();
   const [deleteId , setDeleteId] = useState(null);
   const [deletePost] = useDeletePostMutation();

   const handlerOpenModal = (id)=>{
      dispatch(setIsModal(true));
      setDeleteId(id);
   }

   let content;
   let contentNotFound;
    
    
   if (isLoading){
      content = <p>data is loading</p>
   }else if(isSuccess && posts.length > 0){
     content =
     
     (posts.map((post,index)=>(
      <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{post?.title}</TableCell>
      <TableCell><img src={`http://localhost:9000/post/${post?.image}`} className="rounded-md" alt={`${post?.title}`} width={50} height={50} /> </TableCell>

      <TableCell><ShowAuthor authorId={post?.author_id} /></TableCell>  
      <TableCell> <ShowCategory categoryId={post?.category_id} /> </TableCell>
      <TableCell> <ShowTime timestamp={post?.created_at} /> </TableCell>
      <TableCell>{post?.text.slice(0 , 10)} ...</TableCell>  
      <TableCell>
           <button onClick={()=>handlerOpenModal(post?.id)}
            className="p-2 text-xs bg-red-600 text-white">
                <FontAwesomeIcon icon={faTrash} /> </button>
           <TableEditRecord id={post?.id} />
      </TableCell>              
    </TableRow>
     )) 
    )

   }else if(posts.length === 0){
       contentNotFound =   
                    <p className="text-center">
                       Content Not Found 
                    </p>
                  
   }else if(isError){
    content = `error is ${error}`;
   }


    return (<>
        <PanelLayout onDelete={()=>deletePost(deleteId)} title={'Posts'} link={'posts'}>
          <Table >
            <thead>
                <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Tilte</TableHeader>
                    <TableHeader>Image</TableHeader>
                    <TableHeader>Author</TableHeader>
                    <TableHeader>Category</TableHeader>
                    <TableHeader>Create Time</TableHeader>
                    <TableHeader>Article</TableHeader>
                    <TableHeader>Options</TableHeader>
                 </TableRow>
            </thead>
            <tbody>
             {content}
             </tbody>
           </Table>
           {contentNotFound}
        </PanelLayout>
    </>);
}
export default Posts;