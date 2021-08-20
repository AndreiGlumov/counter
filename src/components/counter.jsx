import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = [];

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => (
      <li className="m-2" key={tag}>
        {tag}
      </li>
    ));
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = (productId) => {
    console.log(productId);
    if (count <= 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      {tags.length === 0 && "Теги не найдены"}
      {renderTags()}
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Icrement
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
