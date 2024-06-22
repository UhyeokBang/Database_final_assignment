import React from "react";

const Pagination = ({
  totalMovies,
  moviesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
        &laquo;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
        }
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
