import React from "react";
import Header from "../components/layout/Header";
import VideoSection from "../components/layout/VideoSection";
import FormSection from "../components/layout/FormSection";
import Footer from "../components/layout/Footer";
import * as S from "styles/PagesStyle";
import CommentList from "../components/comment/CommentList";

//ANCHOR -
// Router로부터 props 전달받기
function Home({ memberList, commentList, setCommentList }) {
	// 일단은 Home에다가 쓰고 나눠보자 ㅠㅠ

	// jsx문에서 if문을 사용하려면 위 코드처럼 즉시실행함수 안에 작성해주면된다.
	/* const showfilteredList = () => {
		if (filteredByMemList.length > 0) {
			// console.log(filteredByMemList); 콘솔에
			filteredByMemList.map((comment) => {
				// console.log(comment);
				const { id, avatar, nickname, createdAt, content } = comment; //구조분해할당
				return (
					// * return문 안 ()아니고 {}중괄호인거 주의
					// 아래 onClick에서 인자로 콜백함수여야만 잘 먹힘
					// console.log({ id }),콘솔그대로찍고 () ,로연결하니까 콘솔로 떴다 겉에{}안씀
					<CommentItemLi key={id} onClick={() => handleCommentClick(id)}>
						<img src={avatar} />
						{/*src="${comment.avatar}" 이미지 안뜸. 생각해보니 js문법쓸거면``백틱써야,
									글고 어쩌피 comment.avatar로 꺼내는 값 자체가 ""문자열이라서 그냥 {} js문법으로 넣어주면됨 * /}
						<h5>{nickname}</h5>
						<time>{createdAt}</time>
						<p>{content}</p>
					</CommentItemLi>
				);
			});
		}
	}; */

	return (
		// 이 안에, Home페이지에서만 쓰일 레이아웃부분 (헤더,푸터 등 제외)을 작성하는건가?
		// 이 내용이 Layout의 children으로 넘겨줄 부분?
		/* <App></App> 이런거 아님..  app컴포넌트에서 router임포트해서쓰는듯
			여긴 기능을 넣는건가. 레이아웃에서 레이아웃틀, 등 짜고
		일단 여기서 짜서 메인페이지 만들고, 컴포넌트화시키자*/
		<S.LayoutDiv>
			<Header></Header>
			<VideoSection></VideoSection>
			<FormSection
				memberList={memberList}
				commentList={commentList}
				setCommentList={setCommentList}
			></FormSection>
			<CommentList
				commentList={commentList}
				memberList={memberList}
			></CommentList>
			{/*참고로 주석달때 , 이미 주석있어서 안먹히는거.. *과/를 띄어주면 됨 
			but 예상치못하게 주석이 문제를 일으키기도하니 아예 주석처리는 문자하나씩 빼며 수정하는게*/}
			<Footer></Footer>
		</S.LayoutDiv>
	);
}

export default Home;
