import React, { useState } from "react";

// Child Node
import ArrowButton from "../../Buttons/BannerArrowButton";
import SlideText from "./SlideText";

// CSS Style
import styles from "../../../styles/Main/MainBannerStyles/largeSlideBanner.module.css";

const slides = [
  {
    title: ["올인원마케팅 인턴십", "사전모집 신청!"],
    description: "마케터 커리어에 필요한 직무가 모두 여기에!",
    image: "https://i.pinimg.com/736x/17/a3/ad/17a3add0702c61ae399c27a8ecdcfbbc.jpg",
  },
  {
    title: ["기다리고 계신 교육이 있으신가요?", "신청 소식을 가장 먼저 알려드릴게요."],
    description: "다양한 강의를 빠르게 받아보세요.",
    image: "https://i.pinimg.com/736x/3a/f7/38/3af738b281f130d4daf2c99fd7f5b959.jpg",
  },
];

export default function ImageSlider() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  function changeSlide(newIdx, dir) {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setSlideIdx(newIdx);
      setIsAnimating(false);
    }, 400);
  }
  function prevSlide() {
    const newIdx = slideIdx === 0 ? slides.length - 1 : slideIdx - 1;
    changeSlide(newIdx, "left");
  }
  function nextSlide() {
    const newIdx = slideIdx === slides.length - 1 ? 0 : slideIdx + 1;
    changeSlide(newIdx, "right");
  }

  const nextIndex = direction === "right"
    ? (slideIdx + 1) % slides.length
    : (slideIdx - 1 + slides.length) % slides.length;

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slideBox}>
        <div className={styles.slideTrack}>
          {/* 현재 슬라이드 */}
          <div
            className={`${styles.slide} ${isAnimating ? styles[`exit${direction}`] : ""}`}
            key={slideIdx}
          >
            <SlideText
              title={slides[slideIdx].title}
              description={slides[slideIdx].description}
            />
            <div className={styles.imgBox}>
              <img
                src={slides[slideIdx].image}
                alt="slide_image"
                className={styles.image}
              />
            </div>
          </div>
          {/* 애니메이션용 새 슬라이드 */}
          {isAnimating && (
            <div
              className={`${styles.slide} ${styles[`enter${direction}`]}`}
              key={`next${slideIdx}`}
            >
              <SlideText
                title={slides[nextIndex].title}
                description={slides[nextIndex].description}
              />
              <div className={styles.imgBox}>
                <img
                  src={slides[nextIndex].image}
                  alt="slide_image"
                  className={styles.image}
                />
              </div>
            </div>
          )}
        </div>
        <div className={styles.pagination}>
          <ArrowButton
            direction="left"
            onClick={prevSlide}
            disabled={isAnimating}
          />
          <span className={styles.pageInfo}>
            {slideIdx + 1} / {slides.length}
          </span>
          <ArrowButton
            direction="right"
            onClick={nextSlide}
            disabled={isAnimating}
          />
        </div>
      </div>
    </div>
  );
}