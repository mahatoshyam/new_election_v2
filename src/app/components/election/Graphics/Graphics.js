'use client';

import useSWR from 'swr'

export default async function Graphics() {
    // let product = await fetch('https://dummyjson.com/products/1');
    // product = await product.json();
    
    const fetcher = () => fetch('https://dummyjson.com/products/1').then(res => res.json())
    let {data} = await useSWR('https://dummyjson.com/products/1', fetcher);
    let product = data;
    
    console.log(product);

    return (
        <>
        <h1>Graphics</h1>
        <p>{product?.title}</p>
        </>
    );
}

// async function getProducts(){
//     let products = await fetch('https://dummyjson.com/products/1');
//     products = await products.json();
//     console.log(products);
//     return products;
// }