import React, { useState } from "react"; // 빼먹은 !? 원래 Router자체에서는 react는 필요없는듯
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // pages/Home 절대경로설정됨
import Detail from "pages/Detail";
import { dummyData } from "./fakeData"; // 해당 json임포트해서 여기서 이름 설정해줘서 아래에서 쓸 수 있다 !

// 먼저 각각의 페이지.jsx에서 (자동완성rfce) 컴포넌트export먼저 써놔야 자동import도 가능

const Router = () => {
	const members = ["카리나", "윈터", "닝닝", "지젤"];

	// 코멘트(팬레터)들 목록(배열) state
	const [commentList, setCommentList] = useState(dummyData);

	return (
		<BrowserRouter>
			{/* 강의에서 <Layout> 감싼던건뭐지? */}
			{/* Layout의 children..? (페이지별로다르게) */}
			{/* 라우팅 설정 */}
			<Routes>
				{/*왜 정렬이 props처럼 안되는? => 만든거 완전히다 내려주지않아서..*/}
				<Route
					path="/"
					element={
						<Home
							members={members}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					}
				/>
				{/*아 이렇게 하면 Home.jsx가 path에 따라서 컴포넌트로 불리는건가부다! 그래서 안에 들어가는.
				 * element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다. */}
				{/* <Route path="detail" element={<Detail />} />상세페이지는 다 id부여할거라이게필요없음 */}
				<Route
					path="detail/:id"
					element={
						<Detail
							members={members}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
