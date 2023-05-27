import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './header'
import Footer from './footer'
import './product.css';


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
		<>
		 <Header />
      <div>
       {/*  <h4>First Slider</h4>  */}
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
			
          <div align={"center"}>
            <h3><img src="images/image1.jpg" height={"300px"}width={"500px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image2.jpg" height={"300px"}width={"500px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image3.jpg" height={"300px"}width={"500px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image4.jpg" height={"300px"}width={"500px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image5.jpg" height={"300px"}width={"500px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image6.jpg" height={"300px"}width={"500px"}></img></h3>
          </div>
        </Slider>
			



     {/*  <h4>Second Slider</h4>   */}
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div align={"center"}>
            <h3><img src="images/image1.jpg" height={"200px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image2.jpg" height={"200px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image3.jpg" height={"200px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image4.jpg" height={"200px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image5.jpg" height={"200px"}></img></h3>
          </div>
          <div align={"center"}>
          <h3><img src="images/image6.jpg" height={"200px"}></img></h3>
          </div>
        </Slider>
      </div>
	  <Footer />
	  </>
    );
  }
}