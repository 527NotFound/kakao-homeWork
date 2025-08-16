import styles from "../../styles/Buttons/bannerArrowButton.module.css";

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      className={`${styles.arrow} ${styles[direction]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "이전 슬라이드" : "다음 슬라이드"}
    >
      {direction === "left" ? <span>&lt;</span> : <span>&gt;</span>}
    </button>
  );
}

export default ArrowButton;