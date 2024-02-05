import styled from "styled-components";

export const ListSection = styled.section`
	width: 100%;
	min-height: 600px;
`;

export const ListSecTitle = styled.h2`
	color: yellow;
	padding-top: 50px;
	// 전역스타일링 h2도 같이 적용됨
`;

export const CommentListUl = styled.ul`
	display: flex;
	justify-content: center;
	margin: 50px auto 10px 120px;
	padding-bottom: 60px;
	min-width: 800px;
	max-width: 1200px;
	flex-wrap: wrap;
	gap: 20px;
	color: white;
`;

export const CommentItemLi = styled.li`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	background-color: #b46bb4;
	border-radius: 30px;
	width: 700px;
	margin-right: 15px;
	cursor: pointer; // 마우스올리면 가리키는모양으로 바뀌기?
	&:hover {
		transition: all 0.2s; // 약간 시간두고
		transform: scale(1.03);
		// 마우스 올리면 항목이 살짝 커지게 하기
		box-shadow: 0px 0px 20px 1px var(--maincolor);
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
