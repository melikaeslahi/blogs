import { Link } from "react-router-dom";

const PanelLayout =({title , link , children})=>{
    return (<>
      
      <section className="w-full flex flex-col items-center justify-start">

        <section className="flex flex-row-reverse justify-between items-center p-4 mt-5 w-10/12">
            <section className="">
                <h1 className="font-bold text-xl">{title}</h1>
            </section>
            <section>
                <Link to={`/${link}/create`} 
                className="py-2 px-4 text-xs rounded-md border border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400"> Create {link} </Link>
            </section>
        </section>

        {children}

      </section>

    </>);
}
export default PanelLayout;