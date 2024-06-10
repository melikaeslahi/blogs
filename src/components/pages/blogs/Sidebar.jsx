import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpeg';
import image3 from '../../../assets/images/image3.jpg';

const Sidebar =()=>{
    return(
        <>
        <h1 className="text-sm pl-4 border-l-4 border-l-blue-400">Recent Posts</h1>
                 <section className="flex justify-start items-center w-full mt-3 p-3   border-b-2 border-gray-200 ">
                    <section>
                        <img src={image1}
                             className='w-12 h-12 rounded-sm'
                             alt="recent post" />
                    </section>
                    <section className='flex flex-col justify-center items-start pl-2  '>
                    <h1 className='text-xs pt-3 '>don`t miss a single match this season</h1>
                    <p className='text-gray-500 text-xs'>1h ago</p>

                    </section>

                 </section>
                 <section className="flex justify-start items-center w-full mt-3 p-3  border-b-2 border-gray-200 ">
                    <section>
                        <img src={image2}
                             className='w-12 h-12 rounded-sm'
                             alt="recent post" />
                    </section>
                    <section className='flex flex-col justify-center items-start pl-2  '>
                    <h1 className='text-xs pt-3 '>don`t miss a single match this season</h1>
                    <p className='text-gray-500 text-xs'>1h ago</p>

                    </section>

                 </section>
                 <section className="flex justify-start items-center w-full mt-3 p-3  border-b-2 border-gray-200 ">
                    <section>
                        <img src={image3}
                             className='w-12 h-12 rounded-sm'
                             alt="recent post" />
                    </section>
                    <section className='flex flex-col justify-center items-start pl-2  '>
                    <h1 className='text-xs pt-3 '>don`t miss a single match this season</h1>
                    <p className='text-gray-500 text-xs'>1h ago</p>

                    </section>

                 </section>
        </>
    );
}
export default Sidebar;