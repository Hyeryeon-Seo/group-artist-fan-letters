import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const LayoutDiv = styled.div`
	/* 홈과 공통 */
	min-width: 1500px;
	margin: 0%; // ?
	/* width: 100%; 부족한 넓이*/
`;

function Detail({ members, commentList, setCommentList }) {
	const { id } = useParams(); // parameter로 넘겨받은걸 id라는 명으로 쓰겠다?
	//useParams() :리액트 라우터 사용시 파라미터정보가져와활용할때 쓰는 훅

	const selectedComment = commentList.find((comment) => comment.id === id);
	//console.log(selectedComment); filter메서드 쓸 시 [0]인덱스로 꺼내는거없이 그냥 filter처리하면 배열임 (원소 하나더라도 일단은.)-> [0]으로 꺼내기
	// filter할필요없고, find메서드(하나만 반환) 쓰기

	return (
		<LayoutDiv>
			<Header></Header>
			{/* <Link to="/">letters to aespa</Link> */}
			{/* 자동완성으로 Link태그써서 import도 해줄 것*/}
			<article>
				<img src={selectedComment.avatar}></img>
				<h3>{selectedComment.nickname}</h3>
				<time>{selectedComment.createdAt}</time>
				<p>To. {selectedComment.writedTo} </p>
				<p>{selectedComment.content}</p>
				<button>수정</button>
				<button>삭제</button>
			</article>

			<Footer></Footer>
		</LayoutDiv>
	);
}

export default Detail;
