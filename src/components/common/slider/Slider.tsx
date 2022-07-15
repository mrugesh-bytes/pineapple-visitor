import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slider.module.css";
import sliderImg from "../../../images/temp/unit-banner.svg";

const Slider = () => {
	return (
		<div>
			<Carousel
				className={styles.carouselStyle}
				showThumbs={false}
				autoPlay={true}
				infiniteLoop={true}
				showArrows={false}
				showStatus={false}
				emulateTouch
			>
				<div className={styles.slideWrapper}>
					<img src={sliderImg} alt="Slider" />
				</div>
				<div>
					<img src={sliderImg} alt="Slider" />
				</div>
				<div>
					<img src={sliderImg} alt="Slider" />
				</div>
			</Carousel>
		</div>
	);
};

export default Slider;
