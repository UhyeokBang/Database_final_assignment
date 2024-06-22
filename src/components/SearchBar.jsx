import React from "react";

const SearchBar = ({ searchParams, setSearchParams, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="영화명"
        value={searchParams.title}
        onChange={(e) =>
          setSearchParams({ ...searchParams, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="감독명"
        value={searchParams.director}
        onChange={(e) =>
          setSearchParams({ ...searchParams, director: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="제작연도 시작"
        value={searchParams.yearFrom}
        onChange={(e) =>
          setSearchParams({ ...searchParams, yearFrom: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="제작연도 종료"
        value={searchParams.yearTo}
        onChange={(e) =>
          setSearchParams({ ...searchParams, yearTo: e.target.value })
        }
      />
      <button onClick={handleSearch}>조회</button>
    </div>
  );
};

export default SearchBar;
