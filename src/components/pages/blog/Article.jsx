import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../../../assets/images/image1.jpg';
import { faFolder, faTimesCircle, faUser } from '@fortawesome/free-regular-svg-icons';

const Aritcle =()=>{
    return(
        <section className={`w-full md:w-full lg:w-9/12 xl:w-9/12 flex flex-col justify-start items-center 
          box-border p-4 shadow-[0px_0px_5px_0px_rgba(179,179,179,1)] rounded-xl mt-5`}>         
          <section className='w-10/12 flex flex-col justify-start items-center py-2 border-b-2 border-gray-200'>
             <h1 className='text-lg font-bold pb-3   w-full'>don`t miss a single match this season. whether it`s an away. </h1>
             <section className='flex justify-start items-center w-full'>
                <span className='text-xs text-gray-400 px-2'> 
                <FontAwesomeIcon className='text-blue-400 ' icon={faUser} /> 
                    aha 
                </span>
                <span className='text-xs text-gray-400 px-2'> 
                <FontAwesomeIcon className='text-blue-400 ' icon={faTimesCircle} /> 
                jone 5 2024 
                </span>
                <span className='text-xs text-gray-400 px-2'> 
                <FontAwesomeIcon className='text-blue-400 ' icon={faFolder} /> 
                programing
                </span>

             </section>
          </section>

          <section className='mt-5 w-full flex justify-center rounded-lg'> 
              <img 
              src={image1}
               alt="image blog"
               className='w-full md:10/12 lg:w-10/12 xl:w-10/12 h-72 rounded-lg' 
               />
          </section>
          <article className='flex justify-center'>
              <p className='w-full md:10/12 lg:w-10/12 xl:w-10/12 p-2 text-sm text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              </p>
          </article>
       </section>
    );
}
export default Aritcle;