import React, { useState, useEffect } from 'react';
export default function ShoppingCart() {
    let products = [
        { id: 1, name: "Chocalate cake", price: 150, image: "/ecom-react/images/chocalte.jpg" },
        { id: 2, name: "Butterscotch cake", price: 300, image: "/ecom-react/images/butterscotch.jpg" },
        { id: 3, name: "Pineapple cake", price: 400, image: "/ecom-react/images/pineapple.jpg" },
        { id: 4, name: "Strawberry cake", price: 600, image: "/ecom-react/images/strawberry cake.jpg" },
        { id: 5, name: "Tiramasu", price: 700, image: "/ecom-react/images/tiramisu.jpg" },
        { id: 6, name: "Velvet cake", price: 450, image: "/ecom-react/images/velvet.jpg" },
    ];

    const [cart, setCart] = useState({});
    const [orderValue, setOrderValue] = useState(0);

    const addtoCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    };

    const updateCart = (id, qty) => {
        if (qty === 0) {
            const updatedCart = { ...cart };
            delete updatedCart[id];
            setCart(updatedCart);
        } else {
            setCart((prev) => ({ ...prev, [id]: qty }));
        }
    };

    useEffect(() => {
        setOrderValue(
            products.reduce((total, value) => {
                return total + value.price * (cart[value.id] ?? 0);
            }, 0)
        );
    }, [cart, products]);

    return (
        <>
            <div>
                <center><h1>Bakery</h1></center>
                <div className='main1'>
                    {products.map((value) => (
                        <div key={value.id} className="container">
                            <div><img src={value.image} width={175} height={150} alt={value.name}></img></div>
                            <div>{value.name}</div>
                            <div>{value.price}</div>
                            <div><button onClick={() => addtoCart(value.id)}>ADD</button></div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {Object.keys(cart).map((id) => {
                    const product = products.find((p) => p.id === parseInt(id));
                    return (
                        <div key={id}>
                            <div><img src={product.image} width={175} height={150} alt={product.name}></img></div>
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <button onClick={() => updateCart(product.id, cart[id] - 1)}>-</button>
                            <span>{cart[id]}</span>
                            <button onClick={() => updateCart(product.id, cart[id] + 1)}>+</button>
                        </div>
                    );
                })}
            </div>
            <div>Order Value: {orderValue}</div>
        </>
    );
}
