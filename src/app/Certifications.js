import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Certification() {

  const reviews = [
    '/1.png',
    '/4.png', 
    '/5.png',
    '/6.png',
    '/7-1.png',
    '/4.png',
    '/5.png',
    '/6.png',
  ];

  const SharedSwiperContainer = styled.div`
    position: relative;

    .swiper-button-next,
    .swiper-button-prev {
      color: white;
      background: rgba(0,0,0,0.5);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      
      opacity: 0.5;
      transition: all 0.3s ease;

      &:hover {
        opacity: 1;
      }
      
      &::after {
        font-size: 20px;
      }
    }
  `;

  return (
    <SectionContainer>
      <ReviewWrapper>
        <SharedSwiperContainer>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            grabCursor={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Review src={review} alt={`Review ${index + 1}`} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </SharedSwiperContainer>
      </ReviewWrapper>

      <SectionTitle>Quality Certification</SectionTitle>
      <CertificationDescription>
        Wellste holds MSDS, SABER, NQA, SGS, and ISO certifications, demonstrating our commitment to delivering high-quality, compliant aluminum products that meet international standards.
      </CertificationDescription>

      <SharedSwiperContainer>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation, EffectCoverflow, Pagination]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ 
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <Certificate>
              <img src="/certification1.png" alt="Certificate 1" style={{ width: '100%', height: 'auto' }} />
            </Certificate>
          </SwiperSlide>
          <SwiperSlide>
            <Certificate>
              <img src="/certification2.png" alt="Certificate 2" style={{ width: '100%', height: 'auto' }} />
            </Certificate>
          </SwiperSlide>
          <SwiperSlide>
            <Certificate>
              <img src="/certification3.png" alt="Certificate 3" style={{ width: '100%', height: 'auto' }} />
            </Certificate>
          </SwiperSlide>
          <SwiperSlide>
            <Certificate>
              <img src="/certification4.png" alt="Certificate 4" style={{ width: '100%', height: 'auto' }} />
            </Certificate>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </SharedSwiperContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #126BB0;
  margin-bottom: 40px;
`;

const CertificationDescription = styled.p`
  font-size: 18px;
  color: #383838;
  margin: 0 auto 2rem;
  max-width: 85%;
  font-weight: 600;
`;

const Certificate = styled.div`
  img {
    max-width: 400px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const ReviewWrapper = styled.div`
  margin: auto;
  padding: 0px 70px;
  max-width: 1400px;
  margin-bottom: 60px;

  .swiper-pagination {
    position: relative;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    background: #126BB0;
    opacity: 0.5;
    &-active {
      opacity: 1;
    }
  }
`;

const Review = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;