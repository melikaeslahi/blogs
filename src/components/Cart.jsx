import image1 from '../assets/images/image1.jpg';

const Cart =({width})=>{
    return(
        <>
          <section className={`flex flex-col justify-start lg:justify-start items-center ${width} mt-5 rounded-lg p-3 hover:border hover:border-gray-300`}>
                  <section className='w-full'>
                    <img src={image1} 
                         className='rounded-lg w-full h-40'
                         alt="image for blog" />
                  </section>
                  <section className='flex justify-center items-start w-full'>
                    <h1 className='text-sm pt-3 font-medium'>don`t miss a single match this season. whether it`s an away.</h1>
                  </section>

                  <section className='flex justify-between items-center mt-3 p-2 w-full'>
                     <h1 className='text-gray-500 text-xs'>By  <span className='text-black'> Mitchal </span> </h1>
                     <p className='text-gray-500 text-xs'>1h ago</p>
                  </section>
               </section>
             
              
        </>
    );
}
export default Cart;