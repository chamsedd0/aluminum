import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Capabilities() {
  const sections = [
    {
      title: 'Small Coating',
      path: '/capabilities/service2.png'
    },
    {
      title: 'Punching',
      path: '/capabilities/service1.png'
    },
    {
      title: 'CNC Milling',
      path: '/capabilities/service5.png'
    },
    {
      title: 'Welding',
      path: '/capabilities/service6.png'
    },
    {
      title: 'Laser Cutting',
      path: '/capabilities/service4.png'
    },

  ];

  return (
    <SectionContainer>
      <Title>Our Capabilities</Title>

      <SharedSwiperContainer>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
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
          }}
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index}>
              <Card style={{
                backgroundImage: `url(${section.path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover'
              }}>
                {section.title}
              </Card>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </SharedSwiperContainer>

      <Container>
        <LongCard
          style={{
            backgroundImage: `url(/banner1.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            objectFit: 'cover'
          }}
        >
          <div className='right'>
              <span>
                  POWDER COATING
              </span>
              <p>
              Our dry-finishing capabilities include polymer resin powder coating. We use high-quality curatives, pigments, and flow modifiers to coat all parts of your custom piece. Powder coating protects your part from chemicals, moisture, abrasions and wear.
              </p>
          </div>
        </LongCard>

        <LongCard
          style={{
            backgroundImage: `url(/banner2.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            objectFit: 'cover'
          }}
        >
          <div className='left'>
              <span>
                ANODIZING
              </span>
              <p>
              Our electroplating house uses large industrial anodizing baths for the largest parts. Anodized aluminum resists corrosion and gives a long-lasting decorative finish. Our anodizing process is preferred overregular paint protection because the anodized layer is integrated with the aluminum substrate.
              </p>
          </div>
        </LongCard>
      </Container>

    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 40px 70px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #0056B3;
  margin-bottom: 50px;
  margin-top: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  gap: 30px;
`

const LongCard = styled.div`
  min-height: 260px;
  width: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 25px;

  @media (max-width: 1024px) {
    padding: 25px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    min-height: 320px;
  }

  .right {
    text-align: end;
    margin-left: auto;
    width: 58%;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      text-align: center;
    }
  }

  .left {
    text-align: start;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  span {
    font-size: 70px;
    font-weight: bold;
    color: #F4880C;
    display: block;
    margin-bottom: 15px;

    @media (max-width: 1024px) {
      font-size: 50px;
      margin-bottom: 10px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  p {
    color: white;
    line-height: 1.7;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 1024px) {
      font-size: 13px;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 1.5;
    }
  }
`

const Card = styled.div`
  background-color: gray;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: end;
  justify-content: start;
  font-size: 18px;
  padding: 50px 30px;
  height: 320px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

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
