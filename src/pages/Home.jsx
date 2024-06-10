 import Cart from '../components/Cart';


const Home = () =>{
    return (<>
         <section className="flex justify-center items-center w-full mt-10">
            <section className='flex flex-col justify-start my-10 items-center w-full'>
                <section className='flex justify-center   mb-10'>
                    <h1 className='text-xl'>Popular Blogs</h1>
                </section>
            <section className="w-5/6 flex justify-between items-start">
               <Cart />
               </section>
            </section>
         </section>
    </>);
}
export default Home