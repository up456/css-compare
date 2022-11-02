import React from "react";

function Tailwind() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-pink-200">
      <label className="accent-slate-700">
        <input type="checkbox" />
        Tailwind 라벨
      </label>

      <button className="bg-slate-700 text-lime-100 cursor-pointer">
        Tailwind 버튼
      </button>

      <button
        type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        flowbite 버튼
      </button>

      {/* <label className="accent-mainTheme">
        <input type="checkbox" />
        Tailwind 라벨
      </label> */}
      <button className="bg-slate-700 text-lime-100 cursor-pointer primary-btn mouse-effect">
        Tailwind 버튼
      </button>
    </div>
  );
}

export default Tailwind;
