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
                <TableRow>
                 <TableCell>1</TableCell>
                 <TableCell>programing</TableCell>
                 <TableCell> programing description </TableCell>
                 <TableCell>
                     <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                     <TableEditRecord id={1} />
                 </TableCell>                  
               </TableRow>
                 
               <TableRow>
                 <TableCell>2</TableCell>
                 <TableCell>melika</TableCell>
                 <TableCell>image1</TableCell>   
                 <TableCell>
                     <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                     <TableEditRecord id={1} />
                 </TableCell>             
               </TableRow>
        
               <TableRow>
                 <TableCell>3</TableCell>
                 <TableCell>melika</TableCell>
                 <TableCell>image1</TableCell>  
                 <TableCell>
                     <Link to={`/edit/${1}`} className="p-2 text-xs bg-red-600 text-white"> <FontAwesomeIcon icon={faTrash} /> </Link>
                     <TableEditRecord id={1} />
                 </TableCell>
               </TableRow>
        
               <TableRow>
                 <TableCell>4</TableCell>
                 <TableCell>melika</TableCell>
                 <TableCell>image1</TableCell>
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