import { Carousel } from "react-bootstrap"
import { Button } from 'react-bootstrap';

export default function Slider(){
    return(
        <div className="slider-container">
        <Carousel className="slider">
      <Carousel.Item interval={2000} className="slider--item">
        <img  className="slider--item--img" src="/slider_3.jpg" />
        <Carousel.Caption>
        <Button variant="outline-warning" size="lg">Shop Now</Button>
          <h3>Gym Collection!!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="slider--item">
      <img className="slider--item--img" src="/slider_1.jpg" />
        <Carousel.Caption>
        <Button variant="outline-warning" size="lg">Shop Now</Button>
          <h3>Casual Collection!!! </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="slider--item">
      <img className="slider--item--img" src="/slider_2.jpg" />
        <Carousel.Caption>
        <Button variant="outline-warning" size="lg">Shop Now</Button>
          <h3>Upcoming Collection!!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}