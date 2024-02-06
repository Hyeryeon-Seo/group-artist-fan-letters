import React from "react";
import * as S from "styles/FormSectionStyle";
import CommentForm from "../comment/CommentForm";

function FormSection({ memberList, setCommentList }) {
	return (
		<S.FormSection>
			<h2>Write & Send</h2>
			<S.ImgFormBox>
				<S.ArtistImg src="https://github.com/Hyeryeon-Seo/group-artist-fan-letters/blob/props-drilling/src/assets/aespaGroupImage.jpg"></S.ArtistImg>
				{/*form태그 - 코멘트(팬레터) 입력, 등록하기*/}
				<CommentForm
					memberList={memberList}
					setCommentList={setCommentList}
				></CommentForm>
			</S.ImgFormBox>
		</S.FormSection>
	);
}

export default FormSection;
