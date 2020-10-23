import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import "./NewsList.css";

// 샘플데이터
const sampleArticle = {
  title: "제목입니다",
  description: "내용입니다",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // 최초 Mount될 때, category 상태값이 변경될 때마다 실행
  useEffect(() => {
    getArticles();
  }, [category]);

  const getArticles = async () => {
    setLoading(true);

    const query = category === "all" ? "" : "&category=" + category;

    const response = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=kr&apiKey=f02feaf849594e54be9c74d30ed6ef7e" +
        query
    );

    setArticles(response.data.articles);
    setLoading(false);
  };

  if (loading) {
    return <div className="NewsList">뉴스를 불러오는중...</div>;
  }

  return (
    <div className="NewsList">
      {articles &&
        articles.map((article, index) => {
          return <NewsItem key={index} article={article} />;
        })}
    </div>
  );
};

export default NewsList;
