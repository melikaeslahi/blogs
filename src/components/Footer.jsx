import { faFacebook, faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(<>
           <section className="flex flex-col justify-center items-start w-full">
                 <section className="flex justify-center w-full mt-5">
                    <section className="flex  flex-col justify-center items-center w-full md:w-5/6 xl:w-5/6 lg:w-5/6 h-48 rounded-xl bg-blue-500 m-2">
                        <p className="text-white text-xl py-2">get notified about our blogs published</p>

                        <section className="flex  bg-white h-10 rounded-sm mt-5">
                            <input type="text" className="m-1 outline-none border-none p-2 text-xs" placeholder="your email address..." />
                            <button className="flex justify-center items-center px-6 py-4 bg-orange-400 text-white text-center m-1 rounded-sm">Join Us</button>
                        </section>
                    </section>
                 </section>

                 <footer className="flex flex-col justify-start items-start w-full">
                  <section className="flex  justify-center items-center w-full p-5 mt-5 ">
                    <section className="flex flex-col items-center lg:flex-row xl:flex-row   justify-between lg:items-start xl:items-start w-5/6">
                        <section className="flex justify-center items-start">
                           <h1 className="font-extrabold text-2xl ">BLOGI</h1>
                        </section>
                        <section className="flex flex-col justify-start items-start mt-5">
                            <h2 className="text-sm text-gray-600">Important link</h2>
                           <ul>
                             <li><Link className="text-xs text-gray-500" to={'/'}>Home</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'/blogs'}>Blogs</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'/authors'}>Authors</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'/categories'}>Categories</Link></li> 

                           </ul>
                        </section>
                        <section className="flex flex-col justify-start items-start mt-5">
                            <h2 className="text-sm text-gray-600">Support</h2>
                           <ul>
                             <li><Link className="text-xs text-gray-500" to={'#'}>Contact</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'#'}>Platform</Link></li> 

                            

                           </ul>
                        </section>
                        <section className="flex flex-col justify-start items-start mt-5">
                            <h2 className="text-sm text-gray-600">Legal</h2>
                           <ul>
                             <li><Link className="text-xs text-gray-500" to={'#'}>Terms of Use</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'#'}>Blog</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'#'}>Jobs</Link></li> 
                             <li><Link className="text-xs text-gray-500" to={'#'}>Brand Guidelines</Link></li> 
                              
                           </ul>
                        </section>
                    </section>
                  </section>


                  <section className="flex justify-center w-full mt-5">
                    <section className="flex justify-between p-5 w-5/6 border-t-2 border-gray-200"> 
                      <p className="text-xs text-gray-500 ">all right are reserved @copy 2024</p>

                      <section className="flex">
                        <FontAwesomeIcon  className="px-3 text-sm text-gray-600 hover:text-blue-500"  icon={faFacebook} />
                        <FontAwesomeIcon  className="px-3 text-sm text-gray-600 hover:text-blue-500" icon={faInstagram} />
                        <FontAwesomeIcon  className="px-3 text-sm text-gray-600 hover:text-blue-500" icon={faWhatsapp} />
                        <FontAwesomeIcon  className="px-3 text-sm text-gray-600 hover:text-blue-500" icon={faTelegram} />

                      </section>
                     </section>
                    </section>
                 </footer>
           </section>
    </>);
}
export default Footer;