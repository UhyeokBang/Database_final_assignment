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

  const totalPageNumbers = pageNumbers.length;
  const maxPageButtons = 10;
  const currentSection = Math.ceil(currentPage / maxPageButtons);
  const startPage = (currentSection - 1) * maxPageButtons + 1;
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPageNumbers);

  const handleNextSection = () => {
    const nextSectionPage = startPage + maxPageButtons;
    setCurrentPage(Math.min(nextSectionPage, totalPageNumbers));
  };

  const handlePreviousSection = () => {
    const prevSectionPage = startPage - maxPageButtons;
    setCurrentPage(Math.max(prevSectionPage, 1));
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePreviousSection}
        disabled={currentPage <= maxPageButtons}
      >
        &laquo;
      </button>
      {pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      <button
        onClick={handleNextSection}
        disabled={currentPage > totalPageNumbers - maxPageButtons}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
