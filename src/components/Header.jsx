import Navbar from "./Navbar";

const Header =()=>{
    return(<>
      
      <section className="w-full h-56  bg-blue-500 flex flex-col items-center justify-start">
          <Navbar />

          <section className="flex flex-col items-center justify-start mt-5  w-full h-full">
            <h1 className="font-extrabold text-3xl mb-5 text-white">Blogs</h1>
            <h3 className="text-white text-sm">All news about Blogi in one place</h3>
          </section>


      </section>

    </>);
}
export default Header;