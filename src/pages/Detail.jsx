import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import * as S from "styles/PagesStyle";

const LayoutDiv = styled.div`
	/* 홈과 공통 */
	min-width: 1500px;
	margin: 0%; // ?
	/* width: 100%; 부족한 넓이*/
`;

function Detail({ commentList, setCommentList }) {
	const { id } = useParams(); // parameter로 넘겨받은걸 id라는 명으로 쓰겠다?
	//useParams() :리액트 라우터 사용시 파라미터정보가져와활용할때 쓰는 훅

	const selectedComment = commentList.find((comment) => comment.id === id);
	//console.log(selectedComment); filter메서드 쓸 시 [0]인덱스로 꺼내는거없이 그냥 filter처리하면 배열임 (원소 하나더라도 일단은.)-> [0]으로 꺼내기
	// filter할필요없고, find메서드(하나만 반환) 쓰기

	const navigate = useNavigate();
	const handleHomeClick = () => {
		navigate("/");
	};

	// 삭제버튼
	// 둘다 set해줘야 잘 적용됨 -> 이렇게 하는게 맞나
	const deleteCommentHandler = (id) => {
		if (window.confirm("정말 삭제하실 건가요?")) {
			//확인버튼누르면 이자체가 true값이라서 if문조건안에 들어옴
			setCommentList((prevCommentList) =>
				prevCommentList.filter((comment) => comment.id !== id)
			);
			alert("팬레터가 삭제되었습니다");
			// setFilteredByMemList((prevCommentList) =>
			// 	prevCommentList.filter((comment) => comment.id !== id)
			// );  엇 메인에서와다르게 이거없어도 삭제 잘 먹히는거같은데?
			// 아래에서 화면이동하면서 자연스럽게 리렌더링?되어서인듯!
			//(Home에서는, setCommentList만해줄경우 바로화면에서 삭제안되고 남아있었다가 다른거 클릭하고 넘어와야 사라졌음)
			// 홈화면으로 이동
			navigate("/");
		}
	};

	return (
		<S.LayoutDiv>
			<Header></Header>
			{/* <Link to="/">letters to aespa</Link>? 근데 다들 버튼onclick해서 
			navigate함수 쓰는듯 */}
			{/* 자동완성으로 Link태그써서 import도 해줄 것*/}
			{/*신기하게도 홈->상세로는 onClick에 콜백함수인자여야만 작동하는데 이건 콜백함수거나 ()들어가면 작동X
			인자로 넣는게 없어서인가보다 */}
			<button onClick={handleHomeClick}>Home</button>
			<article>
				<S.DetailAvaterImg src={selectedComment.avatar}></S.DetailAvaterImg>
				<h3>{selectedComment.nickname}</h3>
				<time>{selectedComment.createdAt}</time>
				<p>To. {selectedComment.writedTo} </p>
				<p>{selectedComment.content}</p>
				<button>수정</button>
				<button onClick={() => deleteCommentHandler(id)}>삭제</button>
			</article>

			<Footer></Footer>
		</S.LayoutDiv>
	);
}

export default Detail;
