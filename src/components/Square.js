import React, { useState } from "react";


const Square = ({value, onSquareClick}) => {

  

  return (
    <>
      <div>
        <button className="bg-white border border-gray-400 float-left text-2xl font-bold leading-[34px] h-[34px] -mt-px -mr-px p-0 text-center w-[34px]"
        onClick={onSquareClick}
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default Square;
