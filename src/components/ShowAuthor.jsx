import { useGetAuthorQuery } from "../api/authorApi"

const ShowAuthor =({authorId})=>{
    const {data:author  , isSuccess} =  useGetAuthorQuery(authorId)
    return(
        <>  {isSuccess ? author ? author.name : null :  "data not found " }  </>
    )
}
export default ShowAuthor;