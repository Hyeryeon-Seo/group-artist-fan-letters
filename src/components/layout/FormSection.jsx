import React from "react";
import * as S from "styles/FormSectionStyle";
import CommentForm from "../comment/CommentForm";

function FormSection({ memberList, commentList, setCommentList }) {
	return (
		<S.FormSection>
			<h2>Write & Send</h2>
			<S.ImgFormBox>
				{/*아래도 img이지만 전역스타일링보다 세부?스타일링우선 적용됨 (똑같은 border-radius속성에서) */}
				<S.ArtistImg src="src\assets\aespaGroupImage.jpg"></S.ArtistImg>
				{/*form태그 - 코멘트(팬레터) 입력, 등록하기*/}
				<CommentForm memberList={memberList}></CommentForm>
			</S.ImgFormBox>
		</S.FormSection>
	);
}

export default FormSection;
