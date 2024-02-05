import React from "react";

function Nav({ memRef, memberList, commentList, setFilteredByMemList }) {
	// comment없을 경우 해당 멤버명 뜨게하기 : useRef 사용

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	// FIXME 다시 누를때 동작 X
	const handleAllCommentsClick = () => {
		setFilteredByMemList((prevCommentList) => prevCommentList);
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
			<ul>
				<li>
					<button onClick={() => handleAllCommentsClick()}>전체</button>
				</li>
				{memberList.map((mem) => {
					return (
						<li>
							<button onClick={() => handleFilterWritedToClick(mem)}>
								{mem}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;
