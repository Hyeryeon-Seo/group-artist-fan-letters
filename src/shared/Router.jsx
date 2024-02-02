import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
// 먼저 각각의 페이지.jsx에서 (자동완성rfce) 컴포넌트export먼저 써놔야 자동import도 가능

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* 라우팅 설정 */}
				<Route path="/" element={<Home />} />
				<Route path="detail" element={<Detail />} />
				<Route path="detail/:id" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
