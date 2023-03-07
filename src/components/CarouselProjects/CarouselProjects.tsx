import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { Container } from './styles';

import CalculatorGif from '../../assets/projects/using-calculator.gif';
import PartnersGif from '../../assets/projects/partners.gif';

const CarouselProjects: React.FC = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  const arrayProjects = [
    {
      component: CalculatorGif,
      alt: 'Calculator'
    },
    {
      component: PartnersGif,
      alt: 'Partners'
    }
  ]

  return (
    <Container>
      <Slider {...settings}>
        {arrayProjects.map(project => {
          return (
            <div>
              <img src={project.component} alt={project.alt} />
            </div>
          )
        })}
      </Slider>
    </Container>
  );
}

export default CarouselProjects;
