import React, { useContext } from "react";
import { CommentContext } from "../../context/CommentContext";
import { useSelector } from "react-redux";

function Nav() {
	const commentList = useSelector((store) => store.commentList);

	const context = useContext(CommentContext);

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	const handleAllCommentsClick = () => {
		context.setFilteredByMemList(commentList);
	};

	// NOTE nav의 멤버별 li 클릭 시 해당 멤버 목록만 뜨게하기
	const handleFilterWritedToClick = (clickedMem) => {
		context.setFilteredByMemList(
			commentList.filter((comment) => comment.writedTo === clickedMem)
		);

		context.memRef.current = clickedMem;
	};

	return (
		<nav>
			<ul>
				<li>
					<button onClick={() => handleAllCommentsClick()}>전체</button>
				</li>
				{context.memberList.map((mem) => {
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
