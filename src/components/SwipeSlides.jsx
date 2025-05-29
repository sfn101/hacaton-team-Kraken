import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[70vh]"
    >

      <SwiperSlide className="h-[70vh] bg-linear-to-r  from-blue-950 to-blue-500 text-white">
        <div className="h-full w-full flex flex-row">
          {/* First column - centered text */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl font-bold uppercase my-4">Purity in Every Drop</h2>
            <p className='text-2xl font-semibold capitalize'>Transform your tap into a source of strength</p>
          </div>

          {/* Second column - placeholder */}
          <div className="flex-1">
            <img src="/images/trnsparnt-bottle.png" alt="Image of our innovative bottle design" className="absolute top-0 left-1/3  " />
            <img src="/images/splach.png" alt="" className="absolute top-0 left-1/4 w-full h-full object-contain opacity-80" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-[70vh] bg-linear-to-r  from-blue-950 to-blue-500 text-white">
        <div className="h-full w-full flex flex-row">
          {/* First column - centered text */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl font-bold uppercase my-4">Safe Water. Happy Kids</h2>
            <p className='text-2xl font-semibold capitalize'>Protect their health with every sip.</p>
          </div>

          {/* Second column - placeholder */}
          <div className="flex-1">
            <img src="/images/kid.png" alt="Image of our innovative bottle design" className="absolute top-2  w-1/2 " />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-[70vh] bg-linear-to-r  from-blue-950 to-blue-500 text-white">
        <div className="h-full w-full flex flex-row">
          {/* First column - centered text */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl font-bold uppercase my-4">For Every Family. In Every <span className='text-orange-400' >Color.</span></h2>
            <p className='text-2xl font-semibold capitalize'>One bottle, endless choices—made for all.</p>
          </div>

          {/* Second column - placeholder */}
          <div className="flex-1">
            <img src="/images/family.png" alt="Image of our innovative bottle design" className="absolute top-2  w-1/2 " />

          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default SwiperSlider;
