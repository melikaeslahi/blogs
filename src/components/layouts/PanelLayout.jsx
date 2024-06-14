import { Link } from "react-router-dom";
// import Modal from "../Modal";

const PanelLayout =({title , link , children})=>{
    return (<>
      
      <section className="w-full flex flex-col items-center justify-start">
        {/* <Modal  title={'Are You sure ?'}>
          <section className="flex justify-around items-center w-full h-1/2">
             <button className="rounded-sm py-2 px-4 text-xs border border-green-400 bg-green-400 text-white hover:bg-green-500 p-2">Yes</button>
             <button className="rounded-sm py-2 px-4 text-xs border border-red-400 bg-red-400 text-white hover:bg-red-500 p-2">Cancel</button>
          </section>
        </Modal> */}
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