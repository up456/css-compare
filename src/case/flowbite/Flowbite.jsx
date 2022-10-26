import React from "react";

function Flowbite() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-indigo-300">
      <label className="accent-indigo-600">
        <input type="checkbox" />
        Tailwind 라벨
      </label>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        flowbite 버튼
      </button>
    </div>
  );
}

export default Flowbite;
