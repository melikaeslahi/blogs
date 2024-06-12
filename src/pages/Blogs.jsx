import Cart from '../components/Cart';
import Sidebar from '../components/pages/blogs/Sidebar';

const Blogs = () =>{
    return (<>
       <section className="relative flex flex-col-reverse lg:flex-row-reverse xl:flex-row-reverse justify-between items-start w-full  mt-10">
            
            <section className="lg:sticky lg:top-3 xl:sticky box-border xl:top-3 w-full lg:w-3/12 xl:w-3/12 lg:pr-3 xl:pr-3 flex flex-col justify-start items-start xl:mx-3 lg:mx-3 mt-5">
                 <Sidebar />
            </section>

             <section className="w-full md:w-full lg:w-9/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-center px-4 box-border  pr-3 lg:border-r-2 lg:border-gray-200">         
                <Cart width='w-full lg:w-56 xl:w-56'/>
                <Cart width='w-full lg:w-56 xl:w-56' />
                <Cart width='w-full lg:w-56 xl:w-56' />
             </section>

        
       </section>
    </>);
}
export default Blogs;