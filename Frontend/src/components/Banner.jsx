import BannerImage from "../../public/Banner1.jpg";

const Banner = () => {
	return (
		<div style={{
			width: "100%",
			height: "300px",
			position: "relative",
			overflow: "hidden"
		}}>
			<img
				src={BannerImage}
				alt="Dayvy Cosmetics Banner"
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover"
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontFamily: "serif",
					fontWeight: "bold",
					fontSize: "3rem",
					background: "rgba(0,0,0,0.2)"
				}}
			>
				<span style={{letterSpacing: "2px"}}>DAYVY COSMETICS</span>
				<span style={{fontSize: "2rem", marginTop: "0.5rem"}}>24/7</span>
			</div>
		</div>
	);
};

export default Banner;
