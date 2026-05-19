export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left">
        <thead className="bg-gray-100 text-sm uppercase tracking-wide text-gray-500">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border-b px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">{children}</tbody>
      </table>
    </div>
  );
}
