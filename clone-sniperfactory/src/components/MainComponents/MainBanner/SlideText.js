import React from "react";
import styles from "../../../styles/Main/MainBannerStyles/slideText.module.css";

function SlideText({ title, description }) {
  const lines = Array.isArray(title)
    ? title
    : String(title).split('\n');

  return (
    <div className={styles.textBox}>
      <h2 className={styles.title}>
        {lines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default SlideText;