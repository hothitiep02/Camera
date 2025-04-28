import React from "react";

const menuItems = [
  { name: "Cà phê sữa", price: 12000 },
  { name: "Cà phê đá", price: 10000 },
  { name: "Sting dâu", price: 8000 },
  { name: "Trà đá", price: 2000 },
];

export default function MenuForm() {
  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">MENU</h1>
      <div className="bg-white p-4 rounded-lg">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.name}</span>
            <span>{item.price.toLocaleString()}₫</span>
          </div>
        ))}
      </div>
    </div>
  );
}
