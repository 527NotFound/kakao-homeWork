import React, { useState } from "react";
import styles from "../../../styles/Main/Card/card.module.css";

function Card({ title, desc, imageUrl, hoverImageUrl, textColorHover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt="default"
        className={styles.image}
        style={{ opacity: isHovered ? 0 : 1, position: "absolute", top: 0, left: 0 }}
      />
      <img
        src={hoverImageUrl}
        alt="hover"
        className={styles.image}
        style={{ opacity: isHovered ? 1 : 0, position: "absolute", top: 0, left: 0 }}
      />
      <div
        className={styles.textArea}
        style={{
          color: isHovered ? textColorHover : "#000",
          pointerEvents: isHovered ? "none" : "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}

export default Card;