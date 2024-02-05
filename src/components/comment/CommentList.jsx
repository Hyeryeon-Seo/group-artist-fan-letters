import React, { useContext } from "react";
import Nav from "../layout/Nav";
import CommentItem from "./CommentItem";
import * as S from "styles/CommentListItemStyle";
import { CommentContext } from "../../context/CommentContext";

function CommentList() {
	const context = useContext(CommentContext);
	return (
		<S.ListSection>
			<S.ListSecTitle>Fan Letter Box</S.ListSecTitle>
			<Nav></Nav>
			<S.CommentListUl>
				{/* comment가 1개이상 있을 떄 */}
				{/* TODO commentlist (filterd..) 시간순으로 배치하기 (최신순 위에서부터) */}
				{context.filteredByMemList.length > 0 ? (
					context.filteredByMemList.map((comment) => {
						return <CommentItem comment={comment}></CommentItem>; // props 사용
					})
				) : (
					<S.noCommentText>
						아직 💜{context.memRef.current}💜에게 남겨진 팬레터가 없어요. 📭 첫
						번째 팬레터의 주인공이 되어 주세요! 💌
					</S.noCommentText>
				)}
			</S.CommentListUl>
		</S.ListSection>
	);
}

export default CommentList;
