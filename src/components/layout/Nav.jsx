import React from "react";

function Nav({ memRef, memberList, commentList, setFilteredByMemList }) {
	// comment없을 경우 해당 멤버명 뜨게하기 : useRef 사용

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	const handleAllCommentsClick = () => {
		// (prevCommentList) => prevCommentList 이런거 아님 - 전체버튼동작 x
		setFilteredByMemList((prevCommentList) => prevCommentList);
	};

	// NOTE nav의 멤버별 li 클릭 시 해당 멤버 목록만 뜨게하기
	//  (리렌더링되게하기? - useEffect안에 handle..click자체 넣으면 아예 X. 근데 useEffect는 렌더링될때마다실행되는거지, 렌더링시키는게아님)
	// useEffect(() => {
	const handleFilterWritedToClick = (clickedMem) => {
		// 이전과제 todolist 참고
		//처음 눌렸을때의 commentlist를 유지..
		//뜨게하려면 state인 commentList , set..써야 , 근데 그럼 set되어서 고정? 두번쨰 filter이어서 돼버림
		// 아! state따로만들고 거기에 set해야. .. ?! 그럼 또 리스트 하나하나 풀떄어떻게..?..
		// set을 안해야하는듯. 그냥 filter된거를 담아서 보여주기.. -> 근데 또 복잡. ㅠㅠ
		// 차라리 display:none같은 css를 쓸까싶지만.
		setFilteredByMemList(
			commentList.filter((comment) => comment.writedTo === clickedMem)
		);

		// NOTE
		memRef.current = clickedMem;
		// filtered.. 리스트도 state로 만들어줘야한다! 처음에 변수선언하고 따로 해봣는데, 그럼 화면에 렌더링이되지않는다 .. (리스트자체는 filter처리로 바뀌었어도)
		// 클릭된멤버명과 일치시에만-filter-뜨기
		//이전과제 삭제버튼처럼 (prevCommentList 받아서하는거랑상관x) 처음버튼누른경우 맞게 뜨지만, 두번째로 버튼누르면 아예 안뜸
		// set으로 filter된 상태로 set해서 다음버튼 눌렀을떄 filter된상태의list가 유지되어서?
		// render()써봄 -> x
	};
	// }, [clickedMem]);

	return (
		<nav>
			<ul>
				<li>
					<button onClick={() => handleAllCommentsClick()}>전체</button>
				</li>
				{memberList.map((mem) => {
					return (
						// onClick에 콜백함수로 넣어주는거 잊지 말기
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
