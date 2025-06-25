import React from "react";
import "animate.css";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      title: "📚 Organize Your Reading Life",
      desc: "Track books you've read, are reading, or want to read — all in one virtual shelf!",
      img: "https://i.postimg.cc/Gmn8z5fN/vecteezy-a-stack-of-books-on-a-table-with-an-orange-background-50894163.jpg",
    },
    {
      title: "🌟 Discover Popular Books",
      desc: "Find trending books loved by readers. See reviews, ratings and start your next journey!",
      img: "https://i.postimg.cc/g0Nxzk0F/vecteezy-wooden-bookshelves-full-of-old-books-showing-knowledge-and-57502763.jpg",
    },
    {
      title: "📝 Share Your Reviews",
      desc: "Help others choose their next read by writing reviews and upvoting your favorites.",
      img: "https://i.postimg.cc/QtdW1Kzd/vecteezy-a-book-pile-close-up-on-a-study-desk-front-view-pile-book-31332200.jpg",
    },
  ];

  return (
    <div className="mt-0">
      <SlickSlider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="h-[90vh] w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-3xl">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>
                <p className="text-white text-lg md:text-xl mb-6 animate__animated animate__fadeInUp">
                  {slide.desc}
                </p>
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-semibold hover:opacity-90 transition duration-300">
                  Good job
                </button>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
