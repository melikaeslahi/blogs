import TableCell from "./TableCell";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table =()=>{
    return(<>
    <section className="w-full flex justify-center items-center ">
      <table className="w-4/5 p-5 rounded-lg mt-10  shadow-[0px_0px_5px_0px_rgba(179,179,179,1)]">
         <TableRow>
            <TableHeader>#</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Image</TableHeader>
            <TableHeader>Biography</TableHeader>
         </TableRow>

       <TableRow>
         <TableCell>1</TableCell>
         <TableCell>melika</TableCell>
         <TableCell>image1</TableCell>
         <TableCell> aha is a product disgner ....</TableCell>
       </TableRow>
         
       <TableRow>
         <TableCell>2</TableCell>
         <TableCell>melika</TableCell>
         <TableCell>image1</TableCell>
         <TableCell> aha is a product disgner ....</TableCell>
       </TableRow>

       <TableRow>
         <TableCell>3</TableCell>
         <TableCell>melika</TableCell>
         <TableCell>image1</TableCell>
         <TableCell> aha is a product disgner ....</TableCell>
       </TableRow>

       <TableRow>
         <TableCell>4</TableCell>
         <TableCell>melika</TableCell>
         <TableCell>image1</TableCell>
         <TableCell> aha is a product disgner ....</TableCell>
       </TableRow>
         
      </table> 
    </section>
    </>);
}
export default Table;