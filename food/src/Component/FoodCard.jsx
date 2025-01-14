import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch,   } from 'react-redux';
import { addToCart } from '../redux/Slices/CardSlice';
import { GoDotFill } from "react-icons/go"
const FoodCard = ({id,img,name,price,desc,rating,veg,handleToast}) => {
  const dispatch=useDispatch(); 



  


  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
     
      {veg ? <GoDotFill color='green' className='flex border-solid border-2  border-green-600' />:<GoDotFill color='red' className='flex border-solid border-2  border-red-600' />}
      
    <img
      src={img}
      alt=""
      className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
    />
    <div className="text-sm flex justify-between">
      <h2>{name}</h2>
      <span className="text-green-500 ">₹{price}</span>
    </div>
    <p className="text-sm font-normal">{desc.slice(0,50)}...</p>
    <div className="flex justify-between ">
      <span className="flex justify-center items-center">
        <AiFillStar className="mr-1 text-yellow-400" />{rating}
      </span>
      <button
       onClick={()=>{
        dispatch(addToCart({id,img,name,price,qty:1}))
        {  handleToast(name)
        }
       }}
        className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
      >
        Add to cart
      </button>
    </div>
  </div>
);
};

export default FoodCard
