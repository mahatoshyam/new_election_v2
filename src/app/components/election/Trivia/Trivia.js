import style from './trivia.module.css';

export default async function Trivia() {
    const products = await getData();

    return (
        <>
            <h1>Trivia</h1>
            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}

            <hr />
        </>
    );
}

async function getData() {
    let res = await fetch('https://dummyjson.com/products');
    let products = await res.json();
    products = products['products']

    return products;
}