 import Cart from '../components/Cart';


const Home = () =>{
    return (<>
         <section className="flex justify-center items-center w-full mt-10">
            <section className='flex flex-col justify-start my-10 items-center w-full'>
                <section className='flex justify-center   mb-10'>
                    <h1 className='text-xl'>Popular Blogs</h1>
                </section>
            <section className="w-full md:w-full lg:w-5/6 xl:w-5/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center gap-3">
               <Cart width={'w-full lg:w-64 xl:w-60 mr-2'} />
               <Cart width={'w-full lg:w-64 xl:w-60 mr-2'} />
               <Cart width={'w-full lg:w-64 xl:w-60 mr-2'} />
            </section>
            </section>
         </section>
    </>);
}
export default Home