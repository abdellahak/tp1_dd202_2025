import React from "react";

function ListArticles(props) {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List Articles</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Id</th>
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-2 px-4 border-r">{product.id}</td>
              <td className="py-2 px-4 border-r">{product.name}</td>
              <td className="py-2 px-4">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
export default ListArticles;
