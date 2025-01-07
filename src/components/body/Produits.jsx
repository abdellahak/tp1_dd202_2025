import React from "react";

function Produits(props) {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">products</h1>
      <ul>
        {props.products.map((product) => (
          <li key={product.id} className="border p-4 my-2 flex justify-between items-center">
            <span>{product.name}</span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </main>
  )
} 
export default Produits;