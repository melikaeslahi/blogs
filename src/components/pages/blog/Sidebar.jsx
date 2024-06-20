import { useGetAuthorQuery } from '../../../api/authorApi';
import image1 from '../../../assets/images/image1.jpg';

const Sidebar =({authorId})=>{

    const {data: author  } = useGetAuthorQuery(authorId);


    return(<>
           <section className="lg:sticky lg:top-3 xl:sticky box-border xl:top-3 w-full lg:w-3/12 xl:w-3/12 lg:pr-3 xl:pr-3 flex flex-col justify-start items-start xl:mx-3 lg:mx-3 mt-5">
                 <section className='flex flex-col justify-start items-start w-full p-4 shadow-[0px_0px_5px_0px_rgba(179,179,179,1)] rounded-lg'>
                    <h3 className='text-lg font-bold p-2 '>About The Author</h3>
                    <section className='rounded-lg flex justify-center w-full'>
                    <img src={`http://localhost:9000/author/${author?.image}`} alt="author photo" 
                    className='w-full md:10/12 lg:w-52 xl:w-52 h-52 rounded-lg'
                    />
                    </section>
                    <p className='text-xs p-2 text-justify w-full'>
                         {author?.bio}
                        </p>
                 </section>
            </section>
    </>);
}
export default Sidebar;