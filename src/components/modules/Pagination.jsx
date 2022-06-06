import React, { useEffect, useState } from "react";

const createPagesArray = (totalPages) => {
  const emptyArray = new Array(totalPages).fill("");
  return emptyArray.map((item, index) => index + 1);
};

const Pagination = ({ page, setPage, totalPages }) => {
  const [pages, setPages] = useState(createPagesArray(totalPages));

  useEffect(() => {
    setPages(createPagesArray(totalPages));
  }, [totalPages]);

  const goToPage = (page) => setPage(page);

  return (
    <div className="mx-auto flex flex-wrap justify-center">
      {totalPages > 1 &&
        pages.map((pageNumber, index) => (
          <button
            className={`${
              pageNumber === page
                ? "bg-lime-500 hover:bg-lime-400 text-white"
                : "bg-white hover:bg-gray-200 text-gray-600"
            } font-bold p-2 m-2 rounded-full flex items-center justify-center w-10 h-10`}
            onClick={() => goToPage(pageNumber)}
            key={index}
          >
            {pageNumber}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
