import React, { useEffect, useState } from 'react';
import FoodData from '../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { SetCategory } from '../redux/Slices/CategorySlice';

const CategoryMenu = () => {
  const [Categories, setCategories] = useState([]);

  const listCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listCategories();
  }, []);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.category.Category);

  return (
    <div className="mx-20 flex items-center flex-col justify-center">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-6 flex gap-3 overflow-x-auto scroll-smooth whitespace-nowrap">
        <button
          onClick={() => dispatch(SetCategory("All"))}
          className={`px-3 py-2 bg-green-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            "All" === selector && "text-white bg-green-500"
          }`}
        >
          All
        </button>
        {Categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(SetCategory(category))}
              key={index}
              className={`px-3 py-2 bg-green-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                category === selector && "text-white bg-green-500"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
