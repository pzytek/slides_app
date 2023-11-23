import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/slides.css";
import axios from "axios";
import Slide from "./Slide";

type SlideType = {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState<SlideType[]>([]);

  useEffect(() => {
    const getSlides = async () => {
      try {
        const { data } = await axios.get("/api/slides");
        setSlides(data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    getSlides();
  }, []);

  const nextSlide = () => {
    setIndex((prevState) =>
      prevState === slides.length - 1 ? 0 : prevState + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevState) =>
      prevState === 0 ? slides.length - 1 : prevState - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slide-smooth">
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            id={slide.id}
            text={slide.text}
            imageURL={slide.imageURL}
            audioURL={slide.audioURL}
            index={index}
          />
        ))}
      </div>
      <button className="slide-btn slide-btn-left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="slide-btn slide-btn-right" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
