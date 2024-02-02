import React from "react";

import styled from "styled-components";

const HeaderBox = styled.header`
	margin-top: 10px;
`;
function Header() {
	return (
		<HeaderBox>
			<h1>Send 💌 your love 💌 to AESPA</h1>
			{/* 시간 뜨게 하기 */}
		</HeaderBox>
	);
}

export default Header;
