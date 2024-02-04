//내 깃헙 todolist 의 CustomInput.jsx 그대로 가져옴
import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
	display: flex;
`;

const InputText = styled.div`
	font-size: medium;
	/* font-weight: bold; */
	margin-right: 15px;
	margin-top: 25px;
`;

function CustomInput(props) {
	const { children, name, type, value, onChange, placeholder } = props;
	return (
		<InputBox>
			<InputText>{children}</InputText>
			<input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				maxlength="20" // 글자수제한 최대20자 / 왜 콘솔에서는 maxLength라는거지?
			/>
		</InputBox> //이거 style컴포넌트로 이름변경했다가 안바꿔준거때문에 흰화면만뜨고 에러알수없었음..
	);
}

export default CustomInput;
