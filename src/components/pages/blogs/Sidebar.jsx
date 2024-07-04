import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpeg';
import image3 from '../../../assets/images/image3.jpg';
import ShowTime from '../../ShowTime';

const Sidebar =({recentlyPosts})=>{
  
    return(
        <>
        <h1 className="text-sm pl-4 border-l-4 border-l-blue-400">Recent Posts</h1>
        {recentlyPosts?.map((recentlyPost , index)=>(
            <Link className='w-full' to={recentlyPost.id} >

          <section key={index} className="flex justify-start items-center w-full mt-3 p-3   border-b-2 border-gray-200 ">
           <section>
             <img src={`https://app-store-api.vercel.app/post/${recentlyPost?.image}`}
          className='w-12 h-12 rounded-sm'
          alt="recent post" />
          </section>
           <section className='flex flex-col justify-center items-start pl-2  '>
        <h1 className='text-xs pt-3 '>{recentlyPost?.title}</h1>
      <p className='text-gray-500 text-xs'> <ShowTime timestamp={recentlyPost?.created_at} /> </p>

     </section>  

   </section>
   </Link>
        ))}
                
               
        </>
    );
}
export default Sidebar;