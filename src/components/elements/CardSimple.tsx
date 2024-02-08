import React from "react";


export default function CardSimple() {
  return (
    <div
      className="max-w-sm
      bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        alt="Meaningful alt text for an image that is not purely decorative"
        src="/red-train.jpg"
      />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Weltrekord</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span>
            Stadler unterstützt die Rhätische Bahn (RhB) beim Weltrekord für den
            längsten Reisezug der Welt. 25 Capricorn-Triebzüge von Stadler
            bilden eine 1.9 Kilometer lange Komposition.
          </span>
        </p>
      </div>
    </div>
  );
}
