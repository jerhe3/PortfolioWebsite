import React from "react";

function PortfolioItem({ title, imgUrl, description, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full hh-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="flex flex-col justify-between">
        <div className="w-full p-4">
          <h3 className="text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="text-sm dark:text-white md:text-md md-1 md:mb-2">
            {description}
          </p>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
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
