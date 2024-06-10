import { children } from "react";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout =() =>{
    return (
        <>
           <section>
             <Header />
               {children}
             <Footer />
           </section>
        </>
    );
}
export default MainLayout;