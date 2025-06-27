import React from "react";
import { Link } from "react-router";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      title: "📚 Organize Your Reading Life",
      desc: "Maintain a personal digital shelf. Add, track, and categorize your favorite books — all in one place.",
      img: "https://i.postimg.cc/Gmn8z5fN/vecteezy-a-stack-of-books-on-a-table-with-an-orange-background-50894163.jpg",
      btnText: "Start Organizing",
      link: "/book-shelf",
    },
    {
      title: "📝 Share Your Book",
      desc: "Make your voice count. Review the books you love and help others choose their next read.",
      img: "https://i.postimg.cc/QtdW1Kzd/vecteezy-a-book-pile-close-up-on-a-study-desk-front-view-pile-book-31332200.jpg",
      btnText: "Write a Review",
      link: "/add-book",
    },
    {
      title: "🌟 Discover Popular Books",
      desc: "Explore trending titles loved by the community. Dive into reviews and ratings before you read.",
      img: "https://i.postimg.cc/g0Nxzk0F/vecteezy-wooden-bookshelves-full-of-old-books-showing-knowledge-and-57502763.jpg",
      btnText: "Explore Now",
      link: "/populer-book",
    }
  ];

  return (
    <div>
      <SlickSlider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0"></div>

              <div className="relative z-10 text-white text-center px-4 sm:px-10 max-w-4xl animate__animated animate__fadeIn">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md mb-6">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-xl lg:text-2xl font-medium leading-relaxed mb-8 drop-shadow-sm">
                  {slide.desc}
                </p>
                <Link to={slide.link}>
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:scale-105">
                    {slide.btnText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
