import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(<>
              <section className="flex justify-between lg:justify-around xl:justify-around items-center w-full p-3">
                <section className="w-1/6">
                    <h1 className="text-white font-extrabold text-2xl ml-2 md:ml-2 xl:ml-10 lg:ml-10 p-2">BLOGI</h1>
                </section>
                <nav className="justify-center w-full hidden lg:flex xl:flex md:hidden">
                   <ul className="flex w-full justify-center ml-32">
                     <li className="text-white p-2 text-xs "><Link to={'/'}>Home</Link></li>
                     <li className="text-white p-2 text-xs "><Link to={'/blogs'}>Blogs</Link></li>
                     <li className="text-white p-2 text-xs "><Link to={'/authors'}>Authors</Link></li>
                     <li className="text-white p-2 text-xs "><Link to={'/categories'}>Categories</Link></li>    
                   </ul>    
                </nav> 
                <section className="mr-10 w-2/6 hidden lg:flex md:hidden xl:flex justify-end">
                   <section>
                     <Link to={'/Login'} className="py-2 px-4 text-white ml-2 text-xs">Login</Link>
                     <Link to={'/Login'} className="py-2 px-4 text-xs text-white border border-white rounded-sm">Sign Up</Link>

                   </section>                    
                </section> 
                <section className="lg:hidden md:visible xl:hidden">
                    <FontAwesomeIcon className="text-white text-xl cursor-pointer m-2" icon={faBars} />
                </section>
              </section>
           </>);
}
export default Navbar