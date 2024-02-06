import React, { useState } from "react";
import CustomInput from "components/common/CustomInput";
import CustomTextarea from "../common/CustomTextarea";
import * as S from "styles/FormSectionStyle";

function CommentForm({ memberList, setCommentList }) {
	const [nickname, setNickname] = useState("");
	const [content, setContent] = useState("");
	const [writedTo, setWritedTo] = useState("");

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
	const addCommentHandler = (newComment) => {
		setCommentList((prevCommentList) => [newComment, ...prevCommentList]); // fix: (newComment)로 써버려서 안되는 버그발생했었다ㅠㅠ
	};

	// NOTE form태그 제출 시 (코멘트 추가 버튼으로) 등록 / 유효성 검사 /기존 input,textarea 글자 초기화
	// FIXME 처음에 멤버선택 카리나 초기그대로 둔상태에서 등록시, 카리나 눌렀을때 안뜸
	// 다른거 눌렀다가 돌아와야 (바로 렌더링X?) 추가된 comment 뜸 (select태그의 문제?)
	const onSubmit = (e) => {
		e.preventDefault();

		// 유효성 검사
		if (!nickname || !content) {
			alert("닉네임과 내용을 모두 입력해주세요");
			return;
		}

		addCommentHandler({
			createdAt: new Date(),
			nickname,
			avatar: "src/assets/defult-avatar.png",
			content,
			writedTo,
			id: crypto.randomUUID(), // 고유한 id 부여
		});
		setNickname(""); // 초기화
		setContent("");
	};

	return (
		<form onSubmit={onSubmit}>
			<CustomInput
				type="text"
				value={nickname}
				onChange={handleNicknameInputChange}
				placeholder="닉네임은 최대 20자까지만 가능해요."
				maxLength="20"
			>
				닉네임
			</CustomInput>
			<CustomTextarea
				value={content}
				onChange={handleContentTextChange}
				placeholder="내용은 최대 250자까지만 작성할 수 있어요."
				maxLength="250"
			>
				내용
			</CustomTextarea>
			<S.SelectBox>
				<S.SelectLabel>To.</S.SelectLabel>
				<select value={writedTo} onChange={handleWritedToSelectChange}>
					{memberList.map((mem) => {
						return <option value={mem}>{mem}</option>;
					})}
				</select>
			</S.SelectBox>
			<S.AddBtn type="submit">팬레터 등록</S.AddBtn>
		</form>
	);
}

export default CommentForm;
