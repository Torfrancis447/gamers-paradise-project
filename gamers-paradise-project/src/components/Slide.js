import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

function Slide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    
    <>
    <Carousel autoPlaySpeed={300} arrows={false} infinite={true} autoPlay={true} responsive={responsive}>
  <div className='slide'><img src='https://pyxis.nymag.com/v1/imgs/9b9/222/a1b6c8d5c0a033966fe585930eebf4fa5a-best-video-games-year-so-far-november-le.2x.rsocial.w600.jpg'/>
  </div>
  <div className='slide'><img src='https://hips.hearstapps.com/hmg-prod/images/best-video-games-2018-1545927666.jpg'/></div>
  <div className='slide'><img src='https://hips.hearstapps.com/hmg-prod/images/best-video-games-2018-1545927666.jpg'/></div>
  <div className='slide'><img src='https://hips.hearstapps.com/hmg-prod/images/best-video-games-2018-1545927666.jpg'/></div>
</Carousel>;
    </>
  );
}

export default Slide;