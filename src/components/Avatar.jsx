export default function Avatar({ name }) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-bold text-gray-700">
      {initial}
    </div>
  );
}
