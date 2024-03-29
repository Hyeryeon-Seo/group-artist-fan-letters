import React, { useRef, useState } from "react";
import Nav from "../layout/Nav";
import CommentItem from "./CommentItem";
import * as S from "styles/CommentListItemStyle";
import { useNavigate } from "react-router-dom";

function CommentList({ memberList, commentList }) {
	const [filteredByMemList, setFilteredByMemList] = useState(commentList);
	const memRef = useRef("카리나");

	const navigate = useNavigate();

	// NOTE 각각의 Comment에 맞는 상세페이지로 이동
	const handleCommentClick = (id) => {
		navigate(`detail/${id}`);
	};

	return (
		<S.ListSection>
			<S.ListSecTitle>Fan Letter Box</S.ListSecTitle>
			<Nav
				memRef={memRef}
				memberList={memberList}
				commentList={commentList}
				setFilteredByMemList={setFilteredByMemList}
			></Nav>
			<S.CommentListUl>
				{/* comment가 1개이상 있을 떄 */}
				{/* TODO commentlist (filterd..) 시간순으로 배치하기 (최신순 위에서부터) */}
				{filteredByMemList.length > 0 ? (
					filteredByMemList.map((comment) => {
						return (
							<S.CommentItemLi
								key={comment.id}
								onClick={() => handleCommentClick(comment.id)}
							>
								<CommentItem comment={comment}></CommentItem>
							</S.CommentItemLi>
						);
					})
				) : (
					<S.noCommentText>
						아직 💜{memRef.current}💜에게 남겨진 팬레터가 없어요. 📭 첫 번째
						팬레터의 주인공이 되어 주세요! 💌
					</S.noCommentText>
				)}
			</S.CommentListUl>
		</S.ListSection>
	);
}

export default CommentList;
