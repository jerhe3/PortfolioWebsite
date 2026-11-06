import React from "react";

function PortfolioItem({ title, imgUrl, description, awards = [], stack, link }) {
  const isWinner = awards.length > 0;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative border-2 rounded-md overflow-hidden ${
        isWinner
          ? "border-amber-400 shadow-lg shadow-amber-400/30"
          : "border-stone-900 dark:border-white"
      }`}
    >
      {isWinner && (
        <span className="absolute top-2 left-2 px-2 py-1 text-xs font-bold text-amber-950 bg-amber-400 rounded-md shadow">
          🏆 Winner
        </span>
      )}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="flex flex-col justify-between">
        <div className="w-full p-4">
          <h3 className="text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="text-sm dark:text-white md:text-base mb-2">
            {description}
          </p>
          {isWinner && (
            <ul className="flex flex-col gap-1 mb-3">
              {awards.map((award) => (
                <li
                  key={award}
                  className="text-xs md:text-sm font-semibold px-2 py-1 rounded-md border border-amber-400 bg-amber-50 text-amber-900 dark:bg-amber-400/10 dark:text-amber-300"
                >
                  {award}
                </li>
              ))}
            </ul>
          )}
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span
                key={item}
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
