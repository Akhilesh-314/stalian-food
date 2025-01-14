import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const selector = useSelector((state) => {
        return state.cart.cart;

    });

    const totalqty = selector.reduce((totalqty, item) => totalqty + item.qty, 0
    );

    const total = selector.reduce((total, item) => total + item.qty*item.price, 0
    );

    const [activeCart, setActiveCart] = useState(false);
    const navigate=useNavigate();
    return (
        <>
            <div
                className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-40`}>
                <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-bold text-gray-800">My Order</span>
                    <IoMdClose onClick={() => setActiveCart(!activeCart)}
                        className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
                    />
                </div>
                {selector.length > 0 ? selector.map((food) => {
                    return <ItemCard key={food.id} id={food.id}
                        name={food.name}
                        price={food.price}
                        img={food.img}
                        qty={food.qty} />
                }) : <h2 className="text-center text-xl font-bold text-gray-800">
                    Your cart is empty
                </h2>}

                <div className="absolute bottom-0 ">
                    <h3 className="font-semibold text-gray-800">Items :{totalqty}</h3>
                    <h3 className="font-semibold text-gray-800">
                        Total Amount :{total}
                    </h3>
                    <hr className="w-[90vw] lg:w-[18vw] my-2" />
                    <button  onClick={() => navigate("/success")}
                        className={`font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 ${totalqty > 0 ? "bg-green-500" : "bg-gray-400"}`}

                    > 
                        Checkout
                    </button>
                </div>
            </div>
            <div onClick={() => setActiveCart(!activeCart)} className='rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-6 right-4'>
                {totalqty > 0 && <div className='absolute bottom-8 right-7 bg-red-500 text-white text-xs font-bold rounded-full px-3 py-0.5 transform translate-x-1/2 -translate-y-1/2 border border-white'>{totalqty}</div>}

                <FaShoppingCart />
            </div>
        </ >

    )
}

export default Cart
