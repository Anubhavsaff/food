import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {Fetchdata} from '../Task/action'
import { useEffect } from 'react'


const Table = () => {
  const products=useSelector((state)=>state.user.products)
    console.log(products?.data)
    // const [item,setItem]=useState()
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(Fetchdata()) },[ ])



  return (
    <div>
      {products?.data?.map((value)=>(  
      
      <table className=' w-[800px] h-[200px]       '>
        <tbody className='  border-solid
  border: 2px solid black'>
        <tr>
          <th>category</th>
          <th>price</th>
          <th>description</th>
          <th>image</th>
        </tr>
        </tbody>
        <tbody>
          <>
          <tr>
            <td className='border border-black'>{value.category}</td>
            <td className='border border-black'>{value.price}</td>
            <td className='border border-black'>{value.description
}</td>
             <td className='border border-black'><img src={value.image}></img></td>
             <td className='border border-black'></td>
              </tr>
          </>
          </tbody>
      </table>
      ))}
  
    
    </div>
  )
}

export default Table
