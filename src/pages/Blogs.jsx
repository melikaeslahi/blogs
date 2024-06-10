import Cart from '../components/Cart';
import Sidebar from '../components/pages/blogs/Sidebar';

const Blogs = () =>{
    return (<>
       <section className="relative flex justify-between items-start w-full flex-row-reverse mt-10">
            
            <section className="sticky top-3  w-3/12 pr-3 flex flex-col justify-start items-start mx-3">
                 <Sidebar />
            </section>

             <section className="w-9/12  flex flex-wrap justify-around items-start pr-3 border-r-2 border-gray-200">
                <Cart />
                <Cart />
                <Cart />
             </section>

        
       </section>
    </>);
}
export default Blogs;