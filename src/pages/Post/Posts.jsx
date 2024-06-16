import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faTrash } from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../api/postApi";
import { data } from "autoprefixer";


const Categories = () =>{

   const {data:posts=[] , isSuccess , isError , isLoading ,error } = useGetPostsQuery();
 
   let content;
   let contentNotFound;
    
    
   if (isLoading){
      content = <p>data is loading</p>
   }else if(isSuccess && posts.length > 0){
     content =
     
     (posts.map((post,index)=>(
      <TableRow key={index}>
      <TableCell>{post?.id}</TableCell>
      <TableCell>   {post?.title}  </TableCell>
      <TableCell>  {post?.author} </TableCell>  
      <TableCell>  {post?.category_id} </TableCell>
      <TableCell> {post?.created_at}  </TableCell>
      <TableCell>   {post?.article}  </TableCell>  
      <TableCell>
           <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
           <TableEditRecord id={1} />
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
        <PanelLayout title={'Posts'} link={'posts'}>
          <Table >
            <thead>
                <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Tilte</TableHeader>
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
export default Categories;