import {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {Fetchshop} from './action'
import {useSelector} from 'react-redux'

 const Navbar=()=> {
  const recipes=useSelector((state)=>state.user.recipes)
  console.log(recipes?.data?.hits)
  const data=useSelector((loading)=>loading.user.loading)
  console.log(data)
  const [food,setFood]=useState()
  const dispatch=useDispatch();
 // useEffect(()=>{
      //dispatch(Fetchshop(food)) },[ ])
       const mohini=()=>{
        console.log("loading")
        dispatch(Fetchshop (food))
               }
      return (
 <>
 <div>
    <div className='search flex justify-end py-8  '>
    <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-5">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className=" text-4xl mr-10 ">Waah Ji Waah</span>
    </a>
   
    <div className='searchInputs '>
            <input onChange={(e)=>setFood(( e.target.value))} type="text" placeholder='what you want?'/>
            </div>
            
            <button onClick={mohini} className='bg-white rounded text-xl '>clickme</button>
  </div>
</header>
</div>
        {!recipes?.data?.hits &&<div className=' bg-gray-300 pt-32 flex justify-start pl-4'>
  <img src='https://office-insider-media.azurefd.net/media/2019/12/Food-GIF.gif'></img>
  <div className='ml-5 text-9xl font-bold'><p className='text-orange-600'>Welcome</p>
  <p>To Waah Ji Waah</p>
  <div className='py-16'>
  <p className='text-3xl  text-gray-700'>Here you get a variety of food according to your mood.</p>
  <p className='text-3xl text-gray-700'>If you want some specific food then you can simply search your food on given searchbar.</p>
  </div>
  </div>
  </div>}

    <div className='flex flex-wrap gap-20 pt-32 pb-10 justify-center bg-gray-300 w-full'>
      {recipes?.data?.hits?.map((value)=>(
      
    <div className="  max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white">
  <img className="w-[400px]" src={value.recipe.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{value.recipe.label}</div>
    <a href={value.recipe.url} className="text-gray-700 text-base">Link to the recipe
    </a>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:text-red-600">#food</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:text-red-600">#yummy</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:text-red-600">#explore</span>
  </div>
</div>
))}
</div>
</div>
{recipes?.data?.hits.length<1&&<div className=' flex justify-center bg-gray-300 '>
  <img src='https://c.tenor.com/DQdV0jxKChsAAAAd/nope-baby.gif' ></img>
  </div>}
<div>
<footer className="text-gray-600 body-font bg-green-400">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Waah JI Waah</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
</div>
    </>

  )
}
export default Navbar
