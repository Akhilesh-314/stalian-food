import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/data'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';



const FoodItems = () => {
  const handleToast=(name)=>toast.success(`Added ${name} to cart`)
  const selector=useSelector((state)=>state.category.Category)
  const search=useSelector((state)=>state.search.search)

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <div className="flex flex-wrap gap-12 justify-center lg:justify-center items-center mx-10 my-10">
      {FoodData.filter((food)=>{
        if (selector==="All"){
          return food.name.toLowerCase().includes(search.toLowerCase())
        }
        else return selector===food.category &&

           food.name.toLowerCase().includes(search.toLowerCase()) ;       
      }).map((food)=>{
        return   <FoodCard
        key={food.id}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        handleToast={handleToast}
        veg={food.vegetarian}
      />
      })}



        {/* {FoodData.map((food)=>{
          return   <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          handleToast={handleToast}
        />
        })} */}
      
    </div>
    </>
  )
}

export default FoodItems
