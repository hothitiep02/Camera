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
        ? prevSelected.filter((item) => item !== itemName)
        : [...prevSelected, itemName]
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
      setCurrentMoney("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">MENU</h1>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Nhập số tiền hiện tại (₫):
            </label>
            <input
              type="number"
              value={currentMoney}
              onChange={(e) => setCurrentMoney(e.target.value)}
              className="form-control"
              placeholder="VD: 50000"
            />
          </div>

          <div className="list-group mb-3">
            {menuItems.map((item, index) => (
              <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedItems.includes(item.name)}
                    onChange={() => handleCheckboxChange(item.name)}
                    id={`item-${index}`}
                  />
                  <label className="form-check-label ms-2" htmlFor={`item-${index}`}>
                    {item.name}
                  </label>
                </div>
                <span>{item.defaultPrice.toLocaleString()}₫</span>
              </div>
            ))}
          </div>

          <div className="d-grid">
            <button
              onClick={handlePayment}
              className="btn btn-warning"
            >
              Thanh toán
            </button>
          </div>

          {message && (
            <div className="alert alert-info text-center mt-4" role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
