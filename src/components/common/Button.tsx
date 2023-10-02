import React from "react";

export default function Button({ ButtonClass, title, onClick }: Button) {
  return (
    <button onClick={onClick} className={`btn ${ButtonClass}`}>
      {title}
    </button>
  );
}
