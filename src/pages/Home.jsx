import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";

function Home() {
	const navigate = useNavigate();

	return (
		<div>
			{/* <button
				onClick={() => {
					navigate("/detail");
				}}
			>
				목록페이지로 이동
			</button> */}
			{/* <App></App> 이런거 아님..  app컴포넌트에서 router임포트해서쓰는듯
			여긴 기능을 넣는건가. 레이아웃에서 레이아웃틀, 등 짜고
			일단 여기서 짜서 메인페이지 만들고, 컴포넌트화시키자*/}
		</div>
	);
}

export default Home;
