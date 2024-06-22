import React from "react";
import "./MovieTable.css"; // 새로운 CSS 파일을 불러옵니다.

const MovieTable = ({ movies, currentPage, moviesPerPage }) => {
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="table-container">
      <div className="movie-table">
        <table>
          <thead>
            <tr>
              <th className="col-movie-name">영화명</th>
              <th className="col-movie-name-eng">영화명(영문)</th>
              <th className="col-production-year">제작연도</th>
              <th className="col-production-country">제작국가</th>
              <th className="col-type">유형</th>
              <th className="col-genres">장르</th>
              <th className="col-production-status">제작상태</th>
              <th className="col-directors">감독</th>
              <th className="col-production-company">제작사</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie) => (
              <tr key={movie.Movie_id}>
                <td className="col-movie-name">{movie.Movie_name}</td>
                <td className="col-movie-name-eng">{movie.Movie_name_eng}</td>
                <td className="col-production-year">{movie.Production_year}</td>
                <td className="col-production-country">
                  {movie.Production_country}
                </td>
                <td className="col-type">{movie.Type}</td>
                <td className="col-genres">{movie.Genres}</td>
                <td className="col-production-status">
                  {movie.Production_status}
                </td>
                <td className="col-directors">{movie.Directors}</td>
                <td className="col-production-company">
                  {movie.Production_company}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieTable;
