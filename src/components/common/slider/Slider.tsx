import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slider.module.css";
import sliderImg from "../../../images/temp/unit-banner.svg";

const Slider = ({ sliderBanner }: any) => {
	const images = sliderBanner && sliderBanner?.split(",");
	return (
		<Carousel
			className={styles.carouselStyle}
			showThumbs={false}
			autoPlay={true}
			infiniteLoop={true}
			showArrows={false}
			showStatus={false}
			emulateTouch
		>
			{images &&
				images.map((image: any) => <img src={image} alt="Slider" />)}
		</Carousel>
	);
};

export default Slider;
