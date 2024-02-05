import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "styles/CommentListItemStyle";

function CommentItem({ comment }) {
	const { id, avatar, nickname, createdAt, content } = comment;

	const navigate = useNavigate();

	// NOTE 각각의 Comment에 맞는 상세페이지로 이동
	const handleCommentClick = (id) => {
		navigate(`detail/${id}`);
	};

	const formattedCreatedTime = new Date(createdAt).toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	});

	return (
		<S.CommentItemLi key={id} onClick={() => handleCommentClick(id)}>
			<S.AvatarImg src={avatar} />
			<h5>{nickname}</h5>
			<time>{formattedCreatedTime}</time>
			<p>{content}</p>
		</S.CommentItemLi>
	);
}

export default CommentItem;
