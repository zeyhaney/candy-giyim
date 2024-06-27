import React, { useState, useCallback } from 'react';
import fashion_banner from '../assets/fashion_photo.jpg';
import kadin_banner from '../assets/banner_kadin.jpg';
import erkek_banner from '../assets/banner_erkek.jpg';
import genc_kiz_banner from '../assets/banner_genc.jpg';
import cocuk_banner from '../assets/banner_cocuk.jpg';
import { Link } from 'react-router-dom';
import '../styles/banner.css';

const bannerImages = {
  fashion: fashion_banner,
  kadin: kadin_banner,
  erkek: erkek_banner,
  genc: genc_kiz_banner,
  cocuk: cocuk_banner,
};

export default function Banner() {
  const [background, setBackground] = useState(bannerImages.fashion);
  const [timeoutId, setTimeoutId] = useState(null);

  const changeBackground = useCallback((e, newBackground) => {
    e.preventDefault();
    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setBackground(bannerImages[newBackground]);
    }, 200);

    setTimeoutId(id);
  }, [timeoutId]);

  const resetBackground = useCallback((e) => {
    changeBackground(e, 'fashion');
  }, [changeBackground]);

  return (
    <div className="banner-container">
      <img src={background} alt="Fashion Banner" className="banner-image" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <p className="text-4xl lg:text-6xl xl:text-8xl font-bold">
          2024'de bizimle tarzınızı keşfedin.
        </p>
        <div className="flex-1 flex-row space-x-4 text-sm pt-5 md:pt-10 md:text-lg font-bold">
          <Link onMouseOver={(e) => changeBackground(e, "kadin")} onMouseLeave={resetBackground} className="hover:underline" to="#">KADIN</Link>
          <Link onMouseOver={(e) => changeBackground(e, "erkek")} onMouseLeave={resetBackground} className="hover:underline" to="#">ERKEK</Link>
          <Link onMouseOver={(e) => changeBackground(e, "genc")} onMouseLeave={resetBackground} className="hover:underline" to="#">GENÇ</Link>
          <Link onMouseOver={(e) => changeBackground(e, "cocuk")} onMouseLeave={resetBackground} className="hover:underline" to="#">ÇOCUK</Link>
        </div>
      </div>
    </div>
  );
}