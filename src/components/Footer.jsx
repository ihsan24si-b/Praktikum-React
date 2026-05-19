export default function Footer() {
  return (
    <footer className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">MyApp</h3>
        <p className="text-sm text-slate-300">Aplikasi sederhana berbasis React.</p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Produk</a>
          <a href="#" className="hover:text-white">Kontak</a>
        </div>
        <p className="text-xs text-slate-500">© 2026 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
