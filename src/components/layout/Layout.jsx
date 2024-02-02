import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import CustomInput from "../common/CustomInput";
import "../../App.css";

const LayoutDiv = styled.div`
	min-width: 1500px;
	margin: 0%; // ?
	/* width: 100%; 부족한 넓이*/
`;

const VideoSection = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 500px;
	padding-bottom: 30%;
	background-color: aqua;
`;

const DivBox = styled.div`
	height: 300px;
	background-color: darkorange;
`;
const WriteSection = styled.section`
	height: 700px;
	background-color: #2e1f08;
`;
const ImgNavFormBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NavFormBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 10px;
	background-color: darksalmon;
	margin-right: 100px;
	margin-top: 10px;
	width: 800px;
	height: 500px;
`;

const ListSection = styled.section`
	height: 600px;
	background-color: #25072c;
`;

const CommentListUl = styled.ul`
	//todolist 의 li.. 바꿔야. . 태그 가져와서 수정하기
	display: flex;
	margin-top: 10px;
	margin-left: 20px;
	/* 최대 최소넓이는 리스트 뜨는 부분에만 적용*/
	min-width: 800px;
	max-width: 1200px;
	min-height: 250px; /*이래야 카드없어도 어느정도 리스트높이유지*/
	flex-wrap: wrap; /*필수! 카드리스트 다음 줄 이동하게 해줌*/
`;

const CommentItemLi = styled.li`
	//todolist 의 ul태그 가져와서 수정
	display: flex;
	flex-direction: column;
	/* gap: 30px; */
	justify-content: space-between;
	margin-top: 20px;
	background-color: rgb(255, 233, 205);
	border: none;
	border-radius: 5px;
	width: 255px;
	margin-right: 15px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
`;

function Layout() {
	// {chilren}받아서 안 내용만 바꿔주기
	// 공통레이아웃(헤더,푸터)

	// 먼저 여기에 쓰고 나중에 컴포넌트 등 나누기
	// h2 :전역스타일링

	// 코멘트(팬레터) state
	const [comment, setComment] = useState([
		{
			id: 0,
			nickname: "나",
			content: "카리나 너무 멋져요!",
		},
	]);

	// form태그 제출 시 (코멘트 추가 버튼, 등록)
	const onSubmit = (e) => {
		e.preventDefault(); // form태그의 onSubmit에 들어가는 함수에서는, e(vent)받아서 preventDefault해줘야함잊지말자 (기본페이지이동이벤트방지)
	};

	return (
		<LayoutDiv>
			<Header></Header>
			<div>
				<VideoSection className="video_bg">
					<iframe
						src="https://www.youtube.com/embed/Os_heh8vPfs?autoplay=0&mute=1;&loop=1&playlist=Os_heh8vPfs"
						title="aespa에스파 Spicy MV"
						//!!! 나중에 autoplay=1로 수정해서 완성할 것!!
						//위 주소를 통해 파라미터넘겨줌. 1이면 true같은 것
						// mute=0일때는 음악나오고, 자동재생x였는데 mute=1로만 바꿨을 뿐인데 자동재생도되고 mute..
						// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						frameborder="0" // 유튭표시할떄 외곽선값 (0)
						allowfullscreen // 전체화면모드 허용여부
					></iframe>
					<DivBox>
						<h1>send your letters</h1>
					</DivBox>
				</VideoSection>
				<WriteSection>
					<h2>Write & Send</h2>
					<ImgNavFormBox>
						<img></img>
						<NavFormBox>
							<nav>
								<ul>
									<li>카리나</li>
									<li>윈터</li>
									<li>닝닝</li>
									<li>지젤</li>
								</ul>
							</nav>
							{/*form태그 - 코멘트(팬레터) 입력, 등록하기*/}
							<form onSubmit={onSubmit}>
								<CustomInput placeholder="닉네임은 최대 20자까지만 가능해요.">
									닉네임
								</CustomInput>
								<label>내용</label>
								<textarea
									maxLength="100"
									placeholder="내용은 최대 100자까지만 작성할 수 있어요."
								></textarea>
								{/* style={{ width: "200px" }} 안먹힘 */}
								<button type="submit">팬레터 등록</button>
							</form>
							{/*갑자기흰화면만뜨고 뭐가에러인지도 알수없는 상황발생 -> 혹시나해서 form부분주석처리하니 잘떴다! */}
						</NavFormBox>
					</ImgNavFormBox>
				</WriteSection>
				<ListSection>
					<h2>Fan Letter Box</h2>
					<CommentListUl>
						<CommentItemLi>
							<img src="#"></img>
							<h5>이름</h5>
							<time>날짜</time>
							<p>내용</p>
						</CommentItemLi>
						<CommentItemLi>
							<img src="#"></img>
							<h5>이름</h5>
							<time>날짜</time>
							<p>내용</p>
						</CommentItemLi>
					</CommentListUl>
				</ListSection>
			</div>
			<Footer></Footer>
		</LayoutDiv>
	);
}

export default Layout;
