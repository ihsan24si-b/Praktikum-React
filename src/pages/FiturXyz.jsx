import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <PageHeader title="Fitur-xyz" breadcrumb="Fitur-xyz">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-all"
        >
          + Add New Fitur
        </button>
      </PageHeader>

     
    </div>
  );
}