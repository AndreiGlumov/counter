import React from "react";

const Counter = ({
  id,
  value,
  name,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  const tags = [];

  const formValue = () => {
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
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

  return (
    <div>
      <h4>{name}</h4>
      {/* {tags.length === 0 && "Теги не найдены"} */}
      {renderTags()}
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Icrement
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
