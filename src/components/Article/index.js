import React from "react";

import "./styles.css";
import more from "../../assets/more.svg";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";

export default function Article({ feed }) {
  return (
    <article>
      <header>
        <div className="user-info">
          <span>{feed.name}</span>
          <address>{feed.address}</address>
        </div>
        <img src={more} alt="Mais" />
      </header>
      <img src={`${window.location.href}${feed.image}`} alt="Foto" />
      <footer>
        <div className="actions">
          <img src={like} alt="" />
          <img src={comment} alt="" />
          <img src={send} alt="" />
        </div>

        <strong>{feed.likes} curtidas</strong>

        <p>
          {feed.description}
          <span>{feed.hashtags.join(" ")}</span>
        </p>
      </footer>
    </article>
  );
}
