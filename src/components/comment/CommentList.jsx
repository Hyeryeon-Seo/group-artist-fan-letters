import React, { useRef, useState } from "react";
import Nav from "../layout/Nav";
import CommentItem from "./CommentItem";
import * as S from "styles/CommentListItemStyle";

function CommentList({ memberList, commentList }) {
	// filtered.. 리스트도 state로 만들어줘야한다! 처음에 변수선언하고 따로 해봣는데, 그럼 화면에 렌더링이되지않는다 .. (리스트자체는 filter처리로 바뀌었어도)
	const [filteredByMemList, setFilteredByMemList] = useState(commentList);
	// 위에서 {}중괄호로썼다가 흰화면..ㅠ
	const memRef = useRef("카리나");

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
				{/* jsx내 if문 사용? 그냥 {}안에 쓰면 되는 줄 알았는데, 리턴 반환값이 필요한건가?
					함수로 따로 만들어서 호출하는게..? ㅠㅠ  */}
				{/* {showfilteredList()} */}
				{/*함수(); 세미콜론까지붙으면({}안에서) 작동안됨.. / 위처럼쓰면 그냥 함수호출은되는거같은데,화면에 나타나진않음 */}
				{/* 그냥일단 삼항연산자를 안에 써보니 됐다! IF문은 안에서 그대로 작성 X지만.. */}
				{/* {if (filteredByMemList.length > 0) */}
				{/* { */}
				{/* comment가 1개이상 있을 떄 */}
				{filteredByMemList.length > 0 ? (
					filteredByMemList.map((comment) => {
						// const createdDateTime = new Intl.DateTimeFormat("ko-KR", {
						// 	year: "numeric",
						// 	month: "numeric",
						// 	day: "numeric",
						// 	hour: "numeric",
						// 	minute: "numeric",
						// 	second: "numeric",
						// }).format(createdAt);
						return <CommentItem comment={comment}></CommentItem>;
					})
				) : (
					// 멤버명뜨게하기 성공! 혼자서 useRef 사용해 함 (ref에 멤버클릭함수에서 clickedMem을 담아줌)
					// 근데 그럼 그냥 변수 담아서 하면되지않나..  (렌더링되어도 변화하지않아야하는값??)
					// .current없이 그냥 memRef만 하면 흰화면, 안뜸!  &  ${}쓰는거아님
					// useRef없이 그냥 변수 할당 시 초기선언값 그대로임. (변하지X) - 이제 리액트 화면 그릴때는 그냥 JS하던때랑 다르게 생각해야하나보다
					//
					<S.noCommentText>
						아직 💜{memRef.current}💜에게 남겨진 팬레터가 없어요. 📭 첫 번째
						팬레터의 주인공이 되어 주세요! 💌
					</S.noCommentText>
				)}
				{/* // filteredByMemList.map((comment) => { 
						// 	const { id, avatar, nickname, createdAt, content } = comment; //구조분해할당
						// 	return (
						// 		// * return문 안 ()아니고 {}중괄호인거 주의
						// 		// 아래 onClick에서 인자로 콜백함수여야만 잘 먹힘
						// 		<CommentItemLi key={id} onClick={() => handleCommentClick(id)}>
						// 			<img src={avatar} />
						// 			{/*src="${comment.avatar}" 이미지 안뜸. 생각해보니 js문법쓸거면``백틱써야,
						// 			글고 어쩌피 comment.avatar로 꺼내는 값 자체가 ""문자열이라서 그냥 {} js문법으로 넣어주면됨 * / 
						// 			<h5>{nickname}</h5>
						// 			<time>{createdAt}</time>
						// 			<p>{content}</p>
						// 		</CommentItemLi>
						//	);
					 // )} * /
				// } */}
			</S.CommentListUl>
		</S.ListSection>
	);
}

export default CommentList;
