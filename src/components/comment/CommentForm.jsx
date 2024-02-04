import React, { useState } from "react";
import CustomInput from "components/common/CustomInput";

function CommentForm({ memberList }) {
	// const nowlist = commentList; //초기코멘트리스트 - 담아서 아래서 출력해보니, commentList변하는거마다 (초기)선언되는지 똑같이 뜸.. (전부다시새로고침?)
	const [nickname, setNickname] = useState("");
	// * fix: 위 commetList에 들어가는 객체의 키는 nickname인데 state로는 nickName이라고하면 혼동
	// 아래에서 단축속성명 쓰기도 힘들다(거기서 버그났는데 몰랐다) 통일시키기
	const [content, setContent] = useState("");
	const [writedTo, setWritedTo] = useState("");

	// * state,setState 항상 (handle~명) e.target.value 를 set해주는 함수와 같이 간다는 점 기억
	// * input등의 입력창태그에도 속성 value와 onChange 같이 간다는 점!
	// (form) input의 입력value값 (닉네임) 가져오기 (가져와서 state set해줌)
	const handleNicknameInputChange = (e) => {
		setNickname(e.target.value);
	};

	// (form) textarea의 입력value값 (내용) 가져오기
	const handleContentTextChange = (e) => {
		setContent(e.target.value);
	};

	// (select)-option의 선택value값 (writedTo) 가져오기
	const handleWritedToSelectChange = (e) => {
		setWritedTo(e.target.value);
	};

	// // 등록하기
	// // *입력태그의 onChange속성의 handle함수로 입력값(..value)가져왔으면, form태그 onSubmit속성에 넣는 함수onSubmit으로 추가할목록아이템만들고(add해줄거써주기)
	// //   이 함수로 해당아이템을 리스트에 set해준다
	// const addCommentHandler = (newComment) => {
	// 	setCommentList((prevCommentList) => [...prevCommentList, newComment]); // fix: (newComment)로 써버려서 안되는 버그발생했었다ㅠㅠ
	// 	//nowcommentlist = commentList; // add까지된 상태의 목록 add가안됐다면...?
	// };

	// // form태그 제출 시 (코멘트 추가 버튼, 등록 / 기존 input,textarea 글자 초기화
	// // FIXME 처음에 멤버선택 카리나 초기그대로 둔상태에서 등록시, 카리나 눌렀을때 안뜸
	// // (모든멤버) 전체에서도 뜨려면, 다른거 눌렀다가 돌아와야 (렌더링X?)
	const onSubmit = (e) => {
		e.preventDefault(); // * form태그의 onSubmit에 들어가는 함수에서는, e(vent)받아서 preventDefault해줘야함잊지말자 (기본페이지이동이벤트방지)

		// 유효성 검사 // * handle..함수로 받은 입력값으로 set해준 상태니까 nickName 등 아래에 써주고
		if (!nickname || !content) {
			alert("닉네임과 내용을 모두 입력해주세요");
			return;
		}

		addCommentHandler({
			// * add추가해주는 함수에 넣어줄 아이템(객체) 여기서 써준다
			createdAt: new Date(),
			// Date.now()아님 - 다른시간?..알수없는숫자문자열?뜸
			// Sun Feb 04 2024 21:45:58 GMT+0900 (한국 표준시) 이런 식으로 뜸
			nickname, // handle..함수로 set되어있는 nickname과 content   -state변수
			avatar: "src/assets/defult-avatar.png", // 상대경로복붙해서 이주소쓰니 되는데.. config로 절대경로 src설정했는데, assets/..먹히지않음ㅠ
			content,
			writedTo,
			id: crypto.randomUUID(), // 고유한 id 부여
		});
		// e.target.reset(); 안먹힘
		// console.log(commentList);
		setNickname("");
		setContent("");
	};

	return (
		<form onSubmit={onSubmit}>
			<CustomInput
				type="text"
				value={nickname}
				onChange={handleNicknameInputChange}
				placeholder="닉네임은 최대 20자까지만 가능해요."
			>
				닉네임
			</CustomInput>
			<label>내용</label>
			<textarea
				value={content}
				onChange={handleContentTextChange}
				maxlength="100"
				placeholder="내용은 최대 100자까지만 작성할 수 있어요."
			></textarea>
			{/* style={{ width: "200px" }} 안먹힘 */}
			<label>To.</label>
			<select value={writedTo} onChange={handleWritedToSelectChange}>
				{memberList.map((mem) => {
					return <option value={mem}>{mem}</option>;
				})}
			</select>
			<button type="submit">팬레터 등록</button>
		</form>
	);
	{
		/*갑자기흰화면만뜨고 뭐가에러인지도 알수없는 상황발생 -> 혹시나해서 form부분주석처리하니 잘떴다! 버그수정 */
	}
}

export default CommentForm;
