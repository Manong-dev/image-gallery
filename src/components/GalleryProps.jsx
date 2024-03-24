import React from "react";

import "../styles/gallery.css";

const GalleryProps = ({ images, title1, subtitle1, page1, title2, subtitle2, page2, title3, subtitle3, page3, title4, subtitle4, page4 }) => {
  return (
    <div className="card__body">
      <div className="card__wrapper">
        <div className="card__home">
          {images.map(({ url1, alt1 }) => {
            return <img loading="lazy" key={url1} src={url1} alt={alt1} />;
          })}
          <div className="info">
            <h4>{title1}</h4>
            <p>
              {subtitle1}
            </p>
            <a href={page1} className="btn">
              Leer más
            </a>
          </div>
        </div>
        <div className="card__home">
          {images.map(({ url2, alt2 }) => {
            return <img loading="lazy" key={url2} src={url2} alt={alt2} />;
          })}
          <div className="info">
            <h4>{title2}</h4>
            <p>
              {subtitle2}
            </p>
            <a href={page2} className="btn">
              Leer más
            </a>
          </div>
        </div>
        <div className="card__home">
          {images.map(({ url3, alt3 }) => {
            return <img loading="lazy" key={url3} src={url3} alt={alt3} />;
          })}
          <div className="info">
            <h4>{title3}</h4>
            <p>
              {subtitle3}
            </p>
            <a href={page3} className="btn">
              Leer más
            </a>
          </div>
        </div>
        <div className="card__home">
          {images.map(({ url4, alt4 }) => {
            return <img loading="lazy" key={url4} src={url4} alt={alt4} />;
          })}
          <div className="info">
            <h4>{title4}</h4>
            <p>
              {subtitle4}
            </p>
            <a href={page4} className="btn">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GalleryProps;
