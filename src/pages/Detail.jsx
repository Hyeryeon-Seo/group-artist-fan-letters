import React from "react";
import { Link } from "react-router-dom";

function Detail() {
	return (
		<>
			<Link to="/">letters to aespa</Link>
			{/* 자동완성으로 Link태그써서 import도 해줄 것*/}
			<div>Detail</div>
		</>
	);
}

export default Detail;
