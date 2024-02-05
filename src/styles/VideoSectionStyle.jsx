import styled from "styled-components";

export const VideoSection = styled.section`
	margin-top: 20px;
	overflow: hidden;
	width: 100%;
	height: 600px;
	display: flex; // NOTE flex와 아래 column까지 주니까, 처음에 영상밑 살짝 짤리는 현상이 해결됨 !! ?
	flex-direction: column;
`;

export const Iframe = styled.iframe`
	position: relative;
	top: 0px; // 마진
	bottom: 0px;
	width: 100%;
	height: 100%;
	border: none;
	margin-top: 30px;
`;
