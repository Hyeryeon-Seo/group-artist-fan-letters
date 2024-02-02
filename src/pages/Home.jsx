import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	return (
		<div>
			letters to aespa
			<button
				onClick={() => {
					navigate("/detail");
				}}
			>
				목록페이지로 이동
			</button>
		</div>
	);
}

export default Home;
