import { useEffect, useState } from "react";

const colors = [
  { color: "red", dur: 5000 },
  { color: "yellow", dur: 2000 },
  { color: "green", dur: 5000 },
];

export const Traffic = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % colors.length);
    }, colors[active].dur);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div
      style={{
        width: "200px",
        height: "500px",
        backgroundColor: "black",
      }}
    >
      {colors.map((color, index) => (
        <div
          key={color.color}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor:
              index === active ? color.color : "gray",
          }}
        />
      ))}
    </div>
  );
};