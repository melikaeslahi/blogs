import { Link } from 'react-router-dom';
import image1 from '../assets/images/image1.jpg';
import ShowTime from './ShowTime';

const Cart =({width ,post})=>{
    return(
        <>
        <Link to={`/blogs/${post?.id}`}>
                <section className={`flex flex-col justify-start lg:justify-start items-center ${width} mt-5 rounded-lg p-3 hover:border hover:border-gray-300`}>
                  <section className='w-full'>
                    <img src={`http://localhost:9000/post/${post?.image}`} 
                         className='rounded-lg w-full h-40'
                         alt="image for blog" />
                  </section>
                  <section className='flex justify-center items-start w-full'>
                    <h1 className='text-sm pt-3 font-medium'>{post?.title}</h1>
                  </section>

                  <section className='flex justify-between items-center mt-3 p-2 w-full'>
                     <h1 className='text-gray-500 text-xs'>By  <span className='text-black'>  {post?.author} </span> </h1>
                     <p className='text-gray-500 text-xs'> <ShowTime timestamp={post?.created_at} />   </p>
                     
                  </section>
               </section>
               </Link>
             
              
        </>
    );
}
export default Cart;