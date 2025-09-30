import React from "react";

const sidebarStyle = {
	position: "fixed",
	top: 0,
	left: 0,
	height: "100vh",
	width: "60px",
	background: "#fff",
	boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 1000,
	gap: "30px"
};

const iconStyle = {
	width: "32px",
	height: "32px",
	margin: "10px 0",
	cursor: "pointer"
};

const SideBar = () => {
	return (
		<div style={sidebarStyle}>
			<a href="https://m.me/" target="_blank" rel="noopener noreferrer">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_Logo_2020.svg"
					alt="Messenger"
					style={iconStyle}
				/>
			</a>
			<a href="https://t.me/" target="_blank" rel="noopener noreferrer">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
					alt="Telegram"
					style={iconStyle}
				/>
			</a>
		</div>
	);
};

export default SideBar;
