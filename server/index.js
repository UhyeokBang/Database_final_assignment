// server/index.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // MySQL 사용자 이름
  password: "password", // MySQL 비밀번호
  database: "movie_db", // 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed: ", err.stack);
    return;
  }
  console.log("DB connected.");
});

// 영화 데이터 검색 API 엔드포인트
app.get("/api/movies", (req, res) => {
  const { title, director, yearFrom, yearTo } = req.query;
  let query = `
    SELECT 
      Movie.Movie_id,
      Movie.Movie_name,
      Movie.Movie_name_eng,
      Movie.Production_year,
      Movie.Production_country,
      Movie.Type,
      Movie.Production_status,
      Movie.Production_company,
      GROUP_CONCAT(DISTINCT Director.Director_name) AS Directors,
      GROUP_CONCAT(DISTINCT Genre.Genre_name) AS Genres
    FROM Movie
    LEFT JOIN Movie_Director ON Movie.Movie_id = Movie_Director.Movie_id
    LEFT JOIN Director ON Movie_Director.Director_id = Director.Director_id
    LEFT JOIN Genre ON Movie.Movie_id = Genre.Movie_id
    WHERE 1=1
  `;

  const params = [];

  if (title) {
    query += " AND Movie.Movie_name LIKE ?";
    params.push(`${title}%`);
  }

  if (director) {
    query += " AND Director.Director_name LIKE ?";
    params.push(`${director}%`);
  }

  if (yearFrom) {
    query += " AND Movie.Production_year >= ?";
    params.push(yearFrom);
  }

  if (yearTo) {
    query += " AND Movie.Production_year <= ?";
    params.push(yearTo);
  }

  query += " GROUP BY Movie.Movie_id";

  db.query(query, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
