import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import "./News.css";
export default function News() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&page=3&pagesize=9from=2023-12-20&sortBy=publishedAt&apiKey=1570526163c94bd6b2fd247c4bf3a87b`
    );
    const response = await data.json();
    setData(response.articles);
  };
  useEffect(() => {
    fetchData();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter search query"
          className="input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btnn">Search</button>
      </form>
      <div className="main">
        {data ? (
          <ul className="container">
            {data.map((item, index) => (
              <Newsitem
                key={index}
                title={item.title}
                description={item.description}
                img={item.urlToImage}
                url={item.url}
              />
            ))}
          </ul>
        ) : (
          <div>
            <h1>Please enter a query to make a search</h1>
          </div>
        )}
      </div>
    </>
  );
}
