import React from "react";

import img1 from "../assets/summer-palace.jpg";
import img2 from "../assets/shanghai-city.jpg";
import img3 from "../assets/warriors.jpg";
import img4 from "../assets/greatwall-china.jpg";

import "../styles/gallery.css";

const Gallery = () => {
  return (
    <div className="card__body">
      <div className="card__wrapper">
        <div className="card__home">
          <img loading="lazy" src={img1} alt="" />
          <div className="info">
            <h4>Summer Palace</h4>
            <p>Summer Palace</p>
            <a href="/estudios-en-china" className="btn">
              Leer más
            </a>
          </div>
        </div>
        <div className="card__home">
          <img loading="lazy" src={img2} alt="" />
          <div className="info">
            <h4>Shanghai</h4>
            <p>Shanghai</p>
            <a href="/becas-chinas" className="btn">
              Leer más
            </a>
          </div>
        </div>
        <div className="card__home">
          <img loading="lazy" src={img3} alt="" />
          <div className="info">
            <h4>Warriors</h4>
            <p>Warriors</p>
            <a href="/estudio-del-idioma" className="btn">
              Leer más
            </a>
          </div>
        </div>
        <div className="card__home">
          <img loading="lazy" src={img4} alt="" />
          <div className="info">
            <h4>Greatwall</h4>
            <p>Greatwall</p>
            <a href="/universidades" className="btn">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
