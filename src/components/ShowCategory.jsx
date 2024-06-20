import { useGetCategoryQuery } from "../api/categoryApi";

const ShowCategory =({categoryId})=>{
    const {data:category  , isSuccess} =    useGetCategoryQuery(categoryId)
    return(
        <>   {isSuccess ? category ? category.name : null :  "data not found " } </>
    )
}
export default ShowCategory;