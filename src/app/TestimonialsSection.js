import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Add SharedSwiperContainer component
const SharedSwiperContainer = styled.div`
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background: rgba(0,0,0,0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    &::after {
      font-size: 20px;
    }
  }
`;

export default function TestimonialsSection() {
  return (
    <SectionContainer>
      {/* Customer Testimonials */}
      <SectionTitle>Customer Testimonials</SectionTitle>

        
        <TestimonialsContainer>
        <SharedSwiperContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1524: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
            <Testimonial>
              <Image src='/comment.svg' width={52} height={52}></Image>
                <Quote>
                  "We searched for custom aluminum extrusions and found only Wellste to meet our standards of in-house production from design to shipping"
                  <Author>— Procurement Engineer, ABB</Author>
                </Quote>
              </Testimonial>
            </SwiperSlide>

            <SwiperSlide>
            <Testimonial>
            <Image src='/comment.svg' width={52} height={52}></Image>

              <Quote>
                "We searched for custom aluminum extrusions and found only Wellste to meet our standards of in-house production from design to shipping"
                <Author>— Procurement Engineer, ABB</Author>
              </Quote>
            </Testimonial>
            </SwiperSlide>

            <SwiperSlide>
            <Testimonial>
            <Image src='/comment.svg' width={52} height={52}></Image>

              <Quote>
                "We searched for custom aluminum extrusions and found only Wellste to meet our standards of in-house production from design to shipping"
                <Author>— Procurement Engineer, ABB</Author>
              </Quote>
            </Testimonial>
            </SwiperSlide>     

            <SwiperSlide>
            <Testimonial>
            <Image src='/comment.svg' width={52} height={52}></Image>

              <Quote>
                "We searched for custom aluminum extrusions and found only Wellste to meet our standards of in-house production from design to shipping"
                <Author>— Procurement Engineer, ABB</Author>
              </Quote>
            </Testimonial>
            </SwiperSlide> 

            <SwiperSlide>
            <Testimonial>
            <Image src='/comment.svg' width={52} height={52}></Image>

              <Quote>
                "We searched for custom aluminum extrusions and found only Wellste to meet our standards of in-house production from design to shipping"
                <Author>— Procurement Engineer, ABB</Author>
              </Quote>
            </Testimonial>
            </SwiperSlide>  
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </SharedSwiperContainer>
        </TestimonialsContainer>

        

      
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 2rem;
  text-align: center;
  display: none;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #126BB0;
  margin-bottom: 40px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 30px 70px;
  margin: auto;
`;

const Testimonial = styled.div`
  text-align: center;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;

`;


const Quote = styled.p`
  font-style: italic;
  color: #383838;
  line-height: 1.5;
  margin-top: 30px;
  max-width: 300px;

`;

const Author = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 1rem;
  font-weight: bold;
  color: #383838;
`;


