import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 2, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((item) => counterId !== item.id));
  };

  const handleIncrement = (counterId) => {
    const updatedCounters = [...counters];
    const itemIndex = updatedCounters.findIndex(
      (count) => count.id === counterId
    );
    updatedCounters[itemIndex].value++;
    setCounters(updatedCounters);
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = [...counters];
    const itemIndex = updatedCounters.findIndex(
      (count) => count.id === counterId
    );
    if (updatedCounters[itemIndex].value > 0) {
      updatedCounters[itemIndex].value--;
    }
    setCounters(updatedCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
