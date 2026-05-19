import { useMemo } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

export default function Components() {
  const tableHeaders = useMemo(() => ["No", "Nama Produk", "Kategori", "Harga", "Aksi"], []);
  const tableData = useMemo(
    () => [
      { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
      { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
      { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" },
    ],
    []
  );

  return (
    <div className="p-4">
      <PageHeader title="Components" breadcrumb="Component Playground" />

      <Container className="bg-slate-50 rounded-3xl p-6 shadow-sm mt-6">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Daftar Component</h3>
            <nav className="space-y-2 text-sm text-gray-600">
              <a href="#basic" className="block rounded-xl px-3 py-2 hover:bg-gray-100">Basic Component</a>
              <a href="#layout" className="block rounded-xl px-3 py-2 hover:bg-gray-100">Layout Component</a>
              <a href="#data-display" className="block rounded-xl px-3 py-2 hover:bg-gray-100">Data Display Component</a>
            </nav>
          </aside>

          <main className="space-y-10">
            <section id="basic" className="space-y-4">
              <h2 className="text-2xl font-bold">1. Basic Component</h2>
              <p className="text-gray-600">Basic component adalah komponen kecil dan sederhana yang sering digunakan berulang di banyak halaman.</p>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold">Button</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button>Simpan</Button>
                    <Button type="secondary">Edit</Button>
                    <Button type="danger">Hapus</Button>
                  </div>
                  <pre className="overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-white">{`<Button type="success">Simpan</Button>
<Button type="danger">Hapus</Button>`}</pre>
                </div>

                <div className="space-y-3 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold">Badge</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Aktif</Badge>
                    <Badge type="secondary">Pending</Badge>
                    <Badge type="danger">Selesai</Badge>
                    <Badge type="warning">Baru</Badge>
                  </div>
                  <pre className="overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-white">{`<Badge>Aktif</Badge>
<Badge type="danger">Hapus</Badge>`}</pre>
                </div>

                <div className="space-y-3 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold">Avatar</h3>
                  <div className="flex items-center gap-4">
                    <Avatar name="Budi" />
                    <Avatar name="Siti" />
                  </div>
                  <pre className="overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-white">{`<Avatar name="Budi" />
<Avatar name="Siti" />`}</pre>
                </div>
              </div>
            </section>

            <section id="layout" className="space-y-4">
              <h2 className="text-2xl font-bold">2. Layout Component</h2>
              <p className="text-gray-600">Layout component digunakan untuk menyusun struktur besar halaman.</p>
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">Container</h3>
                    <p className="text-gray-600 mb-4">Container digunakan untuk menjadi pembungkus terluar dari suatu halaman.</p>
                    <div className="rounded-xl bg-slate-100 p-4 text-sm text-gray-700">&lt;Container className=&quot;...&quot;&gt;{`...`} &lt;/Container&gt;</div>
                  </div>
                </Card>
                <Card>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">Footer</h3>
                    <p className="text-gray-600 mb-4">Footer menjadi komponen penutup halaman.</p>
                    <Footer />
                  </div>
                </Card>
              </div>
            </section>

            <section id="data-display" className="space-y-4">
              <h2 className="text-2xl font-bold">3. Data Display Component</h2>
              <p className="text-gray-600">Data display component digunakan untuk menampilkan informasi atau data kepada pengguna.</p>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">Card</h3>
                    <p className="text-gray-600 mb-4">Card digunakan sebagai pembungkus informasi.</p>
                    <div className="rounded-xl border border-dashed border-gray-200 p-4 text-sm text-gray-600">&lt;Card&gt;...&lt;/Card&gt;</div>
                  </div>
                </Card>
                <ProductCard
                  image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                  title="Sepatu Sport"
                  category="Fashion"
                  price="Rp 450.000"
                  description="Sepatu sportif modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
                />
                <Card>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">Table</h3>
                    <p className="text-gray-600 mb-4">Table digunakan untuk menampilkan data dalam bentuk tabel.</p>
                    <Table headers={tableHeaders}>
                      {tableData.map((product, index) => (
                        <tr key={product.id} className="border-t border-gray-100 hover:bg-gray-50">
                          <td className="border px-4 py-3 text-left">{index + 1}</td>
                          <td className="border px-4 py-3 text-left">{product.name}</td>
                          <td className="border px-4 py-3 text-left">{product.category}</td>
                          <td className="border px-4 py-3 text-left">{product.price}</td>
                          <td className="border px-4 py-3 text-left"><Button type="secondary">Detail</Button></td>
                        </tr>
                      ))}
                    </Table>
                  </div>
                </Card>
              </div>
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}
