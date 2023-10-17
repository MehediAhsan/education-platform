import Link from "next/link"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Banner = () => {
    const bannerSlides = [
        {
          image: 'https://plus.unsplash.com/premium_photo-1661947876256-b44c1bfc04d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1519&q=80',
          title: 'Find your best course',
          description: 'Elevate your skills with our online courses.',
        },
        {
          image: 'https://plus.unsplash.com/premium_photo-1673015652565-6fcd6cd277b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          title: 'Diverse Course Selection',
          description: 'Expand your knowledge in various fields.',
        },
        {
          image: 'https://images.unsplash.com/photo-1608235343218-64f99c70baba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          title: 'Flexible Learning',
          description: 'Learn at your own pace, anytime, anywhere.',
        },
      ];
  return (
    <div className="w-full relative">
        <Carousel showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000} // Change the interval as needed
      stopOnHover={false}
      dynamicHeight={true}
      emulateTouch={true}
      useKeyboardArrows={true}
      swipeable={true}>
          {bannerSlides.map((slide, index) => (
            <div key={index}>
              <img className="h-screen md:min-h-screen" src={slide.image} alt={`Slide ${index}`} />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-60">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-lg mx-auto mb-6 text-center">
                  {slide.description}
                </p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white text-xl md:text-base font-semibold px-4 py-2 rounded-lg transition duration-300">
                  <Link href="/courses">Explore Courses</Link>
                </button>
                <div className="flex gap-2 text-2xl pt-6 justify-center items-center">
                    <h1>Follow Us :</h1>
                    <div className="text-teal-500 flex gap-3 font-semibold">
                       <FaFacebook></FaFacebook>
                       <FaInstagram></FaInstagram>
                       <FaYoutube></FaYoutube>
                       <FaTwitter></FaTwitter> 
                    </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
  )
}

export default Banner