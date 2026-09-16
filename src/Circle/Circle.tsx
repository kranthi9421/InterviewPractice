import { useState } from "react";

export const Circle = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: show ? "gray" : "red",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: show ? "red" : "gray",
          }}
        />
      </div>

      <button onClick={() => setShow((prev) => !prev)}>
        Click
      </button>
    </>
  );
};

