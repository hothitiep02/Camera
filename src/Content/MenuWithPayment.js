import React, { useState } from "react";

const menuItems = [
  { name: "Cà phê sữa", defaultPrice: 12000 },
  { name: "Cà phê đá", defaultPrice: 10000 },
  { name: "Sting dâu", defaultPrice: 8000 },
  { name: "Trà đá", defaultPrice: 2000 },
];

export default function MenuWithPayment() {
  const [currentMoney, setCurrentMoney] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (itemName) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemName)
        ? prevSelected.filter((item) => item !== itemName) // bỏ chọn
        : [...prevSelected, itemName] // chọn thêm
    );
  };

  const handlePayment = () => {
    let total = 0;
    selectedItems.forEach((itemName) => {
      const item = menuItems.find((item) => item.name === itemName);
      total += item.defaultPrice;
    });

    if (Number(currentMoney) >= total) {
      setMessage(`Thanh toán thành công! Tổng tiền: ${total.toLocaleString()}₫`);
    } else {
      setMessage(
        `Không đủ tiền! Tổng cần: ${total.toLocaleString()}₫. Vui lòng nhập lại số tiền.`
      );
      setCurrentMoney(""); // bắt nhập lại
    }
  };

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">MENU</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Nhập số tiền hiện tại (₫):</label>
        <input
          type="number"
          value={currentMoney}
          onChange={(e) => setCurrentMoney(e.target.value)}
          className="w-full border p-2 rounded-md"
          placeholder="VD: 50000"
        />
      </div>

      <div className="bg-white p-4 rounded-lg">
        {menuItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b py-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
              />
              {item.name}
            </label>
            <span>{item.defaultPrice.toLocaleString()}₫</span>
          </div>
        ))}
      </div>

      <button
        onClick={handlePayment}
        style={{
          width: "15%",
          backgroundColor: "orange",
          color: "white",
          padding: "10px",
          marginTop: "24px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Thanh toán
      </button>

      {message && (
        <div className="mt-4 text-center font-semibold text-red-600">
          {message}
        </div>
      )}
    </div>
  );
}
