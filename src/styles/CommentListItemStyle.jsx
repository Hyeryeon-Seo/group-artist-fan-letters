import styled from "styled-components";

export const ListSection = styled.section`
	min-height: 600px;
	background-color: #25072c;
`;

export const ListSecTitle = styled.h2`
	color: white;
	padding-top: 50px;
	// 전역스타일링 h2도 같이 적용됨
`;

export const CommentListUl = styled.ul`
	//todolist 의 li.. 바꿔야. . 태그 가져와서 수정하기
	display: flex;
	justify-content: center;
	margin: 10px auto 0px 120px;
	padding-bottom: 60px;
	/* 최대 최소넓이는 리스트 뜨는 부분에만 적용*/
	min-width: 800px;
	max-width: 1200px;
	flex-wrap: wrap; /* 필수! 카드리스트 다음 줄 이동하게 해줌 */
	gap: 20px;
	color: white;
`;

export const CommentItemLi = styled.li`
	//todolist 의 ul태그 가져와서 수정
	display: flex;
	/* gap: 30px; */
	justify-content: space-between;
	margin-top: 20px;
	background-color: rgb(236, 186, 236);
	border: none;
	border-radius: 5px;
	width: 400;
	margin-right: 15px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
	color: black;
	padding: 10px;
`;

export const AvatarImg = styled.img`
	width: 100px;
`;

export const noCommentText = styled.p`
	display: flex;
	align-items: center;
	margin-left: 10rem;
	margin-top: 5rem;
	font-size: 20px;
`;