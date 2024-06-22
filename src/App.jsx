import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieTable from "./components/MovieTable";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [searchParams, setSearchParams] = useState({
    title: "",
    director: "",
    yearFrom: "",
    yearTo: "",
  });
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/movies?title=${searchParams.title}&director=${searchParams.director}&yearFrom=${searchParams.yearFrom}&yearTo=${searchParams.yearTo}`
      );
      const data = await response.json();
      console.log("Fetched Movies:", data); // 응답 데이터를 확인합니다.
      setMovies(data);
      setFilteredMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = () => {
    fetchMovies();
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleSearch={handleSearch}
      />
      <MovieTable
        movies={filteredMovies}
        currentPage={currentPage}
        moviesPerPage={moviesPerPage}
      />
      <Pagination
        totalMovies={filteredMovies.length}
        moviesPerPage={moviesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
