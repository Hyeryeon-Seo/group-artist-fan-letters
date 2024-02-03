import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components"; // 이거임포트안해서 흰화면만 뜸 흑 (콘솔보고해결)
import CustomInput from "../components/common/CustomInput"; // 얘도. ㅠㅠ 라우터의 문제가 아니었다. 콘솔창먼저확인하기!

// ANCHOR 우선 여기다가 삭제,수정까지 구현해놓고 옮겨보기?

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
const FormSection = styled.section`
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
	min-height: 600px;
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

//ANCHOR -
// Router로부터 props 전달받기
function Home({ members, commentList, setCommentList }) {
	// 일단은 Home에다가 쓰고 나눠보자 ㅠㅠ
	// const navigate = useNavigate();
	// const nowlist = commentList; //초기코멘트리스트 - 담아서 아래서 출력해보니, commentList변하는거마다 (초기)선언되는지 똑같이 뜸.. (전부다시새로고침?)
	const [nickname, setNickname] = useState("");
	// * fix: 위 commetList에 들어가는 객체의 키는 nickname인데 state로는 nickName이라고하면 혼동
	// 아래에서 단축속성명 쓰기도 힘들다(거기서 버그났는데 몰랐다) 통일시키기
	const [content, setContent] = useState("");
	const [writedTo, setWritedTo] = useState("");

	// filtered.. 리스트도 state로 만들어줘야한다! 처음에 변수선언하고 따로 해봣는데, 그럼 화면에 렌더링이되지않는다 .. (리스트자체는 filter처리로 바뀌었어도)
	const [filteredByMemList, setFilteredByMemList] = useState(commentList);
	// 위에서 {}중괄호로썼다가 흰화면..ㅠ

	// * state,setState 항상 (handle~명) e.target.value 를 set해주는 함수와 같이 간다는 점 기억
	// * input등의 입력창태그에도 속성 value와 onChange 같이 간다는 점!
	// (form) input의 입력value값 (닉네임) 가져오기 (가져와서 state set해줌)
	const handleNicknameInputChange = (e) => {
		setNickname(e.target.value);
	};

	// (form) textarea의 입력value값 (내용) 가져오기
	const handleContentTextChange = (e) => {
		setContent(e.target.value);
	};

	// (select)-option의 선택value값 (writedTo) 가져오기
	const handleWritedToSelectChange = (e) => {
		setWritedTo(e.target.value);
	};

	// 등록하기
	// *입력태그의 onChange속성의 handle함수로 입력값(..value)가져왔으면, form태그 onSubmit속성에 넣는 함수onSubmit으로 추가할목록아이템만들고(add해줄거써주기)
	//   이 함수로 해당아이템을 리스트에 set해준다
	let nowcommentlist = [];
	const addCommentHandler = (newComment) => {
		setCommentList((prevCommentList) => [...prevCommentList, newComment]); // fix: (newComment)로 써버려서 안되는 버그발생했었다ㅠㅠ
		//nowcommentlist = commentList; // add까지된 상태의 목록 add가안됐다면...?
	};

	// form태그 제출 시 (코멘트 추가 버튼, 등록 / 기존 input,textarea 글자 초기화
	const onSubmit = (e) => {
		e.preventDefault(); // * form태그의 onSubmit에 들어가는 함수에서는, e(vent)받아서 preventDefault해줘야함잊지말자 (기본페이지이동이벤트방지)

		// 유효성 검사 // * handle..함수로 받은 입력값으로 set해준 상태니까 nickName 등 아래에 써주고
		if (!nickname || !content) {
			alert("닉네임과 내용을 모두 입력해주세요");
			return;
		}

		addCommentHandler({
			// * add추가해주는 함수에 넣어줄 아이템(객체) 여기서 써준다
			createdAt: Date.now(),
			nickname, // handle..함수로 set되어있는 nickname과 content   -state변수
			avatar: "src/assets/defult-avatar.png", // 상대경로복붙해서 이주소쓰니 되는데.. config로 절대경로 src설정했는데, assets/..먹히지않음ㅠ
			content,
			writedTo,
			id: crypto.randomUUID(), // 고유한 id 부여
		});
		// e.target.reset(); 안먹힘
		setNickname("");
		setContent("");
	};

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	const handleAllCommentsClick = () => {
		setFilteredByMemList(commentList);
	};

	// NOTE nav의 멤버별 li 클릭 시 해당 멤버 목록만 뜨게하기
	//  (리렌더링되게하기? - useEffect안에 handle..click자체 넣으면 아예 X. 근데 useEffect는 렌더링될때마다실행되는거지, 렌더링시키는게아님)
	// useEffect(() => {
	const handleFilterWritedToClick = (clickedMem) => {
		// 이전과제 todolist 참고
		//처음 눌렸을때의 commentlist를 유지..
		//뜨게하려면 state인 commentList , set..써야 , 근데 그럼 set되어서 고정? 두번쨰 filter이어서 돼버림
		// 아! state따로만들고 거기에 set해야. .. ?! 그럼 또 리스트 하나하나 풀떄어떻게..?..
		// set을 안해야하는듯. 그냥 filter된거를 담아서 보여주기.. -> 근데 또 복잡. ㅠㅠ
		// 차라리 display:none같은 css를 쓸까싶지만.
		setFilteredByMemList(
			commentList.filter((comment) => comment.writedTo === clickedMem)
		);
		// filtered.. 리스트도 state로 만들어줘야한다! 처음에 변수선언하고 따로 해봣는데, 그럼 화면에 렌더링이되지않는다 .. (리스트자체는 filter처리로 바뀌었어도)
		// 클릭된멤버명과 일치시에만-filter-뜨기
		//이전과제 삭제버튼처럼 (prevCommentList 받아서하는거랑상관x) 처음버튼누른경우 맞게 뜨지만, 두번째로 버튼누르면 아예 안뜸
		// set으로 filter된 상태로 set해서 다음버튼 눌렀을떄 filter된상태의list가 유지되어서?
		// render()써봄 -> x
	};
	// }, [clickedMem]);

	// TODO 만들어놓고 옮기기 삭제버튼
	// 둘다 set해줘야 잘 적용됨 -> 이렇게 하는게 맞나
	const deleteCommentHandler = (id) => {
		setCommentList((prevCommentList) =>
			prevCommentList.filter((comment) => comment.id !== id)
		);
		setFilteredByMemList((prevCommentList) =>
			prevCommentList.filter((comment) => comment.id !== id)
		);
	};

	// SECTION -
	return (
		// 이 안에, Home페이지에서만 쓰일 레이아웃부분 (헤더,푸터 등 제외)을 작성하는건가?
		// 이 내용이 Layout의 children으로 넘겨줄 부분?
		/* <button
				onClick={() => {
					navigate("/detail");
				}}
			>
				목록페이지로 이동
			</button> */
		/* <App></App> 이런거 아님..  app컴포넌트에서 router임포트해서쓰는듯
			여긴 기능을 넣는건가. 레이아웃에서 레이아웃틀, 등 짜고
		일단 여기서 짜서 메인페이지 만들고, 컴포넌트화시키자*/
		<LayoutDiv>
			<Header></Header>
			<VideoSection className="video_bg">
				<iframe
					src="https://www.youtube.com/embed/Os_heh8vPfs?autoplay=0&mute=1;&loop=1&playlist=Os_heh8vPfs"
					title="aespa에스파 Spicy MV"
					//!!! 나중에 autoplay=1로 수정해서 완성할 것!!
					//위 주소를 통해 파라미터넘겨줌. 1이면 true같은 것
					// mute=0일때는 음악나오고, 자동재생x였는데 mute=1로만 바꿨을 뿐인데 자동재생도되고 mute..
					// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					frameBorder="0" // 유튭표시할떄 외곽선값 (0)
					allowFullScreen // 전체화면모드 허용여부
				>
					지원하지않음
				</iframe>
				{/*오른쪽아래 youtube에서 보기 클릭하면 유투브로 넘어감 , 알려주기? */}
				<DivBox>
					<h1>send your letters</h1>
				</DivBox>
			</VideoSection>
			<FormSection>
				<h2>Write & Send</h2>
				<ImgNavFormBox>
					<img></img>
					<NavFormBox>
						{/* <nav>
							<ul>
								{members.map((mem) => {
									return <li>{mem}</li>;
								})}
								{/* 위 map돌릴때 js문법이니까 {}중괄호 사용,
									그 안에 return써줄 것! 
									(그냥 return없이 끝내면, map함수 인자 콜백함수 그리고 끝
									return해줘야 나오는게 (여기서 태그붙여서) 있다??* /}
							</ul>
						</nav> */}
						{/*form태그 - 코멘트(팬레터) 입력, 등록하기*/}
						<form onSubmit={onSubmit}>
							<CustomInput
								type="text"
								value={nickname}
								onChange={handleNicknameInputChange}
								placeholder="닉네임은 최대 20자까지만 가능해요."
							>
								닉네임
							</CustomInput>
							<label>내용</label>
							<textarea
								value={content}
								onChange={handleContentTextChange}
								maxLength="100"
								placeholder="내용은 최대 100자까지만 작성할 수 있어요."
							></textarea>
							{/* style={{ width: "200px" }} 안먹힘 */}
							<label>To.</label>
							<select value={writedTo} onChange={handleWritedToSelectChange}>
								{members.map((mem) => {
									return <option value={mem}>{mem}</option>;
								})}
							</select>
							<button type="submit">팬레터 등록</button>
						</form>
						{/*갑자기흰화면만뜨고 뭐가에러인지도 알수없는 상황발생 -> 혹시나해서 form부분주석처리하니 잘떴다! 버그수정 */}
					</NavFormBox>
				</ImgNavFormBox>
			</FormSection>
			<ListSection>
				<h2>Fan Letter Box</h2>
				<nav>
					<ul>
						<li>
							<button onClick={() => handleAllCommentsClick()}>전체</button>
						</li>
						{members.map((mem) => {
							return (
								// onClick에 콜백함수로 넣어주는거 잊지 말기
								<li>
									<button onClick={() => handleFilterWritedToClick(mem)}>
										{mem}
									</button>
								</li>
							);
						})}
					</ul>
				</nav>
				<CommentListUl>
					{filteredByMemList.map((comment) => {
						return (
							// * return문 안 ()아니고 {}중괄호인거 주의
							<CommentItemLi key={comment.id}>
								<img src={comment.avatar} />
								{/*src="${comment.avatar}" 이미지 안뜸. 생각해보니 js문법쓸거면``백틱써야,
									글고 어쩌피 comment.avatar로 꺼내는 값 자체가 ""문자열이라서 그냥 {} js문법으로 넣어주면됨 */}
								<h5>{comment.nickname}</h5>
								<time>{comment.createdAt}</time>
								<p>{comment.content}</p>
								{/*TODO - 아래는 우선 만들어놓고 옮기기*/}
								<button onClick={() => deleteCommentHandler(comment.id)}>
									삭제
								</button>
							</CommentItemLi>
						);
					})}
				</CommentListUl>
			</ListSection>
			{/*참고로 주석달때 , 이미 주석있어서 안먹히는거.. *과/를 띄어주면 됨 */}
			<Footer></Footer>
		</LayoutDiv>
	);
}

export default Home;
