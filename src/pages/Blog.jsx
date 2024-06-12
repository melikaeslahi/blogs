import Sidebar from '../components/pages/blog/Sidebar';
import Aritcle from '../components/pages/blog/Article';
 
const Blog =()=>{
    return(
        <>
         <section className="relative flex flex-col-reverse lg:flex-row-reverse p-3 xl:flex-row-reverse justify-between items-start w-full  mt-10">
            
           <Sidebar />

           <Aritcle />

        
       </section>
        </>
    )
}
export default Blog;