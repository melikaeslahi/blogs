import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../../../assets/images/image1.jpg';
import { faFolder, faTimesCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import ShowAuthor from '../../ShowAuthor';
import ShowCategory from '../../ShowCategory';

const Aritcle =({blog})=>{
    
    const showDate =()=>{
        let date;
        const dateBlog= new Date(blog?.created_at);
        const year = dateBlog.getFullYear();
        const month = dateBlog.getMonth();
        const day = dateBlog.getDate();

        return date = `${year} _ ${month} _ ${day} `

    }
    
    
    return(
        <section className={`w-full md:w-full lg:w-9/12 xl:w-9/12 flex flex-col justify-start items-center 
          box-border p-4 shadow-[0px_0px_5px_0px_rgba(179,179,179,1)] rounded-xl mt-5`}>         
          <section className='w-10/12 flex flex-col justify-start items-center py-2 border-b-2 border-gray-200'>
             <h1 className='text-lg font-bold pb-3   w-full'>{blog?.title}</h1>
             <section className='flex justify-start items-center w-full'>
                <span className='text-xs text-gray-400 px-2'> 
                <FontAwesomeIcon className='text-blue-400 ' icon={faUser} /> 
                  <ShowAuthor   authorId={blog?.author_id} />
                </span>
                <span className='text-xs text-gray-400 px-2'> 
                <FontAwesomeIcon className='text-blue-400 ' icon={faTimesCircle} /> 
                    {showDate()}
                </span>
                <span className='text-xs text-gray-400 px-2'> 
                <FontAwesomeIcon className='text-blue-400 ' icon={faFolder} /> 
                  <ShowCategory categoryId={blog?.category_id} />
                </span>

             </section>
          </section>

          <section className='mt-5 w-full flex justify-center rounded-lg'> 
              <img 
              src={`http://localhost:9000/post/${blog?.image}`}
               alt="image blog"
               className='w-full md:10/12 lg:w-10/12 xl:w-10/12 h-72 rounded-lg' 
               />
          </section>
          <article className='flex justify-center'>
              <p className='w-full md:10/12 lg:w-10/12 xl:w-10/12 p-2 text-sm text-justify'>
                {blog?.text}
              </p>
          </article>
       </section>
    );
}
export default Aritcle;