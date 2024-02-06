import React, { useState } from "react";
import styled, { css } from "styled-components";

function Nav({ memRef, memberList, commentList, setFilteredByMemList }) {
	// comment없을 경우 해당 멤버명 뜨게하기 : useRef 사용 - memRef

	// 스타일링컴포넌트 props로 내려줄 것
	const [activeMember, setActiveMember] = useState("전체");

	// NOTE nav의 버튼 클릭 시 activeMember을 해당 li의 멤버명으로 변경(set)
	// (스타일링을 위해 쓸 것)
	const onActiveMember = (e) => {
		if (e.target === e.currentTarget) return;
		setActiveMember(e.target.textContent);
	};

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	const handleAllCommentsClick = () => {
		setFilteredByMemList(commentList);
	};

	// NOTE nav의 멤버별 li 클릭 시 해당 멤버 목록만 뜨게하기
	const handleFilterWritedToClick = (clickedMem) => {
		setFilteredByMemList(
			commentList.filter((comment) => comment.writedTo === clickedMem)
		);

		memRef.current = clickedMem;
	};

	return (
		<nav>
			{/*ul태그에 onclick이벤트 (아래하위li눌렀을때 스타일링) */}
			<ul onClick={onActiveMember}>
				<li>
					<MemberTabBtn
						onClick={() => handleAllCommentsClick()}
						$activeMember={activeMember} // 스타일컴포넌트 props ($)
					>
						전체
					</MemberTabBtn>
				</li>
				{memberList.map((mem) => {
					return (
						<li>
							<MemberTabBtn
								onClick={() => handleFilterWritedToClick(mem)}
								$activeMember={activeMember}
							>
								{mem}
							</MemberTabBtn>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;

const MemberTabBtn = styled.button`
	${(props) => {
		if (props.$activeMember === props.children) {
			return css`
				background-color: yellow;
				color: black;
			`;
		}
		return css`
			background-color: black;
			color: white;
		`;
	}}

	margin-top: 20px;
	box-shadow: 0px 0px 20px 0px var(--maincolor);
	width: 170px;
	height: 50px;
	font-size: large;
	border-radius: 1cm;

	&:hover {
		background-color: yellow;
		color: black;
		box-shadow: 0px 0px 2px 0px var(--maincolor);
	}
`;
