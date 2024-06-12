import Table from "../../components/Table/Table";
import TableCell from "../../components/Table/TableCell";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import PanelLayout from "../../components/layouts/PanelLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faTrash } from "@fortawesome/free-solid-svg-icons";
import TableEditRecord from "../../components/Table/TableEditRecord";
import { Link } from "react-router-dom";


const Categories = () =>{
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
                <TableRow>
                 <TableCell>1</TableCell>
                 <TableCell>  About React js  </TableCell>
                 <TableCell> melika </TableCell>  
                 <TableCell>programing</TableCell>
                 <TableCell> 2024 </TableCell>
                 <TableCell>  Article  </TableCell>  
                 <TableCell>
                      <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                      <TableEditRecord id={1} />
                 </TableCell>              
               </TableRow>
                 
               <TableRow>
                 <TableCell>1</TableCell>
                 <TableCell>  About React js  </TableCell>
                 <TableCell> melika </TableCell>  
                 <TableCell>programing</TableCell>
                 <TableCell> 2024 </TableCell>
                 <TableCell>  Article  </TableCell>     
                 <TableCell>
                      <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                      <TableEditRecord id={1} />
                 </TableCell>         
               </TableRow>
        
               <TableRow>
                 <TableCell>1</TableCell>
                 <TableCell>  About React js  </TableCell>
                 <TableCell> melika </TableCell>  
                 <TableCell>programing</TableCell>
                 <TableCell> 2024 </TableCell>
                 <TableCell>  Article  </TableCell>  
                 <TableCell>
                      <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                      <TableEditRecord id={1} />
                 </TableCell>
               </TableRow>
        
               <TableRow>
                 <TableCell>1</TableCell>
                 <TableCell>  About React js  </TableCell>
                 <TableCell> melika </TableCell>  
                 <TableCell>programing</TableCell>
                 <TableCell> 2024 </TableCell>
                 <TableCell>  Article  </TableCell>
                 <TableCell>
                      <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                      <TableEditRecord id={1} />
                 </TableCell> 
               </TableRow>
            </tbody>
           </Table>
        </PanelLayout>
    </>);
}
export default Categories;