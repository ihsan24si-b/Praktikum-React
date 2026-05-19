import { Link, useParams } from "react-router-dom";
import productData from "../data/Products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h2>
        <Link to="/products" className="text-emerald-500 hover:underline">
          Kembali ke daftar produk
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-500">Kode: {product.code}</p>
        </div>
        <Link to="/products" className="text-sm text-emerald-500 hover:underline">
          ← Kembali ke daftar produk
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-2">Kategori</p>
            <p className="text-lg font-semibold mb-4">{product.category}</p>

            <p className="text-gray-600 mb-2">Brand</p>
            <p className="text-lg font-semibold mb-4">{product.brand}</p>

            <p className="text-gray-600 mb-2">Harga</p>
            <p className="text-lg font-semibold mb-4">Rp{product.price.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-gray-600 mb-2">Stok</p>
            <p className="text-lg font-semibold mb-4">{product.stock} pcs</p>

            <p className="text-gray-600 mb-2">Deskripsi singkat</p>
            <p className="text-gray-800">Produk {product.title} dari brand {product.brand} cocok untuk pengguna yang mencari kualitas dan performa terbaik di kelasnya.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
