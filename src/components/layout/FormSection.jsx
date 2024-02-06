import React from "react";
import * as S from "styles/FormSectionStyle";
import CommentForm from "../comment/CommentForm";

function FormSection({ memberList, setCommentList }) {
	return (
		<S.FormSection>
			<h2>Write & Send</h2>
			<S.ImgFormBox>
				<S.ArtistImg
					src="https://smtown-cdn.smtown.com/upload/profile/web-detail/3bf7df3b42994b1ea223024f42548d43_2023-11-08-02-13-25.jpg"
					alt="aespa-image"
				/>
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
