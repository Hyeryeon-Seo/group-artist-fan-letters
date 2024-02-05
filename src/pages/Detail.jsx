import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";
import * as S from "styles/PagesStyle";

function Detail({ commentList, setCommentList }) {
	const { id } = useParams();

	const selectedComment = commentList.find((comment) => comment.id === id);

	const navigate = useNavigate();
	const handleHomeClick = () => {
		navigate("/");
	};

	// 삭제버튼
	const deleteCommentHandler = (id) => {
		if (window.confirm("정말 삭제하실 건가요?")) {
			setCommentList((prevCommentList) =>
				prevCommentList.filter((comment) => comment.id !== id)
			);
			alert("팬레터가 삭제되었습니다");
			// 홈화면으로 이동
			navigate("/");
		}
	};

	return (
		<S.LayoutDiv>
			<Header></Header>
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
