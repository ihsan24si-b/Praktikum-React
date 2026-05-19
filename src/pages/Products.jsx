import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productData from "../data/Products.json";

export default function Products() {
  return (
    <div className="p-4">
      <PageHeader title="Products" breadcrumb="Product List" />

      <div className="mt-6 bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 uppercase text-[10px] text-gray-400 font-bold">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">{product.id}</td>
                <td className="p-4">
                  <Link to={`/products/${product.id}`} className="text-emerald-400 hover:text-emerald-600 font-semibold">
                    {product.title}
                  </Link>
                </td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.brand}</td>
                <td className="p-4">Rp{product.price.toLocaleString()}</td>
                <td className="p-4">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
