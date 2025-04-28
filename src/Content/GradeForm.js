import React, { useState } from 'react';

function GradeForm() {
  const [math, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [average, setAverage] = useState(null);
  const [grade, setGrade] = useState('');

  const calculateGrade = () => {
    const mathScore = parseFloat(math);
    const physicsScore = parseFloat(physics);

    if (isNaN(mathScore) || isNaN(physicsScore)) {
      alert('Vui lòng nhập đúng số!');
      return;
    }

    const avg = (mathScore + physicsScore) / 2;
    setAverage(avg);

    if (avg >= 9) {
      setGrade('Xuất sắc');
    } else if (avg >= 8) {
      setGrade('Giỏi');
    } else if (avg >= 7) {
      setGrade('Khá');
    } else if (avg >= 5) {
      setGrade('Trung bình');
    } else {
      setGrade('Yếu');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Nhập điểm Toán và Lý</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Điểm Toán"
          value={math}
          onChange={(e) => setMath(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Điểm Lý"
          value={physics}
          onChange={(e) => setPhysics(e.target.value)}
          style={{ padding: '8px' }}
        />
      </div>

      <button onClick={calculateGrade} style={{ padding: '8px 16px', fontSize: '16px' }}>
        Tính điểm trung bình
      </button>

      {average !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Điểm trung bình: {average.toFixed(2)}</h3>
          <h3>Xếp loại: {grade}</h3>
        </div>
      )}
    </div>
  );
}

export default GradeForm;
