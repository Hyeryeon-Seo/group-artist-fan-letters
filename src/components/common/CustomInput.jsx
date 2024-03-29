import React from "react";
import styled from "styled-components";

function CustomInput(props) {
	const { children, name, type, value, onChange, placeholder, maxLength } =
		props;
	return (
		<InputBox>
			<InputTitle>{children}</InputTitle>
			<input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				maxLength={maxLength} // 글자수제한
			/>
		</InputBox>
	);
}

export default CustomInput;

// 같은 파일내부 styled-components 적용
const InputBox = styled.div`
	display: flex;
`;

const InputTitle = styled.div`
	font-size: 20px;
	/* font-weight: bold; */
	margin-right: 30px;
	margin-top: 25px;
`;
