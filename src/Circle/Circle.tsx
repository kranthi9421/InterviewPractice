import React from 'react';

export const Circle = () => {
  const [show, setShow] = React.useState(true)
    return (
      <>
        <div
          className={`w-[300px] h-[300px] ${
            show ? "bg-slate-500" : "bg-red-500"
          }`}
        >
          <div
            className={`w-[100px] h-[100px] rounded-full ${
              show ? "bg-red-500" : "bg-slate-500"
            }`}
          ></div>
        </div>
        <button onClick={() => setShow(!show)}>Click</button>
      </>
    )
};

