import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
        console.warn(result);
    };

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li style={{backgroundColor:'skyblue'}}>S.No</li>
                <li style={{backgroundColor:'skyblue'}}>Name</li>
                <li style={{backgroundColor:'skyblue'}}>Price</li>
                <li style={{backgroundColor:'skyblue'}}>Category</li>
            </ul>
            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }

            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
            {
                products.map((item,index) =>
                    <ul >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>₨{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
            
        </div >
    );
}
export default ProductList;