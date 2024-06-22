import React from "react";

const MovieTable = ({ movies, currentPage, moviesPerPage }) => {
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="movie-table">
      <table>
        <thead>
          <tr>
            <th>영화명</th>
            <th>영화명(영문)</th>
            <th>제작연도</th>
            <th>제작국가</th>
            <th>유형</th>
            <th>장르</th> {/* 장르 컬럼 추가 */}
            <th>제작상태</th>
            <th>감독</th>
            <th>제작사</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map((movie) => (
            <tr key={movie.Movie_id}>
              <td>{movie.Movie_name}</td>
              <td>{movie.Movie_name_eng}</td>
              <td>{movie.Production_year}</td>
              <td>{movie.Production_country}</td>
              <td>{movie.Type}</td>
              <td>{movie.Genres}</td> {/* 장르 데이터 추가 */}
              <td>{movie.Production_status}</td>
              <td>{movie.Directors}</td>
              <td>{movie.Production_company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
