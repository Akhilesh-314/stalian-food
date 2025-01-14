import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/Slices/SearchSlice';

const Navbar = () => {
  const dispatch=useDispatch();

  return (
    <nav 
      className="flex flex-col lg:flex-row justify-around mx-10 my-5 pt-5  h-[40vh] bg-center bg-cover " 
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/flat-twitter-header-template-italian-food-restaurant_23-2150220563.jpg?t=st=1736816637~exp=1736820237~hmac=7a97c2eaa157c326cfac73df89c4756644bbcc216bca42e1fc5fe7578edfed38&w=1380')" }}
    >
      <div className='font-bold'>
        <h3>{new Date().toUTCString().slice(0, 16)}</h3>
        
      </div>
      <div>
        <input 
          onChange={(e) => dispatch(search(e.target.value))}
          className='p-3 border border-green-400 text-m rounded-lg outline-none w-full lg:w-[25vw]' 
          type='search' 
          placeholder='search here' 
          autoComplete='off'
        />
      </div>
    </nav>
  );
}

export default Navbar;