 const Table =({children})=>{
    return(<>
    <section className=" w-full flex justify-center items-center">
      <table className="overflow-scroll overflow-x-auto w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-5 rounded-lg mb-5  shadow-[0px_0px_5px_0px_rgba(179,179,179,1)]">
        {children}  
      </table> 
    </section>
    </>);
}
export default Table;