const TableRow =({children})=>{
    return(<>
     <tr className="odd:bg-white even:bg-blue-50 hover:text-blue-400 p-2 border-b-2  border-gray-200">
            {children}        
     </tr>
    </>);
}
export default TableRow;