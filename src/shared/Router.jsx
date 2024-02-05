import React, { useState } from "react"; // 빼먹은 !? 원래 Router자체에서는 react는 필요없는듯
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // pages/Home 절대경로설정됨
import Detail from "pages/Detail";
import { dummyData } from "./fakeData";

const Router = () => {
	const memberList = ["카리나", "윈터", "닝닝", "지젤"];

	// 코멘트(팬레터)들 목록(배열) state
	const [commentList, setCommentList] = useState(dummyData);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							memberList={memberList}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					}
				/>
				<Route
					path="detail/:id"
					element={
						<Detail commentList={commentList} setCommentList={setCommentList} />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
