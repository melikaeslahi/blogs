import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TableEditRecord =({id}) =>{
    return(
        <>
          <Link to={`edit/${1}`} className="p-2 text-xs bg-green-400 text-white"> <FontAwesomeIcon icon={faEdit} /> </Link>

        </>
    );
}
export default TableEditRecord;