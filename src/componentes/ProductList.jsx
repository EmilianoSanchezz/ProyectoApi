import React, { useEffect, useState } from "react";
import { Paginacion } from "./paginacion";

export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {

    const onAddProduct = product => {
        setTotal(total + product.price)
        setCountProducts(countProducts + 1)
    setAllProducts([...allProducts, product]);
    
    };
    const [products, setProducts] = useState([]);
    const totalProduts = products.length
    const [productsPerPage, setProductsPerPag] = useState(6);
    const {currentPage, setCurrentPage} = useState(1);

    const productList = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
        setProducts(products);
    }

    useEffect(() => {
        productList();
    }, []);
    
    return (

        <>
    <div className="container-products">
        {products.map(product => (
            <div className="card-product" key={product.id}>
                <figure className="container-img">
                    <img src={product.image} alt={product.title} />
                </figure>
                <div className="info-product">
                    <h3>{product.title}</h3>
                    <p className="price">$ {product.price}</p>
                    <button onClick={() => onAddProduct(product)}>Añadir al Carrito</button>
                </div>
            </div>
        ))}
    </div>
    <Paginacion 
    productsPerPage = {productsPerPage}
    currentPage = {currentPage}
    setCurrentPage = {setCurrentPage}
    totalProduts = {totalProduts}
    />   
        </>
    
    )
}