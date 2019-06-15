import React, { useState, useEffect } from "react";

import "./styles.css";
import Article from "../../components/Article";

export default function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const myFeeds = [
      {
        name: "Maykon Capellari",
        address: "Maringá",
        likes: 1000,
        image: "photos/photo1.jpg",
        description: "Parque do Japão - 2017",
        hashtags: ["#parquejapao", "#db1", "#top"]
      },
      {
        name: "Érika Capellari",
        address: "Maringá",
        likes: 9000,
        image: "photos/photo2.png",
        description: "React Top",
        hashtags: ["#react", "#instagram", "#top"]
      }
    ];

    setTimeout(() => {
      setFeeds(myFeeds);
    }, 3000);
  }, []);

  useEffect(() => {
    const pattern = RegExp(`(${search})`, "i");
    const data =
      search === "" ? feeds : feeds.filter(f => f.name.match(pattern));
    setFiltered(data);
  }, [feeds, search]);

  return (
    <section id="post-list">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Pesquisar pelo nome"
      />
      {!feeds.length && <div id="loading">Loading...</div>}
      {filtered.map((feed, index) => (
        <Article key={index} feed={feed} />
      ))}
    </section>
  );
}
