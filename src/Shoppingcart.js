import React from 'react'
import {useState, useMemo} from "react";

export default function ShoppingCart() {
    let products=[
        {name:"Chocalate cake", price:150,  image:"/ecom-react/images/chocalte.jpg"},
        {name:"Butterscotch cake", price:300,  image:"/ecom-react/images/butterscotch.jpg"},
        {name:"Pineapple cake", price:400, image:"/ecom-react/images/pineapple.jpg"},
        {name:"Strawberry cake", price:600, image:"/ecom-react/images/strawberry cake.jpg"}, 
        {name:"Tiramasu", price:700, image:"/ecom-react/images/tiramisu.jpg"},
        {name:"Velvet cake", price:450, image:"/ecom-react/images/velvet.jpg"},
    ];


    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);

    const addCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    }
    
    return (
        <>
            <div>
                <center><h1>Bakery</h1></center>
                <div className='main1'>
                    {products.map((value,index)=>(
                    <div key={index} class="container">
                    <div><img src={value.image} width={175} height={150}></img></div>
                    <div id="fname">{value.name}</div>
                    <div>{value.price}</div>
                    <div><button id="btn" onClick={() => addCart(value)}>ADD</button></div>
                    </div> 
                    ))
                    }
                    </div>
                </div>
            <div>
                {cart &&
                cart.map((value, index) => (
                <div key={index}>
                    <div><img src={value.image} width={175} height={150}></img></div>
                    <div id="fname">{value.name}</div>
                    <div>{value.price}</div>
                    <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
                </div>
                ))}
            </div>
        </>
    )
}
