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
    <Carousel autoPlaySpeed={800} arrows={false} infinite={true} autoPlay={true} responsive={responsive}>
  <div className='slide'><img src='https://cdn.mos.cms.futurecdn.net/MeU4HokrzUwhbd9PJBQCSV-1200-80.png'/>
  </div>
  <div className='slide'><img src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2WatchpointPack_image1600w.jpg'/></div>
  <div className='slide'><img src='https://i.ytimg.com/vi/wQATS4HOxdo/maxresdefault.jpg'/></div>
  <div className='slide'><img src='https://p325k7wa.twic.pics/high/elden-ring/elden-ring/04-retailers/00-beautyshots/04-Standard/ER_standard_keyart.jpg?twic=v1/step=10/quality=80/max=760'/></div>
  <div className='slide'><img src='https://cdn.cloudflare.steamstatic.com/steam/apps/570940/capsule_616x353.jpg?t=1668145065'/></div>
  <div className='slide'><img src='https://images2.alphacoders.com/204/thumb-1920-204972.jpg'/></div>
  <div className='slide'><img src='https://i.ytimg.com/vi/H4rYVsJ4v9Y/maxresdefault.jpg'/></div>
  <div className='slide'><img src='https://cdn.akamai.steamstatic.com/steam/apps/12210/capsule_616x353.jpg?t=1618853493'/></div>
</Carousel>;
    </>
  );
}

export default Slide;