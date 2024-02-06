import React from "react";
import * as S from "styles/CommentListItemStyle";

function CommentItem({ comment, pageName, isEditing, textareaChange }) {
	const { avatar, nickname, createdAt, content } = comment;
	// NOTE 날짜시간변환 알아두기! (fakeData의 createdAt에는 ISO 8601 포맷 날짜시간이 있었음)
	const formattedCreatedTime = new Date(createdAt).toLocaleDateString("ko-KR", {
		year: "2-digit",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	});

	return (
		<>
			<S.AvatarImg src={avatar} />
			<S.CommentTextBox $detail={pageName}>
				<S.CommentNameDateBox $detail={pageName}>
					<h5>{nickname}</h5>
					<time>{formattedCreatedTime}</time>
				</S.CommentNameDateBox>
				{/* 이중 삼항연산자 */}
				{pageName === "detail" ? (
					isEditing ? (
						<>
							<S.DetailTextarea
								autoFocus
								defaultValue={content}
								onChange={textareaChange}
								placeholder="내용은 최대 250자까지만 작성할 수 있어요."
								maxLength="250"
							></S.DetailTextarea>
						</>
					) : (
						<S.CommentContent $detail={pageName}>{content}</S.CommentContent>
					)
				) : (
					<S.CommentContent $detail={pageName}>{content}</S.CommentContent>
				)}
			</S.CommentTextBox>
		</>
	);
}

export default CommentItem;
