import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";
import * as S from "styles/PagesStyle";
import CommentItem from "../components/comment/CommentItem";

function Detail({ commentList, setCommentList }) {
	const [isEditing, setIsEditing] = useState(false); // 수정중 상태인지
	const [editingText, setEditingText] = useState(""); // 수정된 글 상태 기억하기 위함
	const navigate = useNavigate();
	const { id } = useParams();

	// 파라미터 id값 받아와서 해당하는 comment 카드 하나만 가져오기
	const selectedComment = commentList.find((comment) => comment.id === id);

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

	const handleEditingTextChange = (e) => {
		setEditingText(e.target.value);
	};

	// 수정완료 버튼
	const onEditDone = () => {
		if (!editingText) {
			alert("수정사항이 없습니다.");
			//alert만 뜨게할때는 return alert..하면 되지만 아래줄도 실행할거면 return마지막에 써줘야!
			setIsEditing(false);
			return;
		} //초기값 빈문자열상태

		// 내용 변경시
		const newComments = commentList.map((comment) => {
			if (comment.id === id) {
				// 여기서 id는 아까 param으로 받아온 것
				return { ...comment, content: editingText };
			}
			return comment;
		});
		setCommentList(newComments);
		setIsEditing(false); // 수정중상태 종료
		setEditingText(""); // 빈문자열로 초기화
		alert("수정되었습니다!");
	};

	return (
		<S.LayoutDiv>
			<Header></Header>
			<S.DetailBtn onClick={handleHomeClick} $homebtn="homebtn">
				Home
			</S.DetailBtn>
			<article>
				<CommentItem
					comment={selectedComment}
					pageName="detail"
					isEditing={isEditing}
					textareaChange={handleEditingTextChange}
				></CommentItem>
				{/*내용~버튼부분 조건부렌더링해서 ui 조건에 따라 다르게 떠야 */}
				{isEditing ? (
					<S.DetailBtnBox>
						<S.DetailBtn onClick={() => setIsEditing(false)}>취소</S.DetailBtn>
						<S.DetailBtn onClick={onEditDone}>수정완료</S.DetailBtn>
						{/*근데여기서는 콜백함수형태로 onClick속성에부여 x!? 아 set이아니라 함수자체가 들어가서? */}
					</S.DetailBtnBox>
				) : (
					<S.DetailBtnBox>
						<S.DetailBtn onClick={() => setIsEditing(true)}>수정</S.DetailBtn>
						<S.DetailBtn onClick={() => deleteCommentHandler(id)}>
							{/*답안에선 삭제버튼 온클릭 함수도 콜백함수형태로 넣지않았다  */}
							삭제
						</S.DetailBtn>
					</S.DetailBtnBox>
				)}
				{/* // <S.DetailBtnBox>
				// 	<S.DetailBtn onClick={() => setIsEditing(true)}>수정</S.DetailBtn>
				// 	<S.DetailBtn onClick={() => deleteCommentHandler(id)}>
				// 		삭제
				// 	</S.DetailBtn>
				// </S.DetailBtnBox> */}
			</article>

			<Footer></Footer>
		</S.LayoutDiv>
	);
}

export default Detail;
