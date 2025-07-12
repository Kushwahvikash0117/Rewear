import React from 'react'
import { useState } from 'react';
export const Navbar = () => {
    const [page, setPage] = useState("home");

  const getBtnClass = (target) =>
    `px-4 py-2 rounded-full ${page === target
      ? "bg-[#D94F4F] text-white"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;
  return (
    <div className="min-h-screen">
        {/* Navigation Bar */}
        <nav className="p-4 flex justify-center gap-4 bg-white shadow sticky top-0 z-10">
          <button onClick={() => setPage("home")} className={getBtnClass("home")}>
            Home
          </button>
          <button onClick={() => setPage("listings")} className={getBtnClass("listings")}>
            My Listings
          </button>
          <button onClick={() => setPage("swap")} className={getBtnClass("swap")}>
            Swap Requests
          </button>
        </nav>
      </div>
  )
}
