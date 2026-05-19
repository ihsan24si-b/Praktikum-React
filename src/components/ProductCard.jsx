import Card from "./Card";

export default function ProductCard({ image, title, category, price, description }) {
  return (
    <Card>
      <div className="overflow-hidden rounded-t-3xl">
        <img src={image} alt={title} className="h-52 w-full object-cover" />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">{category}</span>
        <h3 className="mt-4 text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <h4 className="text-xl font-semibold text-blue-600">{price}</h4>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">Detail</button>
        </div>
      </div>
    </Card>
  );
}
