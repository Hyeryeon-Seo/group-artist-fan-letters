import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // pages/Home 절대경로설정됨
import Detail from "pages/Detail";
import { dummyData } from "./fakeData";
import { CommentContext } from "../context/CommentContext";

const Router = () => {
	const memberList = ["카리나", "윈터", "닝닝", "지젤"];

	// 코멘트(팬레터)들 목록(배열) state
	const [commentList, setCommentList] = useState(dummyData);
	const [filteredByMemList, setFilteredByMemList] = useState(commentList);
	const memRef = useRef("카리나"); // comment없을 경우 해당 멤버명 뜨게하기 : useRef 사용

	return (
		<>
			<CommentContext.Provider
				value={{
					memberList,
					commentList,
					setCommentList,
					filteredByMemList,
					setFilteredByMemList,
					memRef,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="detail/:id" element={<Detail />} />
					</Routes>
				</BrowserRouter>
			</CommentContext.Provider>
		</>
	);
};

export default Router;
