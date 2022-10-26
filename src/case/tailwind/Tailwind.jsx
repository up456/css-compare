import React from "react";

function Tailwind() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-pink-200">
      <label className="accent-slate-700">
        <input type="checkbox" />
        Tailwind 라벨
      </label>
      {/* <label className="accent-mainTheme">
        <input type="checkbox" />
        Tailwind 라벨
      </label> */}
      <button className="bg-slate-700 text-lime-100 cursor-pointer">
        Tailwind 버튼
      </button>
      {/* <button className="bg-slate-700 text-lime-100 cursor-pointer primary-btn">
        Tailwind 버튼
      </button> */}
    </div>
  );
}

export default Tailwind;
