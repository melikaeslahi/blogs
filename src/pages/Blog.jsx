import Sidebar from '../components/pages/blog/Sidebar';
import Aritcle from '../components/pages/blog/Article';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../api/postApi';
 
const Blog =()=>{
    const {blogId} = useParams();
    const {data} = useGetPostQuery(blogId);

    return(
        <>
         <section className="relative flex flex-col-reverse lg:flex-row-reverse p-3 xl:flex-row-reverse justify-between items-start w-full  mt-10">
            
           <Sidebar authorId={data?.author_id} />

           <Aritcle blog={data} />

        
       </section>
        </>
    )
}
export default Blog;